let Configuration;

function setConfiguration(config) {
	Configuration = config;
}

function getConfiguration() {
	return Configuration;
}

function getMeasurementsApi() {
	console.log('OHIF-Measurements: Defining MeasurementApi');
	const config = Configuration;

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

	config.measurementTools.forEach(tool => {
	    const measurementTypeId = tool.id;

	    MeasurementApi.prototype[measurementTypeId] = new Mongo.Collection(null);
	    MeasurementApi.prototype[measurementTypeId].attachSchema(tool.schema);

	    MeasurementApi.prototype.fetch = (measurementTypeId, selector, options) => {
	    	if (!this[measurementTypeId]) {
	    		throw 'MeasurementApi: No Collection with the id: ' + measurementTypeId;
	    	}

	        selector = selector || {};
	        options = options || {};
	        return this[measurementTypeId].find(selector, options).fetch();
	    };
	});

	return MeasurementApi;
}

export const MeasurementsConfiguration = {
	setConfiguration: setConfiguration,
	getConfiguration: getConfiguration,
	getMeasurementsApi: getMeasurementsApi
};