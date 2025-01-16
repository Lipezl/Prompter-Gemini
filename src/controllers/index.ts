const chatController = require('./chatController');
const rootController = require('./rootController');
const templateController = require('./templateController');

const controllers = {
  chat: chatController,
  root: rootController,
  template: templateController
};

export default controllers;
