let Configuration;

function setConfiguration(config) {
	Configuration = config;
}

function getConfiguration() {
	return Configuration;
}

export const MeasurementsConfiguration = {
	setConfiguration: setConfiguration,
	getConfiguration: getConfiguration
};