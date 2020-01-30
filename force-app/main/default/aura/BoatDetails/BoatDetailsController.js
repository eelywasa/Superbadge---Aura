({
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id",boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    onRecordUpdated : function(component, event, helper) {
        var boatReviewsComponent = component.find("cmpBoatReviews");
        if(typeof boatReviewComponent !== 'undefined'){
            boatReviewsComponent.refresh();
        }

    },
    onBoatReviewAdded : function(component, event, helper) {
        component.find("tabs").set("v.selectedTabId", "boatreviewtab");
        var boatReviewsComponent = component.find("cmpBoatReviews");
        if(typeof boatReviewComponent !== 'undefined'){
            boatReviewsComponent.refresh();
        }
    }
})
