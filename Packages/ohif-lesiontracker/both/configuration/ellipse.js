import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/schema';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const EllipseHandlesSchema = new SimpleSchema({
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
	},
});

const EllipseSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: EllipseHandlesSchema,
        label: 'Handles'
    }
}]);

export const ellipse = {
    id: 'ellipse',
    name: 'Ellipse',
    cornerstoneToolType: 'ellipticalRoi',
    showInMeasurementTable: false,
    schema: EllipseSchema
}