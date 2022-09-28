sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, History, JSONModel, Filter, FilterOperator) {
    "use strict";

	return Controller.extend("EHSM-Portal.controller.Risk", {
		onInit: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewResParameter").attachPatternMatched(this._onRouteMatched, this);
			var ooModel = new JSONModel();
			var noOfListItems;
			var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_EHSM1_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			var uri = "?$filter=Mandt eq '100' &$format=json";
			window.console.log(uri);
			oModel.read("/Zod_EHSM_RISK_DSSet" + uri, {
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
		onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Riskassetnum", FilterOperator.Contains, sQuery);
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
				oRouter.navTo("TargetViewFrom", true);
			}
		}

	});

});