import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UsersRoute extends Route {
  @service store;

  async model() {
    const users = await this.store.findAll('user');
    const authors = users.sortBy('username');

    return authors;
  }
}
