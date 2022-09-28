/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("test.routing-sample.controller.ViewTo", {

		//Attarch event
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewToParameter").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {

			alert(oEvent.getParameter("arguments").parameter.split(';'));

		},
		// NAVIGATION TO BACK
		onNavBack: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewFrom", true);
		},
		// NAVIGATION TO DASHBOARD
		onRes: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewRes", {});
		},
		onResWithParameter: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewToRes", {
				parameter: "test"
			});
		},
		onPress: function() {
			var id = this.getView().byId("user");
			var pwd = this.getView().byId("pass");
			var x = "/sap/opu/odata/sap/ZDS_MP_SRV/";

			var mod = new sap.ui.model.odata.ODataModel(x, true);
			var url = "WfPasswrd='" + pwd.getValue() + "',Id='" + id.getValue() + "'";
			mod.read("/ZOD_MP_LOGIN_DSSet(" + url + ")", {
				success: function(oData, oResponse) {
					if (oData.Return === "ok") {
						var obj = sap.ui.core.UIComponent.getRouterFor(this);
						obj.navTo("TargetViewRes");
						MessageToast.show("Login Successfull...");
					} else {
						MessageBox.error("Please enter valid userid and password!");
					}
				}.bind(this)
			});

		}

	});

});