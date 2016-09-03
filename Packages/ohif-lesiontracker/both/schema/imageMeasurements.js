import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const schema = new SimpleSchema({
    patientId: {
        type: String,
        label: 'Cornerstone Image ID'
    },
    toolType: {
        type: String,
        allowedValues: ['ellipticalRoi', 'length'],
        label: 'Tool Type used for Temporary Measurement',
    },
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
    },
    clientId: {
        type: String,
        label: 'Client ID',
        regEx: SimpleSchema.RegEx.Id
    }
});