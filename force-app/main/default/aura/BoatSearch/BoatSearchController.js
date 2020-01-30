({
    onFormSubmit : function(component, event, helper){
        console.log("event received by BoatSearchController.js");
        var formData = event.getParam("formData");
        var boatSearchResultsComponent = component.find("cmpBoatSearchResults");
        boatSearchResultsComponent.search(formData.boatTypeId);
        
    }
})