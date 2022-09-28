/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("SF-Portal1.controller.ViewRes", {

		//Attarch event
		onInit: function() {
		
		},

		_onRouteMatched: function(oEvent) {

			alert(oEvent.getParameter("arguments").parameter.split(';'));

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
		},
		planOrd: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetInspection", {});
		},
		prodOrd:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetUsage", {});
		},
		prodOrd1:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetResultRecording", {});
		}
	});

});