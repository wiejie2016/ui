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