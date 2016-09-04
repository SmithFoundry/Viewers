import { MeasurementsConfiguration } from '../both/configuration';

Meteor.startup(() => {
	console.log("Handling Configuration");
	
	const config = MeasurementsConfiguration.getConfiguration();

	/*console.log(config.measurementTools);
	console.log(config.dataExchange);
	console.log(config.dataValidation);*/
});