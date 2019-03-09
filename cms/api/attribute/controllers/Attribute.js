'use strict';

/**
 * Attribute.js controller
 *
 * @description: A set of functions called "actions" for managing `Attribute`.
 */

module.exports = {

  /**
   * Retrieve attribute records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.attribute.search(ctx.query);
    } else {
      return strapi.services.attribute.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a attribute record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.attribute.fetch(ctx.params);
  },

  /**
   * Count attribute records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attribute.count(ctx.query);
  },

  /**
   * Create a/an attribute record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attribute.add(ctx.request.body);
  },

  /**
   * Update a/an attribute record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attribute.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an attribute record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attribute.remove(ctx.params);
  }
};
