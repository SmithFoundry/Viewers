import { MeasurementsConfiguration } from '../../both/configuration';
import { MeasurementApi } from '../api/measurements';

Template.registerHelper('measurementTools', () => {
	console.log('helper:measurementTools');
    if (!MeasurementsConfiguration) {
        return;
    }

    const config = MeasurementsConfiguration.getConfiguration();

    return config.measurementTools;
});

Template.registerHelper('measurementApiCollection', measurementTypeId => {
	console.log('helper:measurementApiCollection');
    if (!measurementTypeId) {
        return;
    }

    const api = Template.instance().data.measurementApi;
    return api[measurementTypeId].find();
});
