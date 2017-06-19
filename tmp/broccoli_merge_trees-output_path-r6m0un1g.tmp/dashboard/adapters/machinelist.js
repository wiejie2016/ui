define("dashboard/adapters/machinelist", ["exports", "ember-data"], function (exports, _emberData) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = _emberData.default.RESTAdapter.extend({
      crossDomain: true,
      //   corsWithCredentials: true,
      host: "http://localhost:8181/api",
      //namespace: "",
      pathForType: function pathForType() {
         return "all";
      }
   });
});