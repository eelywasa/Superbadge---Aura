({
    doInit: function (component, event, helper) {

        var canCreateRecord = $A.get("e.force:createRecord");
        if (canCreateRecord){
            component.set("v.showNewButton", true);
        }
        else {
            component.set("v.showNewButton", false);
        }

        var action = component.get("c.getboattypes");

        // Add callback behavior for when response is received
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                //debugger
                console.log("responce : " + response.getReturnValue());
                component.set("v.boatTypes", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
    },
    createBoat: function(component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if (createRecordEvent){
                    var boatType = component.find('boatTypes').get('v.value');
                    if(boatType==""){
                        boatType=null;
                    }
                    createRecordEvent.setParams({
                        'entityApiName': 'Boat__c',
                        'defaultFieldValues': {
                            'BoatType__c': boatType
                        }
                    });
                    createRecordEvent.fire();
            }
    },
    onFormSubmit : function(component, event, helper){
        var boatTypeId = component.find('boatTypes').get('v.value');
        console.log("Search button pressed " + boatTypeId);
        var formSubmit = component.getEvent("formSubmit");
        formSubmit.setParams({"formData":
                            {"boatTypeId" : boatTypeId}
        });        
        formSubmit.fire();
    }
})