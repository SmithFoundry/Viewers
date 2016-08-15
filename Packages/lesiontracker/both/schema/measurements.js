import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const TimepointMeasurementSchema = new SimpleSchema({
    sopInstanceUid: {
        type: String,
        label: 'sopInstanceUid'
    },
    seriesInstanceUid: {
        type: String,
        label: 'SeriesInstanceUid'
    },
    studyInstanceUid: {
        type: String,
        label: 'studyInstanceUid'
    },
    handles: {
        type: Object,
        label: 'Tool Handles'
    },
    imageId: {
        type: String,
        label: 'Cornerstone Image Id'
    }
});

export const schema = new SimpleSchema({
    patientId: {
        type: String,
        label: 'Patient ID',
    },
    id: {
        type: String,
        label: 'Lesion ID',
        regEx: SimpleSchema.RegEx.Id
    },
    lesionNumber: {
        type: Number,
        label: 'Lesion Number',
    },
    lesionNumberAbsolute: {
        type: Number,
        label: 'Absolute Lesion Number',
    },
    isTarget: {
        type: Boolean,
        label: 'Target Lesion?',
        defaultValue: true,
    },
    isNodal: {
        type: Boolean,
        label: 'Nodal Lesion?',
        defaultValue: false,
    },
    location: {
        type: String,
        label: 'Lesion Location',
        optional: true
    },
    toolType: {
        type: String,
        allowedValues: ['bidirectional', 'nonTarget'],
        label: 'Tool Type used to Mark Lesion',
    },
    // TODO: Find a way to validate this data (keys are timepointIds, values are TimepointMeasurementSchema
    // or restructure it into an array?
    timepoints: {
        type: Object,
        label: 'Lesion Data at each Timepoint'
    },
    clientId: {
        type: String,
        label: 'Client ID',
        regEx: SimpleSchema.RegEx.Id
    }
});