import { module, test } from 'qunit';
import { setupTest } from 'blog-ember-json/tests/helpers';

module('Unit | Route | posts/user', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:posts/user');
    assert.ok(route);
  });
});
