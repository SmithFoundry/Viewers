Package.describe({
    name: 'ohif:measurements',
    summary: 'OHIF Measurement Tools',
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

    api.addFiles('log.js', [ 'client', 'server' ]);

    api.addFiles('client/components/measurementTableView/measurementTableView.html', 'client');
    api.addFiles('client/components/measurementTableView/measurementTableView.styl', 'client');
    api.addFiles('client/components/measurementTableView/measurementTableView.js', 'client');

    api.addFiles('client/components/measurementTable/measurementTable.html', 'client');
    api.addFiles('client/components/measurementTable/measurementTable.styl', 'client');
    api.addFiles('client/components/measurementTable/measurementTable.js', 'client');

    api.addFiles('client/components/measurementTableHUD/measurementTableHUD.html', 'client');
    api.addFiles('client/components/measurementTableHUD/measurementTableHUD.styl', 'client');
    api.addFiles('client/components/measurementTableHUD/measurementTableHUD.js', 'client');

    api.addFiles('client/components/measurementTableRow/measurementTableRow.html', 'client');
    api.addFiles('client/components/measurementTableRow/measurementTableRow.styl', 'client');
    api.addFiles('client/components/measurementTableRow/measurementTableRow.js', 'client');

    api.addFiles('client/components/measurementTableHeaderRow/measurementTableHeaderRow.html', 'client');
    api.addFiles('client/components/measurementTableHeaderRow/measurementTableHeaderRow.styl', 'client');
    api.addFiles('client/components/measurementTableHeaderRow/measurementTableHeaderRow.js', 'client');

    api.addFiles('client/components/measurementTableTimepointCell/measurementTableTimepointCell.html', 'client');
    api.addFiles('client/components/measurementTableTimepointCell/measurementTableTimepointCell.styl', 'client');
    api.addFiles('client/components/measurementTableTimepointCell/measurementTableTimepointCell.js', 'client');

    api.addFiles('client/components/measurementTableTimepointHeader/measurementTableTimepointHeader.html', 'client');
    api.addFiles('client/components/measurementTableTimepointHeader/measurementTableTimepointHeader.styl', 'client');
    api.addFiles('client/components/measurementTableTimepointHeader/measurementTableTimepointHeader.js', 'client');
});
