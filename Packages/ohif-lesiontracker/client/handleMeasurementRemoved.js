import { MeasurementsConfiguration } from 'meteor/ohif:measurements/both/configuration';

const config = MeasurementsConfiguration.getConfiguration();
const toolTypes = config.measurementTools.map(tool => {
    return tool.cornerstoneToolType;
});

handleMeasurementRemoved = function(e, eventData) {
    const measurementData = eventData.measurementData;

    if (toolTypes.indexOf(measurementData.toolType) > -1) {
        log.info('CornerstoneToolsMeasurementRemoved');

        const measurementTool = config.measurementTools.filter(tool => {
            return (tool.cornerstoneToolType === measurementData.toolType);
        });

        const measurementTypeId = measurementTool.measurementTypeId;
        const selector = {
            _id: measurementData._id
        };

        const options = {};

        const measurementApi = Template.instance().data.measurementApi;

        const measurements = measurementApi.fetch(measurementTypeId, selector, options);
        const measurement = measurements[0];

        const Collection = measurementApi[measurementTypeId];
        Collection.remove(measurementData._id);
    }
};
