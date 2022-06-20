import { module, test } from 'qunit';
import { setupTest } from 'blog-ember-json/tests/helpers';

module('Unit | Controller | posts/page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:posts/page');
    assert.ok(controller);
  });
});
