import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/schema';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const BidirectionalHandlesSchema = new SimpleSchema({
	start: {
		type: CornerstoneHandleSchema,
		label: 'Start'
	},
	end: {
		type: CornerstoneHandleSchema,
		label: 'End'
	},
	perpendicularStart: {
		type: CornerstoneHandleSchema,
		label: 'Perpendicular Start'
	},
	perpendicularEnd: {
		type: CornerstoneHandleSchema,
		label: 'Perpendicular End'
	},
	textBox: {
		type: CornerstoneHandleSchema,
		label: 'Text Box'
	},
});

const BidirectionalSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: BidirectionalHandlesSchema,
        label: 'Handles'
    },
    longestDiameter: {
    	type: Number,
    	label: 'Longest Diameter'
    },
    shortestDiameter: {
    	type: Number,
    	label: 'Shortest Diameter'
    }
}]);

export const bidirectional = {
    id: 'targets',
    name: 'Targets',
    cornerstoneToolType: 'bidirectional',
    showInMeasurementTable: true,
    includeInCaseProgress: true,
    schema: BidirectionalSchema
}