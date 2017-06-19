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