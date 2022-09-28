/*eslint-disable no-console, no-alert */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, History, JSONModel, Filter, FilterOperator) {
    "use strict";
	return Controller.extend("SF-Portal1.controller.ResultRecording", {

		onInit: function() {
			// var smodel = sap.ui.getCore().getModel('baseinfo');
			// var mydata = smodel.getData();

			// this.getView().byId("coretest").setText(mydata.orderNum);

		

			var ooModel = new JSONModel();
			var noOfListItems;
			var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_QM_ODATA1_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			// var uri =
			// "?$filter(ImPlant eq '0001')&$format=json";
			// window.console.log(uri);
			oModel.read("/ZOD_QM_RESULTREC_DSSet", {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					window.console.log(oData);
					ooModel.setData(oData);

				}
			});
			this.getView().setModel(ooModel, "notificationList");

		},
		  formatStatus: function(sValue) {
            switch (sValue) {
                case "NOPR ORAS":
                    return sap.ui.core.ValueState.Warning;
                case "Inspected":
                    return sap.ui.core.ValueState.Success;
            }
        },
        statusIndicator: function(sStatus) {
            var sIcon;

            switch (sStatus) {
                case "NOPR ORAS":
                    sIcon = "in-process";
                    break;
                case "Inspected":
                    sIcon = "completed";
                    break;
                default:
                    sIcon = "inactive";
            }
            return "sap-icon://status-" + sIcon;
        },
        charchange: function(charc) {
            var state;

            switch (charc) {
                case "NOPR ORAS":
                    state = "in-process";
                    break;
                case "Inspected":
                    state = "Inspected";
                    break;
                default:
                    state = "Not Inspected";
            }
            return state;
        },
            onNavBack: function(oEvent) {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetViewRes", true);
            }
        },
            onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Prueflos", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            // update list binding
            var oList = this.byId("idOrdersTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");

        }
	});

});