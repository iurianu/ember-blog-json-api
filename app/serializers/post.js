import ApplicationSerializer from './application';
import { dasherize } from '@ember/string';

export default class PostSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload.posts.user = payload.posts.userId;
    delete payload.posts.userId;

    return super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.posts.forEach((post) => {
      post.user = post.userId;
      delete post.userId;
      post.slug = dasherize(post.title);
    });

    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
