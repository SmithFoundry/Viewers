import { MeasurementsConfiguration } from 'meteor/ohif:measurements/both/configuration';

const config = MeasurementsConfiguration.getConfiguration();
const toolTypes = config.measurementTools.map(tool => {
    return tool.cornerstoneToolType;
});

handleMeasurementAdded = function(e, eventData) {
    const measurementData = eventData.measurementData;

    const index = toolTypes.indexOf(measurementData.toolType);
    if (index > -1) {
    	const measurementToolConfiguration = config.measurementTools[index];
    	const api = Template.instance().data.measurementApi;
    	const Collection = api[measurementToolConfiguration.id];

	    // Get the Cornerstone imageId
	    const enabledElement = cornerstone.getEnabledElement(eventData.element);
	    const imageId = enabledElement.image.imageId;

	    // Get studyInstanceUid & patientId
	    const study = cornerstoneTools.metaData.get('study', imageId);
	    const studyInstanceUid = study.studyInstanceUid;
	    const patientId = study.patientId;

	    // Get seriesInstanceUid
	    const series = cornerstoneTools.metaData.get('series', imageId);
	    const seriesInstanceUid = series.seriesInstanceUid;

	    // Get sopInstanceUid
	    const instance = cornerstoneTools.metaData.get('instance', imageId);
	    const sopInstanceUid = instance.sopInstanceUid;
	    const frameIndex = instance.frame || 0;

        log.info('CornerstoneToolsMeasurementAdded');
        
        let newMeasurement = $.extend({
        	userId: Meteor.userId(),
        	patientId: patientId,
			studyInstanceUid: studyInstanceUid,
			seriesInstanceUid: seriesInstanceUid,
        	sopInstanceUid: sopInstanceUid,
        	frameIndex: frameIndex
        }, measurementData);

        // Clean the measurement according to the Schema
        newMeasurement = measurementToolConfiguration.schema.clean(newMeasurement);

        // Insert the new measurement into the collection
        Collection.insert(newMeasurement);
    }
};
