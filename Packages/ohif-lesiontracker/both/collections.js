import { Mongo } from 'meteor/mongo';
import { schema as TimepointSchema } from 'meteor/ohif:lesiontracker/both/schema/timepoints';
import { schema as StudySchema } from 'meteor/ohif:lesiontracker/both/schema/studies';
import { schema as MeasurementSchema } from 'meteor/ohif:lesiontracker/both/schema/measurements';
import { schema as ImageMeasurementSchema } from 'meteor/ohif:lesiontracker/both/schema/imageMeasurements';
import { schema as AdditionalFindingsSchema } from 'meteor/ohif:lesiontracker/both/schema/additionalFindings';
import { schema as ReviewerSchema } from 'meteor/ohif:lesiontracker/both/schema/reviewers';
import { Servers as ServerSchema } from 'meteor/ohif:lesiontracker/both/schema/servers';

Timepoints = new Mongo.Collection('timepoints');
Timepoints.attachSchema(TimepointSchema);

Studies = new Mongo.Collection('studies');
Studies.attachSchema(StudySchema);

Measurements = new Mongo.Collection('measurements');
Measurements.attachSchema(MeasurementSchema);

// ImageMeasurements describe temporary measurements that aren't
// specifically listed in the Lesion Table
ImageMeasurements = new Mongo.Collection('imageMeasurements');
ImageMeasurements.attachSchema(ImageMeasurementSchema);

// Additional Findings stores details from the Additional Findings
// panel, and represents items such as data quality,
AdditionalFindings = new Mongo.Collection('additionalFindings');
AdditionalFindings.attachSchema(AdditionalFindingsSchema);

// Reviewers is used to determine which users already have a
// Timepoint open
Reviewers = new Mongo.Collection('reviewers');
Reviewers.attachSchema(ReviewerSchema);

// Servers describe the DICOM servers configurations
Servers = new Mongo.Collection('servers');
// TODO: Make the Schema match what we are currently sticking into the Collection
//Servers.attachSchema(ServerSchema);