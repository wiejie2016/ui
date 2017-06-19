define('dashboard/tests/unit/serializers/machinelist-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('machinelist', 'Unit | Serializer | machinelist', {
    // Specify the other units that are required for this test.
    needs: ['serializer:machinelist']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});