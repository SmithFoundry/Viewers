Template.measurementTableView.helpers({
    isFollowup() {
        const instance = Template.instance();
        const current = instance.data.timepointApi.current();
        return (current && current.timepointType === 'followup');
    }
});
