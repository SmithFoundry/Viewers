Package.describe({
    name: 'ohif:lesiontracker',
    summary: 'OHIF Lesion Tracker Tools',
    version: '0.0.1'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4');

    api.use('ecmascript');
    api.use('standard-app-packages');
    api.use('jquery');
    api.use('stylus');
    api.use('random');

    api.use('validatejs');

    // Schema for Data Models
    api.use('aldeed:simple-schema');
    api.use('aldeed:collection2');

    // Control over logging
    api.use('practicalmeteor:loglevel');

    // Template overriding
    api.use('aldeed:template-extension@4.0.0');

    // Our custom packages
    api.use('design');
    api.use('ohif:core');
    api.use('ohif:study-list');
    api.use('ohif:cornerstone');
    api.use('ohif:measurements');

    api.addFiles('log.js', [ 'client', 'server' ]);

    api.addFiles('both/configuration/bidirectional.js', [ 'client', 'server' ]);
    api.addFiles('both/configuration/nonTarget.js', [ 'client', 'server' ]);
    api.addFiles('both/configuration/ellipse.js', [ 'client', 'server' ]);
    api.addFiles('both/configuration/length.js', [ 'client', 'server' ]);

    api.addFiles('both/configuration/dataExchange.js', [ 'client', 'server' ]);
    api.addFiles('both/configuration/dataValidation.js', [ 'client', 'server' ]);
    api.addFiles('both/configuration/configuration.js', [ 'client', 'server' ]);

    // Schema
    api.addFiles('both/schema/timepoints.js', [ 'client', 'server' ]);
    api.addFiles('both/schema/studies.js', [ 'client', 'server' ]);
    api.addFiles('both/schema/measurements.js', [ 'client', 'server' ]);
    api.addFiles('both/schema/imageMeasurements.js', [ 'client', 'server' ]);
    api.addFiles('both/schema/additionalFindings.js', [ 'client', 'server' ]);

    // Client-side collections
    api.addFiles('client/collections/LesionLocations.js', 'client');
    api.addFiles('client/collections/LocationResponses.js', 'client');
    api.addFiles('client/collections/subscriptions.js', 'client');

    // Additional Custom Cornerstone Tools for Lesion Tracker
    api.addFiles([
        'client/compatibility/bidirectionalTool.js',
        'client/compatibility/nonTargetTool.js',
        'client/compatibility/scaleOverlayTool.js',
        'client/compatibility/deleteLesionKeyboardTool.js',
        'client/compatibility/crunexTool.js',
        'client/compatibility/crTool.js',
        'client/compatibility/unTool.js',
        'client/compatibility/exTool.js'
    ], 'client', {
        bare: true
    });

    api.addFiles('client/tools.js', 'client');

    // UI Components
    api.addFiles('client/components/viewer/viewer.html', 'client');
    api.addFiles('client/components/viewer/viewer.styl', 'client');
    api.addFiles('client/components/viewer/viewer.js', 'client');

    api.addFiles('client/components/flexboxLayout/flexboxLayout.html', 'client');
    api.addFiles('client/components/flexboxLayout/flexboxLayout.styl', 'client');
    api.addFiles('client/components/flexboxLayout/flexboxLayout.js', 'client');

    api.addFiles('client/components/toolbarSection/toolbarSection.html', 'client');
    api.addFiles('client/components/toolbarSection/toolbarSection.styl', 'client');
    api.addFiles('client/components/toolbarSection/toolbarSection.js', 'client');

    api.addFiles('client/components/caseProgress/caseProgress.html', 'client');
    api.addFiles('client/components/caseProgress/caseProgress.styl', 'client');
    api.addFiles('client/components/caseProgress/caseProgress.js', 'client');

    api.addFiles('client/components/caseProgress/radialProgressBar/radialProgressBar.html', 'client');
    api.addFiles('client/components/caseProgress/radialProgressBar/radialProgressBar.styl', 'client');
    api.addFiles('client/components/caseProgress/radialProgressBar/radialProgressBar.js', 'client');

    api.addFiles('client/components/lesionTracker/lesionTracker.html', 'client');
    api.addFiles('client/components/lesionTracker/lesionTracker.styl', 'client');
    api.addFiles('client/components/lesionTracker/lesionTracker.js', 'client');

    api.addFiles('client/components/additionalFindings/additionalFindings.html', 'client');
    api.addFiles('client/components/additionalFindings/additionalFindings.styl', 'client');
    api.addFiles('client/components/additionalFindings/additionalFindings.js', 'client');

    api.addFiles('client/components/associationModal/associationModal.html', 'client');
    api.addFiles('client/components/associationModal/associationModal.styl', 'client');
    api.addFiles('client/components/associationModal/associationModal.js', 'client');

    api.addFiles('client/components/associationModal/studyAssociationTable/studyAssociationTable.html', 'client');
    api.addFiles('client/components/associationModal/studyAssociationTable/studyAssociationTable.styl', 'client');
    api.addFiles('client/components/associationModal/studyAssociationTable/studyAssociationTable.js', 'client');

    api.addFiles('client/components/optionsModal/optionsModal.html', 'client');
    api.addFiles('client/components/optionsModal/optionsModal.styl', 'client');
    api.addFiles('client/components/optionsModal/optionsModal.js', 'client');

    api.addFiles('client/components/optionsModal/recistDescription/recistDescription.html', 'client');
    api.addFiles('client/components/optionsModal/irRCDescription/irRCDescription.html', 'client');

    api.addFiles('client/components/lesionLocationDialog/lesionLocationDialog.html', 'client');
    api.addFiles('client/components/lesionLocationDialog/lesionLocationDialog.js', 'client');
    api.addFiles('client/components/lesionLocationDialog/lesionLocationDialog.styl', 'client');
    
    api.addFiles('client/components/nonTargetLesionDialog/nonTargetLesionDialog.html', 'client');
    api.addFiles('client/components/nonTargetLesionDialog/nonTargetLesionDialog.styl', 'client');
    api.addFiles('client/components/nonTargetLesionDialog/nonTargetLesionDialog.js', 'client');

    api.addFiles('client/components/conformanceCheckFeedback/conformanceCheckFeedback.html', 'client');
    api.addFiles('client/components/conformanceCheckFeedback/conformanceCheckFeedback.styl', 'client');
    api.addFiles('client/components/conformanceCheckFeedback/conformanceCheckFeedback.js', 'client');

    api.addFiles('client/components/nonTargetResponseDialog/nonTargetResponseDialog.html', 'client');
    api.addFiles('client/components/nonTargetResponseDialog/nonTargetResponseDialog.styl', 'client');
    api.addFiles('client/components/nonTargetResponseDialog/nonTargetResponseDialog.js', 'client');

    api.addFiles('client/components/lesionTrackerStudyListStudy/lesionTrackerStudyListStudy.html', 'client');
    api.addFiles('client/components/lesionTrackerStudyListStudy/lesionTrackerStudyListStudy.styl', 'client');
    api.addFiles('client/components/lesionTrackerStudyListStudy/lesionTrackerStudyListStudy.js', 'client');

    api.addFiles('client/components/measureFlow/measureFlow.html', 'client');
    api.addFiles('client/components/measureFlow/measureFlow.styl', 'client');
    api.addFiles('client/components/measureFlow/measureFlow.js', 'client');

    api.addFiles('client/components/lesionTrackerStudyListContextMenu/lesionTrackerStudyListContextMenu.html', 'client');
    api.addFiles('client/components/lesionTrackerStudyListContextMenu/lesionTrackerStudyListContextMenu.js', 'client');

    api.addFiles('client/components/lesionTrackerViewportOverlay/lesionTrackerViewportOverlay.html', 'client');
    api.addFiles('client/components/lesionTrackerViewportOverlay/lesionTrackerViewportOverlay.js', 'client');

    api.addFiles('client/components/confirmRemoveTimepointAssociation/confirmRemoveTimepointAssociation.html', 'client');
    api.addFiles('client/components/confirmRemoveTimepointAssociation/confirmRemoveTimepointAssociation.js', 'client');

    api.addFiles('client/components/confirmDeleteDialog/confirmDeleteDialog.html', 'client');
    api.addFiles('client/components/confirmDeleteDialog/confirmDeleteDialog.styl', 'client');
    api.addFiles('client/components/confirmDeleteDialog/confirmDeleteDialog.js', 'client');

    // Server functions
    api.addFiles('server/publications.js', 'server');
    api.addFiles('server/servers.js', 'server');
    api.addFiles('server/methods.js', [ 'server' ]);
    api.addFiles('server/reviewers.js', [ 'server' ]);

    // Both client and server functions
    api.addFiles('both/collections.js', [ 'client', 'server' ]);

    // StudyList-related functions
    api.addFiles('lib/studylist/openNewTabWithTimepoint.js', 'client');
    api.addFiles('lib/studylist/studylistModification.js', 'client');

    // Library functions
    api.addFiles('lib/TrialCriteriaConstraints.js', 'client');
    api.addFiles('lib/TrialResponseCriteria.js', 'client');
    api.addFiles('lib/LesionManager.js', 'client');
    api.addFiles('lib/pixelSpacingAutorunCheck.js', 'client');
    api.addFiles('lib/toggleLesionTrackerTools.js', 'client');
    api.addFiles('lib/clearMeasurementTimepointData.js', 'client');
    api.addFiles('lib/removeToolDataWithMeasurementId.js', 'client');
    api.addFiles('lib/getTimepointObject.js', 'client');
    api.addFiles('lib/getTimepointName.js', 'client');
    api.addFiles('lib/activateMeasurements.js', 'client');
    api.addFiles('lib/activateLesion.js', 'client');
    api.addFiles('lib/deactivateAllToolData.js', 'client');
    api.addFiles('lib/clearTools.js', 'client');
    api.addFiles('lib/calculateTotalLesionBurden.js', 'client');
    api.addFiles('lib/convertToNonTarget.js', 'client');
    api.addFiles('lib/convertNonTarget.js', 'client');
    api.addFiles('lib/timepointAutoCheck.js', 'client');

    api.addFiles('lib/syncMeasurementAndToolData.js', 'client');
    api.addFiles('lib/syncImageMeasurementAndToolData.js', 'client');
    api.addFiles('lib/updateRelatedElements.js', 'client');

    api.addFiles('lib/handleMeasurementAdded.js', 'client');
    api.addFiles('lib/handleMeasurementModified.js', 'client');
    api.addFiles('lib/handleMeasurementRemoved.js', 'client');

    // API classes
    api.addFiles('client/api/timepoint.js');

    // Export global functions
    api.export('pixelSpacingAutorunCheck', 'client');
    api.export('handleMeasurementAdded', 'client');
    api.export('handleMeasurementModified', 'client');
    api.export('handleMeasurementRemoved', 'client');
    api.export('syncMeasurementAndToolData', 'client');
    api.export('syncImageMeasurementAndToolData', 'client');
    api.export('updateRelatedElements', 'client');
    api.export('openNewTabWithTimepoint', 'client');
    api.export('activateLesion', 'client');
    api.export('activateMeasurements', 'client');
    api.export('deactivateAllToolData', 'client');
    api.export('toggleLesionTrackerTools', 'client');
    api.export('clearMeasurementTimepointData', 'client');
    api.export('removeToolDataWithMeasurementId', 'client');
    api.export('getTimepointObject', 'client');
    api.export('clearTools', 'client');
    api.export('getTimepointName', 'client');
    api.export('getTrialCriteriaConstraints', 'client');
    api.export('calculateTotalLesionBurden', 'client');
    api.export('convertToNonTarget', 'client');
    api.export('convertNonTarget', 'client');
    api.export('timepointAutoCheck', 'client');

    // Export global objects
    api.export('TrialResponseCriteria', 'client');
    api.export('TrialCriteriaConstraints', 'client');
    api.export('LesionManager', 'client');

    // Export client-side collections
    api.export('ValidationErrors', 'client');
    api.export('LesionLocations', 'client');
    api.export('LocationResponses', 'client');
    api.export('TrialCriteriaTypes', 'client');

    // Export collections spanning both client and server
    api.export('Servers', [ 'client', 'server' ]);
    api.export('AdditionalFindings', [ 'client', 'server' ]);
    api.export('ImageMeasurements', [ 'client', 'server' ]);
    api.export('Measurements', [ 'client', 'server' ]);
    api.export('Studies', [ 'client', 'server' ]);
    api.export('Timepoints', [ 'client', 'server' ]);
    api.export('Reviewers', [ 'client', 'server' ]);

    // Export utility classes
    api.export('FormUtils', 'client');

    api.export('Configuration', ['client', 'server']);
});
