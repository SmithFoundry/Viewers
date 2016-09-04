import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { MeasurementsConfiguration } from '../../both/configuration';

Meteor.startup(() => {
    const config = MeasurementsConfiguration.getConfiguration();
    const measurementTypeIds = config.measurementTools.map(tool => {
        return tool.id
    });

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

    measurementTypeIds.forEach(measurementTypeId => {
        MeasurementApi.prototype[measurementTypeId] = new Mongo.Collection(null);

        MeasurementApi.prototype.get = (measurementTypeId) => {
            return this[measurementTypeId].find({}).fetch();
        }
    });

    console.log(Object.keys(MeasurementApi.prototype));
});