import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsIndexRoute extends Route {

    @service router;  
 
    beforeModel() {
      this.router.transitionTo('posts.page', '1'); // Implicitly aborts the on-going transition.
    }
}
