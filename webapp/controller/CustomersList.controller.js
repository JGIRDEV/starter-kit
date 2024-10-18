sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomersList", {
        onInit: function () {

        },
        onCustomerPress: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomerDetails",{
                 CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
            });

        },
        createPressView: function(oEvent){
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("CreateCustomer",{
            });
        },
        onPerformanceView: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Performance",{

            });
        }
    });

});