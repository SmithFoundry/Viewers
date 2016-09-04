import { MeasurementsConfiguration } from '../../both/configuration';

Meteor.startup(() => {
    const config = MeasurementsConfiguration.getConfiguration();
    const toolIds = config.measurementTools.map(tool => { return tool.id });

    class MeasurementApi {
        retrieveMeasurements() {
            const retrievalFn = config.dataExchange.retrieve;
            if (retrievalFn && retrievalFn instanceof Function) {
                retrievalFn();
            }
        }

        storeMeasurements() {
            const storeFn = config.dataExchange.store;
            if (storeFn && storeFn instanceof Function) {
                storeFn();
            }   
        }

        validateMeasurements() {
            const validateFn = config.dataValidation.validateMeasurements;
            if (validateFn && validateFn instanceof Function) {
                validateFn();
            }   
        }
    }

    MeasurementApi.prototype.get = {};

    measurementTypeIds.forEach(measurementTypeId => {
        MeasurementApi.prototype[measurementTypeId] = new Mongo.Collection(null);

        MeasurementApi.prototype.get[measurementTypeId] = (body) => {
            return this[measurementTypeId].find({}).fetch();
        }
    });

    console.log(MeasurementApi);
});