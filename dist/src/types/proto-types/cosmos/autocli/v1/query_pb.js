// source: cosmos/autocli/v1/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_autocli_v1_options_pb = require('../../../cosmos/autocli/v1/options_pb.js');
goog.object.extend(proto, cosmos_autocli_v1_options_pb);
var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js');
goog.object.extend(proto, cosmos_query_v1_query_pb);
goog.exportSymbol('proto.cosmos.autocli.v1.AppOptionsRequest', null, global);
goog.exportSymbol('proto.cosmos.autocli.v1.AppOptionsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.autocli.v1.AppOptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.autocli.v1.AppOptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.autocli.v1.AppOptionsRequest.displayName = 'proto.cosmos.autocli.v1.AppOptionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.autocli.v1.AppOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.autocli.v1.AppOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.autocli.v1.AppOptionsResponse.displayName = 'proto.cosmos.autocli.v1.AppOptionsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.autocli.v1.AppOptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.autocli.v1.AppOptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.autocli.v1.AppOptionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.autocli.v1.AppOptionsRequest}
 */
proto.cosmos.autocli.v1.AppOptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.autocli.v1.AppOptionsRequest;
  return proto.cosmos.autocli.v1.AppOptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.autocli.v1.AppOptionsRequest}
 */
proto.cosmos.autocli.v1.AppOptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.autocli.v1.AppOptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.autocli.v1.AppOptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.autocli.v1.AppOptionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.autocli.v1.AppOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.autocli.v1.AppOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.autocli.v1.AppOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.autocli.v1.AppOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleOptionsMap: (f = msg.getModuleOptionsMap()) ? f.toObject(includeInstance, proto.cosmos.autocli.v1.ModuleOptions.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.autocli.v1.AppOptionsResponse}
 */
proto.cosmos.autocli.v1.AppOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.autocli.v1.AppOptionsResponse;
  return proto.cosmos.autocli.v1.AppOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.autocli.v1.AppOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.autocli.v1.AppOptionsResponse}
 */
proto.cosmos.autocli.v1.AppOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getModuleOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cosmos.autocli.v1.ModuleOptions.deserializeBinaryFromReader, "", new proto.cosmos.autocli.v1.ModuleOptions());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.autocli.v1.AppOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.autocli.v1.AppOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.autocli.v1.AppOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.autocli.v1.AppOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cosmos.autocli.v1.ModuleOptions.serializeBinaryToWriter);
  }
};


/**
 * map<string, ModuleOptions> module_options = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cosmos.autocli.v1.ModuleOptions>}
 */
proto.cosmos.autocli.v1.AppOptionsResponse.prototype.getModuleOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cosmos.autocli.v1.ModuleOptions>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.cosmos.autocli.v1.ModuleOptions));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cosmos.autocli.v1.AppOptionsResponse} returns this
 */
proto.cosmos.autocli.v1.AppOptionsResponse.prototype.clearModuleOptionsMap = function() {
  this.getModuleOptionsMap().clear();
  return this;};


goog.object.extend(exports, proto.cosmos.autocli.v1);
