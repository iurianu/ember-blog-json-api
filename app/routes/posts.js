import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  @service store;
  @service router;

  async model() {
    const posts = await this.store.findAll('post');
    const newPostsFirst = posts.sortBy('id:asc').reverse();

    return newPostsFirst;
  }
}
