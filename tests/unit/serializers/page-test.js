import { module, test } from 'qunit';
import { setupTest } from 'blog-ember-json/tests/helpers';

module('Unit | Serializer | page', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('page');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('page', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
