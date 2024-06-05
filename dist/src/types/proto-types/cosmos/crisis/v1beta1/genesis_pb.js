// source: cosmos/crisis/v1beta1/genesis.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.crisis.v1beta1.GenesisState', null, global);
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
proto.cosmos.crisis.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crisis.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crisis.v1beta1.GenesisState.displayName = 'proto.cosmos.crisis.v1beta1.GenesisState';
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
proto.cosmos.crisis.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crisis.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crisis.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crisis.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    constantFee: (f = msg.getConstantFee()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.crisis.v1beta1.GenesisState}
 */
proto.cosmos.crisis.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crisis.v1beta1.GenesisState;
  return proto.cosmos.crisis.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crisis.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crisis.v1beta1.GenesisState}
 */
proto.cosmos.crisis.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setConstantFee(value);
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
proto.cosmos.crisis.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crisis.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crisis.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crisis.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConstantFee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.v1beta1.Coin constant_fee = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.crisis.v1beta1.GenesisState.prototype.getConstantFee = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.cosmos.crisis.v1beta1.GenesisState} returns this
*/
proto.cosmos.crisis.v1beta1.GenesisState.prototype.setConstantFee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crisis.v1beta1.GenesisState} returns this
 */
proto.cosmos.crisis.v1beta1.GenesisState.prototype.clearConstantFee = function() {
  return this.setConstantFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crisis.v1beta1.GenesisState.prototype.hasConstantFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.cosmos.crisis.v1beta1);
