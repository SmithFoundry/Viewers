import { MeasurementsConfiguration } from 'meteor/ohif:measurements/both/configuration';

const config = MeasurementsConfiguration.getConfiguration();
const toolTypes = config.measurementTools.map(tool => {
    return tool.cornerstoneToolType;
});

handleMeasurementModified = function(e, eventData) {
    const measurementData = eventData.measurementData;

    if (toolTypes.indexOf(measurementData.toolType) > -1) {
        log.info('CornerstoneToolsMeasurementModified');
    }
};