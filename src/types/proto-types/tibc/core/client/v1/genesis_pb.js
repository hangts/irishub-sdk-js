// source: tibc/core/client/v1/genesis.proto
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

var tibc_core_client_v1_client_pb = require('../../../../tibc/core/client/v1/client_pb.js');
goog.object.extend(proto, tibc_core_client_v1_client_pb);
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.tibc.core.client.v1.GenesisMetadata', null, global);
goog.exportSymbol('proto.tibc.core.client.v1.GenesisState', null, global);
goog.exportSymbol('proto.tibc.core.client.v1.IdentifiedGenesisMetadata', null, global);
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
proto.tibc.core.client.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tibc.core.client.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.tibc.core.client.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tibc.core.client.v1.GenesisState.displayName = 'proto.tibc.core.client.v1.GenesisState';
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
proto.tibc.core.client.v1.GenesisMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tibc.core.client.v1.GenesisMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tibc.core.client.v1.GenesisMetadata.displayName = 'proto.tibc.core.client.v1.GenesisMetadata';
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
proto.tibc.core.client.v1.IdentifiedGenesisMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tibc.core.client.v1.IdentifiedGenesisMetadata.repeatedFields_, null);
};
goog.inherits(proto.tibc.core.client.v1.IdentifiedGenesisMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tibc.core.client.v1.IdentifiedGenesisMetadata.displayName = 'proto.tibc.core.client.v1.IdentifiedGenesisMetadata';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tibc.core.client.v1.GenesisState.repeatedFields_ = [1,2,3,6];



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
proto.tibc.core.client.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.tibc.core.client.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tibc.core.client.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientsList: jspb.Message.toObjectList(msg.getClientsList(),
    tibc_core_client_v1_client_pb.IdentifiedClientState.toObject, includeInstance),
    clientsConsensusList: jspb.Message.toObjectList(msg.getClientsConsensusList(),
    tibc_core_client_v1_client_pb.ClientConsensusStates.toObject, includeInstance),
    clientsMetadataList: jspb.Message.toObjectList(msg.getClientsMetadataList(),
    proto.tibc.core.client.v1.IdentifiedGenesisMetadata.toObject, includeInstance),
    nativeChainName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    relayersList: jspb.Message.toObjectList(msg.getRelayersList(),
    tibc_core_client_v1_client_pb.IdentifiedRelayers.toObject, includeInstance)
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
 * @return {!proto.tibc.core.client.v1.GenesisState}
 */
proto.tibc.core.client.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tibc.core.client.v1.GenesisState;
  return proto.tibc.core.client.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tibc.core.client.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tibc.core.client.v1.GenesisState}
 */
proto.tibc.core.client.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tibc_core_client_v1_client_pb.IdentifiedClientState;
      reader.readMessage(value,tibc_core_client_v1_client_pb.IdentifiedClientState.deserializeBinaryFromReader);
      msg.addClients(value);
      break;
    case 2:
      var value = new tibc_core_client_v1_client_pb.ClientConsensusStates;
      reader.readMessage(value,tibc_core_client_v1_client_pb.ClientConsensusStates.deserializeBinaryFromReader);
      msg.addClientsConsensus(value);
      break;
    case 3:
      var value = new proto.tibc.core.client.v1.IdentifiedGenesisMetadata;
      reader.readMessage(value,proto.tibc.core.client.v1.IdentifiedGenesisMetadata.deserializeBinaryFromReader);
      msg.addClientsMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNativeChainName(value);
      break;
    case 6:
      var value = new tibc_core_client_v1_client_pb.IdentifiedRelayers;
      reader.readMessage(value,tibc_core_client_v1_client_pb.IdentifiedRelayers.deserializeBinaryFromReader);
      msg.addRelayers(value);
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
proto.tibc.core.client.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tibc.core.client.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tibc.core.client.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tibc_core_client_v1_client_pb.IdentifiedClientState.serializeBinaryToWriter
    );
  }
  f = message.getClientsConsensusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tibc_core_client_v1_client_pb.ClientConsensusStates.serializeBinaryToWriter
    );
  }
  f = message.getClientsMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tibc.core.client.v1.IdentifiedGenesisMetadata.serializeBinaryToWriter
    );
  }
  f = message.getNativeChainName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRelayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      tibc_core_client_v1_client_pb.IdentifiedRelayers.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IdentifiedClientState clients = 1;
 * @return {!Array<!proto.tibc.core.client.v1.IdentifiedClientState>}
 */
proto.tibc.core.client.v1.GenesisState.prototype.getClientsList = function() {
  return /** @type{!Array<!proto.tibc.core.client.v1.IdentifiedClientState>} */ (
    jspb.Message.getRepeatedWrapperField(this, tibc_core_client_v1_client_pb.IdentifiedClientState, 1));
};


/**
 * @param {!Array<!proto.tibc.core.client.v1.IdentifiedClientState>} value
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
*/
proto.tibc.core.client.v1.GenesisState.prototype.setClientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tibc.core.client.v1.IdentifiedClientState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tibc.core.client.v1.IdentifiedClientState}
 */
proto.tibc.core.client.v1.GenesisState.prototype.addClients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tibc.core.client.v1.IdentifiedClientState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
 */
proto.tibc.core.client.v1.GenesisState.prototype.clearClientsList = function() {
  return this.setClientsList([]);
};


/**
 * repeated ClientConsensusStates clients_consensus = 2;
 * @return {!Array<!proto.tibc.core.client.v1.ClientConsensusStates>}
 */
