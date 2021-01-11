'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    //check if the params id is an id or a slug
    const {id} = ctx.params;

    // if you use SQL database
    // we check if the id is a valid number
    if (parseInt(id) == id) {
      const entity = await strapi.services.store.findOne(ctx.params);
      return sanitizeEntity(entity, { model: strapi.models.article });
    }

    // findOne function works only with IDs
    // so we find all and get first entry by using slug
    const [entity] = await strapi.services.store.find({slug: id});
    return sanitizeEntity(entity, { model: strapi.models.store });
  }
};