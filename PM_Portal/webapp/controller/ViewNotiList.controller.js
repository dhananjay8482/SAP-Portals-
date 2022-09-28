/*eslint-disable no-console, no-alert */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, History, JSONModel, Filter, FilterOperator) {
    "use strict";

	return Controller.extend("test.routing-sample.controller.ViewNotiList", {

		//Attarch event
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewResParameter").attachPatternMatched(this._onRouteMatched, this);
			var ooModel = new JSONModel();
			var noOfListItems;
			var that = this;
			var surl = "/sap/opu/odata/sap/ZDS_MP_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(surl, true);
			var uri =
				"?$filter=ImPlanningPlant eq '0001' and ImPlannerGroup eq '010' and ImNotificationDate eq datetime'2022-02-02T00:00:00'&$format=json";
			window.console.log(uri);
			oModel.read("/zod_MP_NOTIFICATION_DSSet" + uri, {
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
			
			// Opening fragme
			this._oDialog = sap.ui.xmlfragment("test.routing-sample.view.popup", this);
			//Selecting pertular data
			this._oDialog.setModel(this.getView().getModel());

			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
			var oModelData = this.getView().byId("idOrdersTable").getModel("notificationList");
			window.console.log(oModelData);
			var row = this.getView().byId("idOrdersTable")._aSelectedPaths[0].split("/")[2];
			window.console.log(row);
			var aRow = oModelData.getProperty("/");
			var item1 = aRow.results[row].Equidescr;
			var item2 = aRow.results[row].ImNotificationDate;
			var item3 = aRow.results[row].SStatus;
			var item4 = aRow.results[row].Priority;
			var item5 = aRow.results[row].NotifType;
			sap.ui.getCore().byId("notiextra1").setText(item1);
			sap.ui.getCore().byId("notiextra2").setText(item2);
			sap.ui.getCore().byId("notiextra3").setText(item3);
			sap.ui.getCore().byId("notiextra4").setText(item4);
			sap.ui.getCore().byId("notiextra5").setText(item5);

		},

		// Extra Dummy
		_getDialog: function() {
			if (!this._oDialog) {
				this.oDialog = sap.ui.xmlfragment("test.routing-sample.view.popup", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		

		//Close Popup.
		closeDialog: function(oEvent) {
			
			this._oDialog.close();
			if (this._oDialog) {
				this._oDialog.destroy(true);
			}
			oEvent.getSource().destroy();

		},
		 formatStatus: function(sValue) {
            switch (sValue) {
                case "NOPR ORAS":
                    return sap.ui.core.ValueState.Warning;
                case "OSNO":
                    return sap.ui.core.ValueState.Success;
            }
        },
        statusIndicator: function(sStatus) {
            var sIcon;

            switch (sStatus) {
                case "NOPR ORAS":
                    sIcon = "in-process";
                    break;
                case "OSNO":
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
                    state = "Notification in-process";
                    break;
                case "OSNO":
                    state = "Notification Created";
                    break;
                default:
                    state = "inactive";
            }
            return state;
        },
        emptyDec: function(Emptchar) {
            var x;

            if (Emptchar.length < 1) {
                x = "Description not Available";
            } else {
                x = Emptchar;
            }
            return x;
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
        emptyDec3: function(Emptchar) {
            var x;

            if (Emptchar.length < 1) {
                x = "------------";
            } else {
                x = Emptchar;
            }
            return x;
        },
        formatStatus1: function(sValue) {
            if (sValue === "Description not Available") {
                return sap.ui.core.ValueState.Warning;
            } else {
                return sap.ui.core.ValueState.Success;

            }

        },
        onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Notificat", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            // update list binding
            var oList = this.byId("idOrdersTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");

        }

	});
	
});