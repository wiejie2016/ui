define('dashboard/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/machinelist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/machinelist.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/item-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-list.js should pass ESLint\n\n');
  });

  QUnit.test('models/machinelist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/machinelist.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/machinelist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/machinelist.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/machinelist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/machinelist.js should pass ESLint\n\n');
  });
});