'use strict';

/**
 * Productattribute.js controller
 *
 * @description: A set of functions called "actions" for managing `Productattribute`.
 */

module.exports = {

  /**
   * Retrieve productattribute records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productattribute.search(ctx.query);
    } else {
      return strapi.services.productattribute.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productattribute record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.productattribute.fetch(ctx.params);
  },

  /**
   * Count productattribute records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productattribute.count(ctx.query);
  },

  /**
   * Create a/an productattribute record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productattribute.add(ctx.request.body);
  },

  /**
   * Update a/an productattribute record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productattribute.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productattribute record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productattribute.remove(ctx.params);
  }
};
