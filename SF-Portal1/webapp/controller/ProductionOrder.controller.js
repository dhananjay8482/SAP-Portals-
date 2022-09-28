sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("SF-Portal1.controller.ProductionOrder", {

		onInit: function() {

			var ooModel = new JSONModel();
			// var noOfListItems;
			// var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_SF_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			var uri = "?$filter=ImMrpController eq '001' and ImProductionPlant eq '0001' &$format=json";
			window.console.log(uri);
			oModel.read("/zod_SF_PRODUCTIONORDER_DSSet" + uri, {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					window.console.log(oData);
					ooModel.setData(oData);
				}
			});
			this.getView().setModel(ooModel, "notificationList");

		}

		,

		filter: function(event) {
			var DP1 = this.getView().byId("DP1").getValue();
			var DP2 = this.getView().byId("DP2").getValue();
			var table = this.getView().byId("idOrdersTable");
			var tab = table.getBinding("items");
			var filters = [];
			var filterByPlant = new sap.ui.model.Filter("OrderStartDate", sap.ui.model.FilterOperator.BT, new Date(DP1), new Date(DP2));
			filters.push(filterByPlant);
			tab.filter(filters);

		},
		onNavBack: function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetViewFrom", true);
			}
		}

	});

});