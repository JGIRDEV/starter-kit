sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.ContactInfoDialog1", {
        onInit: function () {

        },
        closePress: function(){
            var oView = this.getView();
            if (!this.byId("contactDialog")){
                 Fragment.load({
                     id: oView.getId(),
                     name: "stk.starterkit.view.ContactInfoDialog"
                 }).then(function(oDialog){
                     oView.addDependent(oDialog);
                     oDialog.close();
                 });
            } else {
                this.byId("contactDialog").close();
            }
        },
    });
});