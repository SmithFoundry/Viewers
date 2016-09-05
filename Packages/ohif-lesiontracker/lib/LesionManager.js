measurementValuesByType = {
    bidirectional: [
        'shortestDiameter',
        'longestDiameter'
    ],
    nonTarget: ['response'],
    crTool: ['response'],
    exTool: ['response'],
    unTool: ['response'],
    length: ['length'],
    ellipticalRoi: [
        'area',
        'mean',
        'stdev'
    ]
};

/**
 * Update the Timepoint object for a specific Measurement.
 * If no measurement exists yet, one will be created.
 *
 * Input is toolData from the Cornerstone tool
 *
 * @param measurementData
 */
function updateLesionData(measurementData) {
    var study = Studies.findOne({
        studyInstanceUid: measurementData.studyInstanceUid
    });

    if (!study) {
        log.warn('Study is not associated with a timepoint');
        return;
    }

    var timepoint = Timepoints.findOne({
        timepointId: study.timepointId
    });

    if (!timepoint) {
        log.warn('Timepoint in an image is not present in the Timepoints Collection?');
        return;
    }

    // Find the specific lesion to be updated
    var existingMeasurement;
    if (measurementData.id && measurementData.id !== 'notready') {
        existingMeasurement = Measurements.findOne(measurementData.id);
    } else {
        existingMeasurement = Measurements.findOne({
            lesionNumber: measurementData.lesionNumber,
            isTarget: measurementData.isTarget
        });
    }

    // Create a structure for the timepointData based
    // on this Lesion's toolData
    var timepointData = {
        seriesInstanceUid: measurementData.seriesInstanceUid,
        studyInstanceUid: measurementData.studyInstanceUid,
        sopInstanceUid: measurementData.sopInstanceUid,
        handles: measurementData.handles,
        imageId: measurementData.imageId
    };

    if (!measurementData.toolType) {
        // For debugging, might want to switch to measurement types later
        measurementData.toolType = measurementData.isTarget ? 'bidirectional' : 'nonTarget';
    }

    // Populate this timepoint's data with whichever values
    // are stored for this Measurement type
    var values = measurementValuesByType[measurementData.toolType];
    values.forEach(function(valueName) {
        timepointData[valueName] = measurementData[valueName];
    });

    // If no such lesion exists, we need to add one
    if (!existingMeasurement) {
        // Create a data structure for the Measurement
        // based on the current tool data
        var measurement = {
            lesionNumber: measurementData.lesionNumber,
            isTarget: measurementData.isTarget,
            patientId: measurementData.patientId,
            id: measurementData.id || Random.id(),
            toolType: measurementData.toolType
        };
        if (measurementData.toolType) {
            measurement.toolType = measurementData.toolType;
        }

        // Retrieve the location name given the locationUID
        if (measurementData.locationUID !== undefined) {
            var locationObj = LesionLocations.findOne({
                locationUID: measurementData.locationUID
            });

            measurement.location = locationObj.location;
            measurement.isNodal = locationObj.isNodal;
        }

        // Add toolData parameters to the Measurement at this Timepoint
        measurement.timepoints = {};
        measurement.timepoints[timepoint.timepointId] = timepointData;

        // Set a flag to prevent duplication of toolData
        measurement.clientId = ClientId;

        // Increment and store the absolute Lesion Number for this Measurement
        measurement.lesionNumberAbsolute = Measurements.find().count() + 1;

        // Insert this into the Measurements Collection
        // Save the ID into the toolData (not sure if this works?)
        log.info('LesionManager inserting Measurement');
        measurement.id = Measurements.insert(measurement);
    } else {
        measurementData.id = existingMeasurement._id;
        measurementData.isNodal = existingMeasurement.isNodal;

        if (_.isEqual(existingMeasurement.timepoints[timepoint.timepointId], timepointData)) {
            return;
        }

        // Update timepoints from lesion data
        existingMeasurement.timepoints[timepoint.timepointId] = timepointData;

        log.info('LesionManager updating Measurement');
        Measurements.update(existingMeasurement._id, {
            $set: {
                timepoints: existingMeasurement.timepoints,
                clientId: ClientId
            }
        });
    }
}

/**
 * Returns new lesion number according to timepointId
 * @param timepointId
 * @param isTarget
 * @returns {*}
 */
function getNewLesionNumber(timepointId, isTarget) {
    // Get all current lesion measurements
    var numMeasurements = Measurements.find({
        isTarget: isTarget
    }).count();

    // If no measurements exist yet, start at 1
    if (!numMeasurements) {
        return 1;
    }

    // Find related measurements (i.e. target or non-target)
    var measurements = Measurements.find({
        isTarget: isTarget
    }, {
        sort: {
            lesionNumber: 1
        }
    }).fetch();

    // If measurements exist, find the last lesion number
    // from the given timepoint
    var lesionNumberCounter = 1;

    // Search through every Measurement to see which ones
    // already have data for this Timepoint, if we find one that
    // doesn't have data, we will stop there and use that as the
    // current Measurement
    measurements.every(function(measurement) {
        // If this measurement has no data for this Timepoint,
        // use this as the current Measurement
        if (!measurement.timepoints[timepointId]) {
            lesionNumberCounter = measurement.lesionNumber;
            return false;
        }

        lesionNumberCounter++;
        return true;
    });
    return lesionNumberCounter;
}

/**
 * If the current Lesion Number already exists
 * for any other timepoint, returns lesion locationUID
 * @param measurementData
 * @returns {*}
 */
function lesionNumberExists(measurementData) {
    var measurement = Measurements.findOne({
        lesionNumber: measurementData.lesionNumber,
        isTarget: measurementData.isTarget
    });

    if (!measurement) {
        return;
    }

    return measurement.locationId;
}

LesionManager = {
    updateLesionData: updateLesionData,
    getNewLesionNumber: getNewLesionNumber,
    lesionNumberExists: lesionNumberExists
};