proto.tibc.core.client.v1.GenesisState.prototype.getClientsConsensusList = function() {
  return /** @type{!Array<!proto.tibc.core.client.v1.ClientConsensusStates>} */ (
    jspb.Message.getRepeatedWrapperField(this, tibc_core_client_v1_client_pb.ClientConsensusStates, 2));
};


/**
 * @param {!Array<!proto.tibc.core.client.v1.ClientConsensusStates>} value
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
*/
proto.tibc.core.client.v1.GenesisState.prototype.setClientsConsensusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tibc.core.client.v1.ClientConsensusStates=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tibc.core.client.v1.ClientConsensusStates}
 */
proto.tibc.core.client.v1.GenesisState.prototype.addClientsConsensus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tibc.core.client.v1.ClientConsensusStates, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
 */
proto.tibc.core.client.v1.GenesisState.prototype.clearClientsConsensusList = function() {
  return this.setClientsConsensusList([]);
};


/**
 * repeated IdentifiedGenesisMetadata clients_metadata = 3;
 * @return {!Array<!proto.tibc.core.client.v1.IdentifiedGenesisMetadata>}
 */
proto.tibc.core.client.v1.GenesisState.prototype.getClientsMetadataList = function() {
  return /** @type{!Array<!proto.tibc.core.client.v1.IdentifiedGenesisMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tibc.core.client.v1.IdentifiedGenesisMetadata, 3));
};


/**
 * @param {!Array<!proto.tibc.core.client.v1.IdentifiedGenesisMetadata>} value
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
*/
proto.tibc.core.client.v1.GenesisState.prototype.setClientsMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata}
 */
proto.tibc.core.client.v1.GenesisState.prototype.addClientsMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tibc.core.client.v1.IdentifiedGenesisMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
 */
proto.tibc.core.client.v1.GenesisState.prototype.clearClientsMetadataList = function() {
  return this.setClientsMetadataList([]);
};


/**
 * optional string native_chain_name = 5;
 * @return {string}
 */
proto.tibc.core.client.v1.GenesisState.prototype.getNativeChainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
 */
proto.tibc.core.client.v1.GenesisState.prototype.setNativeChainName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated IdentifiedRelayers relayers = 6;
 * @return {!Array<!proto.tibc.core.client.v1.IdentifiedRelayers>}
 */
proto.tibc.core.client.v1.GenesisState.prototype.getRelayersList = function() {
  return /** @type{!Array<!proto.tibc.core.client.v1.IdentifiedRelayers>} */ (
    jspb.Message.getRepeatedWrapperField(this, tibc_core_client_v1_client_pb.IdentifiedRelayers, 6));
};


/**
 * @param {!Array<!proto.tibc.core.client.v1.IdentifiedRelayers>} value
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
*/
proto.tibc.core.client.v1.GenesisState.prototype.setRelayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tibc.core.client.v1.IdentifiedRelayers=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tibc.core.client.v1.IdentifiedRelayers}
 */
proto.tibc.core.client.v1.GenesisState.prototype.addRelayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tibc.core.client.v1.IdentifiedRelayers, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tibc.core.client.v1.GenesisState} returns this
 */
proto.tibc.core.client.v1.GenesisState.prototype.clearRelayersList = function() {
  return this.setRelayersList([]);
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
proto.tibc.core.client.v1.GenesisMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tibc.core.client.v1.GenesisMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tibc.core.client.v1.GenesisMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.GenesisMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64()
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
 * @return {!proto.tibc.core.client.v1.GenesisMetadata}
 */
proto.tibc.core.client.v1.GenesisMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tibc.core.client.v1.GenesisMetadata;
  return proto.tibc.core.client.v1.GenesisMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tibc.core.client.v1.GenesisMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tibc.core.client.v1.GenesisMetadata}
 */
proto.tibc.core.client.v1.GenesisMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
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
proto.tibc.core.client.v1.GenesisMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tibc.core.client.v1.GenesisMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tibc.core.client.v1.GenesisMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.GenesisMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tibc.core.client.v1.GenesisMetadata} returns this
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tibc.core.client.v1.GenesisMetadata} returns this
 */
proto.tibc.core.client.v1.GenesisMetadata.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.repeatedFields_ = [2];



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
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tibc.core.client.v1.IdentifiedGenesisMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.tibc.core.client.v1.GenesisMetadata.toObject, includeInstance)
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
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata}
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tibc.core.client.v1.IdentifiedGenesisMetadata;
  return proto.tibc.core.client.v1.IdentifiedGenesisMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata}
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainName(value);
      break;
    case 2:
      var value = new proto.tibc.core.client.v1.GenesisMetadata;
      reader.readMessage(value,proto.tibc.core.client.v1.GenesisMetadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
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
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tibc.core.client.v1.IdentifiedGenesisMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tibc.core.client.v1.GenesisMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_name = 1;
 * @return {string}
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.getChainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} returns this
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.setChainName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated GenesisMetadata metadata = 2;
 * @return {!Array<!proto.tibc.core.client.v1.GenesisMetadata>}
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.tibc.core.client.v1.GenesisMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tibc.core.client.v1.GenesisMetadata, 2));
};


/**
 * @param {!Array<!proto.tibc.core.client.v1.GenesisMetadata>} value
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} returns this
*/
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tibc.core.client.v1.GenesisMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tibc.core.client.v1.GenesisMetadata}
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tibc.core.client.v1.GenesisMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tibc.core.client.v1.IdentifiedGenesisMetadata} returns this
 */
proto.tibc.core.client.v1.IdentifiedGenesisMetadata.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


goog.object.extend(exports, proto.tibc.core.client.v1);
