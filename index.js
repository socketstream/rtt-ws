"use strict";

/*!
 * WebSocket Server implementing the Realtime Transport Spec
 * See https://github.com/socketstream/realtime-transport for more info
 *
 * Copyright(c) 2013 Owen Barnes <owen@socketstream.org>
 * MIT Licensed
 */

module.exports = function(options) {
  return {
    server: require('./server')(options),   
    client: require('./client')
  };
};

