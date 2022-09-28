/*eslint-disable no-console, no-alert */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, History, JSONModel, Filter, FilterOperator) {
    "use strict";
	return Controller.extend("test.routing-sample.controller.ViewWorkOrder", {

		//Attarch event
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewResParameter").attachPatternMatched(this._onRouteMatched, this);
			var ooModel = new JSONModel();
			var noOfListItems;
			var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_MP_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			var uri = "?$filter=ImPlanPlant eq '0001' and ImPlanGrp eq '010'&$format=json";
			window.console.log(uri);
			oModel.read("/ZOD_MP_WO_DSSet" + uri, {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					window.console.log(oData);
					ooModel.setData(oData);
				}
			});
			this.getView().setModel(ooModel, "Workorderlist");

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
		onPress: function(oEvent) {
			// var oItem = oEvent.getSource();
			// var sPath = oItem.getBindingContext().getPath("Name");
			// var sPath1 = oItem.getBindingContext().getPath("Branch");
			// var oCurrentitem = oEvent.oSource.getSelectedItem().getBindingContext().getObject();
			this._oDialog = sap.ui.xmlfragment("test.routing-sample.view.popup1", this);
			this._oDialog.setModel(this.getView().getModel());
			// var oModel = new sap.ui.model.json.JSONModel(oCurrentitem);
			// var oTable = this.getView().byId("abc");
			// var modelData = oTable.gsetModel();
			// var data = modelData.getProperty(sPath);
			// var data1 = modelData.getProperty(sPath1);

			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
			var oModelData = this.getView().byId("idOrdersTable").getModel("Workorderlist");
			window.console.log(oModelData);
			var row = this.getView().byId("idOrdersTable")._aSelectedPaths[0].split("/")[2];
			window.console.log(row);
			var aRow = oModelData.getProperty("/");
			var item1 = aRow.results[row].Sortfield;
			var item2 = aRow.results[row].RefDate;
			var item3 = aRow.results[row].WorkCntr;
			var item4 = aRow.results[row].OrderType;
			var item5 = aRow.results[row].Orderid;
			sap.ui.getCore().byId("notiextra1").setText(item1);
			sap.ui.getCore().byId("notiextra2").setText(item2);
			sap.ui.getCore().byId("notiextra3").setText(item3);
			sap.ui.getCore().byId("notiextra4").setText(item4);
			sap.ui.getCore().byId("notiextra5").setText(item5);

		},
		_getDialog: function() {
			if (!this._oDialog) {
				this.oDialog = sap.ui.xmlfragment("test.routing-sample.view.popup1", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		//onPress: function(){
		// this._getDialog().open();
		//},
		closeDialog: function(oEvent) {
			// this._oDialog = sap.ui.xmlfragment("tabledetailstry.view.popup", this);
			// this._oDialog.setModel(this.getView().getModel());
			// jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.close();
			if (this._oDialog) {
				this._oDialog.destroy(true);
			}
			oEvent.getSource().destroy();

			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("TargetViewRes", {});

		},
		   formatStatus: function(sValue) {
            switch (sValue) {
                case "REL":
                    return sap.ui.core.ValueState.Warning;
                case "CRTD":
                    return sap.ui.core.ValueState.Success;
            }
        },
        statusIndicator: function(sStatus) {
            var sIcon;

            switch (sStatus) {
                case "NOPR ORAS":
                    sIcon = "REL";
                    break;
                case "CRTD":
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
                case "REL":
                    state = "Released";
                    break;
                case "CRTD":
                    state = "Created";
                    break;
                default:
                    state = "inactive";
            }
            return state;
        },
            onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Equipment", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            // update list binding
            var oList = this.byId("idOrdersTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");

        }

	});

});