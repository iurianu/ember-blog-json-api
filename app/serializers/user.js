import ApplicationSerializer from './application';
import { dasherize } from '@ember/string';

export default class UserSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { users: payload };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.users.forEach((user) => {
      user.slug = dasherize(user.name);
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
