import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsUserRoute extends Route {
  @service store;

  model(params) {
    return this.store.query('post', { userId: params.id });
  }
}
