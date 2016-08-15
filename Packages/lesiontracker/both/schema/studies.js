import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const schema = new SimpleSchema({
    patientId: {
        type: String,
        label: 'Patient ID',
    },
    timepointId: {
        type: String,
        label: 'Timepoint ID',
        regEx: SimpleSchema.RegEx.Id
    },
    studyInstanceUid: {
        type: String,
        label: 'Study Instance Uid'
    },
});