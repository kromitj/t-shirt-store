'use strict';

/**
 * Attributevalue.js controller
 *
 * @description: A set of functions called "actions" for managing `Attributevalue`.
 */

module.exports = {

  /**
   * Retrieve attributevalue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.attributevalue.search(ctx.query);
    } else {
      return strapi.services.attributevalue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a attributevalue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.attributevalue.fetch(ctx.params);
  },

  /**
   * Count attributevalue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attributevalue.count(ctx.query);
  },

  /**
   * Create a/an attributevalue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attributevalue.add(ctx.request.body);
  },

  /**
   * Update a/an attributevalue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attributevalue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an attributevalue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attributevalue.remove(ctx.params);
  }
};
