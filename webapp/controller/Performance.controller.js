sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
],
function (Controller, Formatter) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.Performance", {
        formatter: Formatter,
        onInit: function () {
            this.getView().bindElement({
                path: "/Employees",
                parameters: {
                    expand: "Orders",
                    expand: "Orders/OrderID"
                }
            });
        },
        onMotivatePress: function(oEvent) {
            var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("https://evilinsult.com/generate_insult.php", {
                    lang: "en",
                    type: "json"
                }).then(function () {
                    var oEmployee = oEvent.getSource().getBindingContext().getObject();
                    var sBody = oModel.getData().insult;
                    var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<yourOrganisation>.com";
                    var sSubject = "Good Job!";
                    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                })
        },
        onFirePress: function(oEvent) {
            $.ajax({
                url: "https://evilinsult.com/generate_insult.php",
                data: {
                    lang: "en",
                    type: "json"
                },
                success: function (oResponse) {
                    //sapui5 JSON model option
                    var oEmployee = oEvent.getSource().getBindingContext().getObject();
                    var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<>.com";
                    var sSubject = "We are dissapointed!";

                    //response from evilinslut somehow is not json so it should be stringified before parsing
                    var sBody = JSON.parse(JSON.stringify(oResponse)).insult;

                    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                }
            })
        },
    })

});