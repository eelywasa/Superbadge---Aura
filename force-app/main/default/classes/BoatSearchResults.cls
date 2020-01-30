public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> getboattypes() {
        return [SELECT Name, Id FROM BoatType__c];
    }
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        
        List<Boat__c> searchResults = new List<Boat__c>();

        if(boatTypeId==''){
            searchResults = [SELECT Id, Name, Contact__r.Name, Picture__c FROM Boat__c];
        }
        else {
            searchResults = [SELECT Id, Name, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c = :boatTypeId];
        }
        
        return searchResults;
    }
}