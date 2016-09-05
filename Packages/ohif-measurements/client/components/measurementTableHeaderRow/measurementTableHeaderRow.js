Template.measurementTableHeaderRow.onCreated(() => {
    const instance = Template.instance();
    instance.maxNumMeasurements = new ReactiveVar();

    // Get the current timepoint
    const current = instance.data.timepointApi.current();

    // Stop here if no timepoint was found
    if (!current) {
        return;
    }

    const timepointType = current.timepointType;

    if (!instance.data.currentTimepointId) {
        console.warn('Case has no timepointId');
        return;
    }

    // TODO: Check if we have criteria where maximum limits are applied to
    // Non-Targets and/or New Lesions
    if (timepointType === 'baseline' && instance.data.id === 'target') {
        instance.autorun(() => {
            // Identify which Trial Conformance Criteria are currently being used
            // Note that there may be more than one.
            const criteriaTypes = TrialCriteriaTypes.find({
                selected: true
            }).map(function(criteria) {
                return criteria.id;
            });

            const currentConstraints = getTrialCriteriaConstraints(criteriaTypes);
            if (!currentConstraints) {
                return;
            }

            // TODO: Fix Trial Conformance Criteria, it appears that totalNumberOfLesions
            // is applied to both Targets and Non-Targets, when it should typically only be
            // for Targets
            const criteria = currentConstraints[timepointType];
            const maxNumMeasurements = criteria.group.totalNumberOfLesions.numericality.lessThanOrEqualTo;
            instance.maxNumMeasurements.set(maxNumMeasurements);
        });
    }
});

Template.measurementTableHeaderRow.helpers({
    numberOfMeasurements() {
        return Template.instance().data.measurements.count();
    },

    maxNumMeasurements() {
        return Template.instance().maxNumMeasurements.get();
    },

    anyUnmarkedLesionsLeft() {
        const instance = Template.instance();
        const measurementType = instance.data.measurementType;
        const measurementApi = instance.data.measurementApi;

        // TODO: Add selector to check if there are unmarked lesions
        //return measurementApi.fetch(measurementType.id).length;
        return;
    }
});

Template.measurementTableHeaderRow.events({
    'click .js-setTool'(event, instance) {
        const measurementType = instance.data.measurementType;
        toolManager.setActiveTool(measurementType.cornerstoneToolType);
    }
});
