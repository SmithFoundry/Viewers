import { bidirectional } from './bidirectional';
import { nonTarget } from './nonTarget';
import { length } from './length';
import { ellipse } from './ellipse';

import { retrieveMeasurements, storeMeasurements } from './dataExchange';
import { validateMeasurements } from './dataValidation';

import { MeasurementsConfiguration } from 'meteor/ohif:measurements/both/configuration';

console.log('OHIF-LesionTracker: Defining Configuration for Measurements');
MeasurementsConfiguration.setConfiguration({
	measurementTools: [
		bidirectional,
		nonTarget,
		length,
		ellipse
	],
	dataExchange: {
		retrieve: retrieveMeasurements,
		store: storeMeasurements
	},
	dataValidation: {
		validation: validateMeasurements
	}
});