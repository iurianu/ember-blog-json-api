import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.query('post', { id: params.id });
  }
}
