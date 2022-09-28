/*eslint-disable no-console, no-alert */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, History, JSONModel, Filter, FilterOperator) {
    "use strict";

	return Controller.extend("SF-Portal1.controller.Usage", {

		onInit: function() {
			// var smodel = sap.ui.getCore().getModel('baseinfo');
			// var mydata = smodel.getData();

			// this.getView().byId("coretest").setText(mydata.orderNum);

		
			var ooModel = new JSONModel();
			var noOfListItems;
			var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_QM_ODATA1_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			var uri =
				"?$filter(ImPlant eq '0001')&$format=json";
			window.console.log(uri);
			oModel.read("/ZOD_QM_USAGEDEC_DSSet" + uri, {
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
                case "R":
                    return sap.ui.core.ValueState.Warning;
                case "A":
                    return sap.ui.core.ValueState.Success;
            }
        },
        statusIndicator: function(sStatus) {
            var sIcon;

            switch (sStatus) {
                case "R":
                    sIcon = "in-process";
                    break;
                case "A":
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
                case "R":
                    state = "Rejected";
                    break;
                case "A":
                    state = "Accepted";
                    break;
                default:
                    state = "Status unknown";
            }
            return state;
        },
        emptyDec1: function(Emptchar) {
            var x;

            if (Emptchar.length < 1) {
                x = "------------";
            } else {
                x = Emptchar;
            }
            return x;
        },
            onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Insplot", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            // update list binding
            var oList = this.byId("idOrdersTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");

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
        }

	});

});