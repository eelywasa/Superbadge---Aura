({
    onSearch : function(component, helper, boatTypeId) {
        
        var action = component.get("c.getBoats");
        	action.setParams({
          	"boatTypeId":boatTypeId
        	});
    		action.setCallback(this, function(response) {
               
                var state = response.getState();
                if (component.isValid() && state === "SUCCESS") {
                    component.set("v.boats", response.getReturnValue());
                }
                else {
                    console.log("Failed with state1: " + state);
                }
        	});
    		$A.enqueueAction(action);
    }
})