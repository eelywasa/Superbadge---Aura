({
    onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");

        //Component event for highlighting the tile
        var boatSelectEvent = component.getEvent("onBoatSelect");
        boatSelectEvent.setParams({"boatId" : boat.Id});
        boatSelectEvent.fire();

        //Application event, to drive detail display
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({"boat" : boat});
        boatSelectedEvent.fire();

        //Map marker event
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams(
            {
                "lat": boat.Geolocation__Latitude__s,
                "sObjectId": boat.Id,
                "long": boat.Geolocation__Longitude__s,
                "label":boat.Name 
            }
        );
        plotMapMarkerEvent.fire();

    }
})