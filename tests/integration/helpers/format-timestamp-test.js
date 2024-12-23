import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('myDate', '04-05-1991');

    await render(hbs`{{format-timestamp this.myDate}}`);

    assert.equal(this.element.textContent.trim(), 'Apr 5, 1991 00:00.00 AM');
  });
});
