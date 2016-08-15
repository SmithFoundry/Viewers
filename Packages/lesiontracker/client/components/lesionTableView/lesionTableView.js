Template.lesionTableView.helpers({
    targets() {
        const withPriors = true;
        const instance = Template.instance();
        return instance.data.measurementApi.targets(withPriors);
    },

    nonTargets() {
        const withPriors = true;
        const instance = Template.instance();
        return instance.data.measurementApi.nonTargets(withPriors);
    },

    newLesions() {
        const instance = Template.instance();
        return instance.data.measurementApi.newLesions();
    },

    isFollowup() {
        const instance = Template.instance();
        const current = instance.data.timepointApi.current();
        return (current && current.timepointType === 'followup');
    }
});
