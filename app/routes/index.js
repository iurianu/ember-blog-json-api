import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const posts = await this.store.findAll('post');
    const newPostsFirst = posts.sortBy('id:asc').reverse();

    const latestPosts = newPostsFirst.slice(0, 4);
    return latestPosts;
  }
}
