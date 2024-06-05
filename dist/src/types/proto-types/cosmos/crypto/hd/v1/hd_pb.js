// source: cosmos/crypto/hd/v1/hd.proto
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

var amino_amino_pb = require('../../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.cosmos.crypto.hd.v1.BIP44Params', null, global);
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
proto.cosmos.crypto.hd.v1.BIP44Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.hd.v1.BIP44Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.hd.v1.BIP44Params.displayName = 'proto.cosmos.crypto.hd.v1.BIP44Params';
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
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.hd.v1.BIP44Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.hd.v1.BIP44Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.hd.v1.BIP44Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    purpose: jspb.Message.getFieldWithDefault(msg, 1, 0),
    coinType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    account: jspb.Message.getFieldWithDefault(msg, 3, 0),
    change: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    addressIndex: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.hd.v1.BIP44Params;
  return proto.cosmos.crypto.hd.v1.BIP44Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.hd.v1.BIP44Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPurpose(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCoinType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChange(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddressIndex(value);
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
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.hd.v1.BIP44Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.hd.v1.BIP44Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.hd.v1.BIP44Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurpose();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCoinType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAccount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getChange();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAddressIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 purpose = 1;
 * @return {number}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.getPurpose = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params} returns this
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.setPurpose = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 coin_type = 2;
 * @return {number}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.getCoinType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params} returns this
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.setCoinType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 account = 3;
 * @return {number}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.getAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params} returns this
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.setAccount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool change = 4;
 * @return {boolean}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.getChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params} returns this
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.setChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 address_index = 5;
 * @return {number}
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.getAddressIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.hd.v1.BIP44Params} returns this
 */
proto.cosmos.crypto.hd.v1.BIP44Params.prototype.setAddressIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.cosmos.crypto.hd.v1);
