'use strict';

/**
 * Productcategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Productcategory`.
 */

module.exports = {

  /**
   * Retrieve productcategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productcategory.search(ctx.query);
    } else {
      return strapi.services.productcategory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productcategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.productcategory.fetch(ctx.params);
  },

  /**
   * Count productcategory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productcategory.count(ctx.query);
  },

  /**
   * Create a/an productcategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productcategory.add(ctx.request.body);
  },

  /**
   * Update a/an productcategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productcategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productcategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productcategory.remove(ctx.params);
  }
};
