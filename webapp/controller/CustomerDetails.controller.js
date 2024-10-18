sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment",
],
function (Controller, Formatter, Fragment) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerDetails", {
        formatter: Formatter,
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
        },
        _onPatternMatched: function (oEvent) {
            this.getView().bindElement({
                path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                parameters: {
                    expand: "Orders",
                    expand: "Orders/Employee"
                }
            });
        },
        onPress: function (){
            var oView = this.getView();
            if (!this.byId("contactDialog")){
                 Fragment.load({
                     id: oView.getId(),
                     name: "stk.starterkit.view.ContactInfoDialog"
                 }).then(function(oDialog){
                     oView.addDependent(oDialog);
                     oDialog.open();
                 });
            } else {
                this.byId("contactDialog").open();
            }
        }
        // endButton: new Button({
        //     text: "Close",
        //     press: function() {
        //         this.oDialog.close();
        //     }.bind(this)
        // })
    });
});
