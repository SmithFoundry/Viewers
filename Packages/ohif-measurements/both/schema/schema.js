import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Measurement = new SimpleSchema({
    userId: {
        type: String,
        label: "User ID"
    },
    // Force value to be current date (on server) upon insert
    // and prevent updates thereafter.
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            } else {
                this.unset(); // Prevent user from supplying their own value
            }
        }
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
})

export const StudyLevelMeasurement = new SimpleSchema([Measurement, {
    studyInstanceUid: {
        type: String,
        label: 'Study Instance UID'
    }
}]);

export const SeriesLevelMeasurement = new SimpleSchema([StudyLevelMeasurement, {
    seriesInstanceUid: {
        type: String,
        label: 'Series Instance UID'
    }
}]);

export const InstanceLevelMeasurement = new SimpleSchema([StudyLevelMeasurement, SeriesLevelMeasurement, {
    sopInstanceUid: {
        type: String,
        label: 'SOP Instance UID'
    }
}]);

export const FrameLevelMeasurement = new SimpleSchema([StudyLevelMeasurement, SeriesLevelMeasurement, InstanceLevelMeasurement, {
    frameIndex: {
        type: Number,
        min: 0,
        label: 'Frame index in Instance'
    },
}]);

export const CornerstoneToolMeasurement = new SimpleSchema([StudyLevelMeasurement,
                                                            SeriesLevelMeasurement,
                                                            InstanceLevelMeasurement,
                                                            FrameLevelMeasurement, {
    toolType: {
        type: String,
        label: 'Cornerstone Tool Type'
    },
}]);

const BidirectionalSchema = new SimpleSchema([FrameLevelMeasurement, {
    test: {
        type: String,
        label: 'A string label'
    }
}]);

const bidirectionalMeasurementType = {
    id: 'bidirectional',
    name: 'Target',
    cornerstoneToolType: 'bidirectional',
    schema: BidirectionalSchema
}

console.log(bidirectionalMeasurementType);
console.log(BidirectionalSchema);
//Measurements.types.push(bidirectionalMeasurementType);