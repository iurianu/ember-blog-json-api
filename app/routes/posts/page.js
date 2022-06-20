import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class PostsPageRoute extends Route {
  @service store;
  @service router;

  queryParams = {
    page: {
      refreshModel: true,
    },
    size: {
      refreshModel: true,
    },
  };

  async model(params) {
    const posts = await this.store.query('post', {
      page: {
        number: params.page,
        size: params.size,
      },
    });

    const arrLength = posts.length,
      pageModulus = arrLength % params.size;

    /**************************************************************************************************************** 
                                            - = EXPLANATIONS = -

newPostsFirst    - sorts the array by ID, and then reverses it, as the biggest ID would belong to the newest post
firstIndex       - calculates the start element for slicing the 'posts' array
lastIndex        - calculates the end element for slicing the 'posts' array
lastPage         - calculates the number for last of the index pages

The `page` and `size` variables are set up in the `posts/page` controller

*****************************************************************************************************************/
    const newPostsFirst = posts.sortBy('id:asc').reverse(),
      firstIndex = params.size * (params.id - 1),
      lastIndex = params.size * params.id,
      lastPosts = Math.floor(arrLength / params.size) + pageModulus / pageModulus;

    const pagesPosts = newPostsFirst.slice(firstIndex, lastIndex),
      currentPage = Math.ceil(lastIndex / params.size),
      firstPage = 1,
      nextPage = currentPage + 1,
      prevPage = currentPage - 1

    console.log('The shown page is', pagesPosts)
    console.log('Total number of posts is: ', arrLength)
    console.log('Total number of pages is: ', lastPosts)
    console.log('Start index is', firstIndex)
    console.log('Ending index is', lastIndex)        
    console.log('Current page number is', currentPage)
    console.log('The previous page is', prevPage)
    console.log('The next page is', nextPage)

    if (params.id > 0 && params.id <= lastPosts) {  
      return RSVP.hash({
        pagesPosts,
        currentPage,
        firstPage,
        lastPosts,
        prevPage,
        nextPage
      })   
    } 
    else {
      this.router.transitionTo('not-found', 404);
    }
  }

  setupController(controller, model){

    controller.setProperties(model)
    console.log('controlled model', model)

  }

}
