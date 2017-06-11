/**
 * Todo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('node-uuid');

module.exports = {
  schema: true,
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      required: true,
      unique: true,
      uuidv4: true,
      defaultsTo: () => uuid.v4(),
    },
    description: { type: 'string' },
    toJSON: function () {
      const obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;
      return obj;
    },
  },
};
