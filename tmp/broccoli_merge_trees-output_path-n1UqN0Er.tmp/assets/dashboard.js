"use strict";



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
define('dashboard/app', ['exports', 'ember', 'dashboard/resolver', 'ember-load-initializers', 'dashboard/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dashboard/components/item-list', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        actions: {
            showItem: function showItem(item) {
                alert(item);
            }
        }

    });
});
define('dashboard/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('dashboard/helpers/app-version', ['exports', 'ember', 'dashboard/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('dashboard/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('dashboard/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('dashboard/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dashboard/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('dashboard/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dashboard/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dashboard/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('dashboard/initializers/export-application-global', ['exports', 'ember', 'dashboard/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dashboard/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dashboard/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dashboard/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("dashboard/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('dashboard/models/machinelist', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        machineAgentPresent: _emberData.default.attr('string'),
        machineName: _emberData.default.attr('string'),
        machineId: _emberData.default.attr('string'),
        tierName: _emberData.default.attr('string')
    });
});
define('dashboard/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dashboard/router', ['exports', 'ember', 'dashboard/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('machinelist');
  });

  exports.default = Router;
});
define("dashboard/routes/machinelist", ["exports", "ember"], function (exports, _ember) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = _ember.default.Route.extend({
      model: function model() {
         return this.store.findAll("machinelist");
      }
   });
});
define('dashboard/serializers/machinelist', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTSerializer.extend({
        normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
            payload = {
                machinelist: payload
            };
            return this._super(store, primaryModelClass, payload, id, requestType);
        }
    });
});
define('dashboard/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dashboard/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uf5Ko4H6", "block": "{\"statements\":[[0,\"    \"],[11,\"nav\",[]],[15,\"class\",\"navbar navbar-inverse\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n          \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle collapsed\"],[15,\"data-toggle\",\"collapse\"],[15,\"data-target\",\"#navbar\"],[15,\"aria-expanded\",\"false\"],[15,\"aria-controls\",\"navbar\"],[13],[0,\"\\n            \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"Toggle navigation\"],[14],[0,\"\\n            \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n            \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n            \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"class\",\"navbar-brand\"],[15,\"href\",\"#\"],[13],[0,\"DEMO\"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"id\",\"navbar\"],[15,\"class\",\"collapse navbar-collapse\"],[13],[0,\"\\n          \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav\"],[13],[0,\"\\n            \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"machinelist\"],null,{\"statements\":[[0,\"ServerList\"]],\"locals\":[]},null],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[4,\"/.nav-collapse \"],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-md-12\"],[13],[0,\"\\n          \"],[1,[26,[\"outlet\"]],false],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\\n    \"],[14],[4,\" /.container \"],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dashboard/templates/application.hbs" } });
});
define("dashboard/templates/components/item-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y+wlRfZc", "block": "{\"statements\":[[11,\"h2\",[]],[13],[1,[26,[\"title\"]],false],[14],[0,\"\\n\\n\"],[11,\"ul\",[]],[13],[0,\"\\n    \\n\"],[6,[\"each\"],[[28,[\"items\"]]],null,{\"statements\":[[0,\"        \"],[11,\"li\",[]],[5,[\"action\"],[[28,[null]],\"showItem\",[28,[\"item\",\"machineName\"]]]],[13],[1,[28,[\"item\",\"machineName\"]],false],[0,\" \"],[1,[28,[\"item\",\"machineId\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dashboard/templates/components/item-list.hbs" } });
});
define("dashboard/templates/machinelist", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nWVS0Vkq", "block": "{\"statements\":[[1,[33,[\"item-list\"],null,[[\"title\",\"items\"],[\"List of Server\",[28,[\"model\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dashboard/templates/machinelist.hbs" } });
});


define('dashboard/config/environment', ['ember'], function(Ember) {
  var prefix = 'dashboard';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dashboard/app")["default"].create({"name":"dashboard","version":"0.0.0+2e9b4f08"});
}
//# sourceMappingURL=dashboard.map
