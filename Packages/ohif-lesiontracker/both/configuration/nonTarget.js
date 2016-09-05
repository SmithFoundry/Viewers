import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/schema';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const NonTargetHandlesSchema = new SimpleSchema({
	start: {
		type: CornerstoneHandleSchema,
		label: 'Start'
	},
	end: {
		type: CornerstoneHandleSchema,
		label: 'End'
	},
	textBox: {
		type: CornerstoneHandleSchema,
		label: 'Text Box'
	}
});

const NonTargetSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: NonTargetHandlesSchema,
        label: 'Handles'
    },
    response: {
    	type: String,
    	label: 'Response'
    }
}]);

export const nonTarget = {
    id: 'nonTargets',
    name: 'Non-Targets',
    cornerstoneToolType: 'nonTarget',
    showInMeasurementTable: true,
    schema: NonTargetSchema
}