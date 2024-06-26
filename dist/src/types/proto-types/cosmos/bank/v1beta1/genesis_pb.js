// source: cosmos/bank/v1beta1/genesis.proto
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
var cosmos_bank_v1beta1_bank_pb = require('../../../cosmos/bank/v1beta1/bank_pb.js');
goog.object.extend(proto, cosmos_bank_v1beta1_bank_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.bank.v1beta1.Balance', null, global);
goog.exportSymbol('proto.cosmos.bank.v1beta1.GenesisState', null, global);
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
proto.cosmos.bank.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.bank.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.bank.v1beta1.GenesisState.displayName = 'proto.cosmos.bank.v1beta1.GenesisState';
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
proto.cosmos.bank.v1beta1.Balance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.bank.v1beta1.Balance.repeatedFields_, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.Balance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.bank.v1beta1.Balance.displayName = 'proto.cosmos.bank.v1beta1.Balance';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.bank.v1beta1.GenesisState.repeatedFields_ = [2,3,4,5];



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
proto.cosmos.bank.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && cosmos_bank_v1beta1_bank_pb.Params.toObject(includeInstance, f),
    balancesList: jspb.Message.toObjectList(msg.getBalancesList(),
    proto.cosmos.bank.v1beta1.Balance.toObject, includeInstance),
    supplyList: jspb.Message.toObjectList(msg.getSupplyList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    denomMetadataList: jspb.Message.toObjectList(msg.getDenomMetadataList(),
    cosmos_bank_v1beta1_bank_pb.Metadata.toObject, includeInstance),
    sendEnabledList: jspb.Message.toObjectList(msg.getSendEnabledList(),
    cosmos_bank_v1beta1_bank_pb.SendEnabled.toObject, includeInstance)
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
 * @return {!proto.cosmos.bank.v1beta1.GenesisState}
 */
proto.cosmos.bank.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.GenesisState;
  return proto.cosmos.bank.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState}
 */
proto.cosmos.bank.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_bank_v1beta1_bank_pb.Params;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.cosmos.bank.v1beta1.Balance;
      reader.readMessage(value,proto.cosmos.bank.v1beta1.Balance.deserializeBinaryFromReader);
      msg.addBalances(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addSupply(value);
      break;
    case 4:
      var value = new cosmos_bank_v1beta1_bank_pb.Metadata;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.Metadata.deserializeBinaryFromReader);
      msg.addDenomMetadata(value);
      break;
    case 5:
      var value = new cosmos_bank_v1beta1_bank_pb.SendEnabled;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.SendEnabled.deserializeBinaryFromReader);
      msg.addSendEnabled(value);
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
proto.cosmos.bank.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_bank_v1beta1_bank_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getBalancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cosmos.bank.v1beta1.Balance.serializeBinaryToWriter
    );
  }
  f = message.getSupplyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getDenomMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_bank_v1beta1_bank_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getSendEnabledList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cosmos_bank_v1beta1_bank_pb.SendEnabled.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.cosmos.bank.v1beta1.Params}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.cosmos.bank.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_bank_v1beta1_bank_pb.Params, 1));
};


/**
 * @param {?proto.cosmos.bank.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
*/
proto.cosmos.bank.v1beta1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Balance balances = 2;
 * @return {!Array<!proto.cosmos.bank.v1beta1.Balance>}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.getBalancesList = function() {
  return /** @type{!Array<!proto.cosmos.bank.v1beta1.Balance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.bank.v1beta1.Balance, 2));
};


/**
 * @param {!Array<!proto.cosmos.bank.v1beta1.Balance>} value
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
*/
proto.cosmos.bank.v1beta1.GenesisState.prototype.setBalancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.Balance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.v1beta1.Balance}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.addBalances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.bank.v1beta1.Balance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.clearBalancesList = function() {
  return this.setBalancesList([]);
};


/**
 * repeated cosmos.base.v1beta1.Coin supply = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.getSupplyList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
*/
proto.cosmos.bank.v1beta1.GenesisState.prototype.setSupplyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.addSupply = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.clearSupplyList = function() {
  return this.setSupplyList([]);
};


/**
 * repeated Metadata denom_metadata = 4;
 * @return {!Array<!proto.cosmos.bank.v1beta1.Metadata>}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.getDenomMetadataList = function() {
  return /** @type{!Array<!proto.cosmos.bank.v1beta1.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_bank_v1beta1_bank_pb.Metadata, 4));
};


/**
 * @param {!Array<!proto.cosmos.bank.v1beta1.Metadata>} value
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
*/
proto.cosmos.bank.v1beta1.GenesisState.prototype.setDenomMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.v1beta1.Metadata}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.addDenomMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.bank.v1beta1.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.clearDenomMetadataList = function() {
  return this.setDenomMetadataList([]);
};


/**
 * repeated SendEnabled send_enabled = 5;
 * @return {!Array<!proto.cosmos.bank.v1beta1.SendEnabled>}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.getSendEnabledList = function() {
  return /** @type{!Array<!proto.cosmos.bank.v1beta1.SendEnabled>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_bank_v1beta1_bank_pb.SendEnabled, 5));
};


/**
 * @param {!Array<!proto.cosmos.bank.v1beta1.SendEnabled>} value
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
*/
proto.cosmos.bank.v1beta1.GenesisState.prototype.setSendEnabledList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.SendEnabled=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.v1beta1.SendEnabled}
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.addSendEnabled = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cosmos.bank.v1beta1.SendEnabled, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.v1beta1.GenesisState} returns this
 */
proto.cosmos.bank.v1beta1.GenesisState.prototype.clearSendEnabledList = function() {
  return this.setSendEnabledList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.bank.v1beta1.Balance.repeatedFields_ = [2];



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
proto.cosmos.bank.v1beta1.Balance.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.Balance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.Balance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.Balance.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
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
 * @return {!proto.cosmos.bank.v1beta1.Balance}
 */
proto.cosmos.bank.v1beta1.Balance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.Balance;
  return proto.cosmos.bank.v1beta1.Balance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.Balance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.Balance}
 */
proto.cosmos.bank.v1beta1.Balance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addCoins(value);
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
proto.cosmos.bank.v1beta1.Balance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.Balance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.Balance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.Balance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.bank.v1beta1.Balance.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.bank.v1beta1.Balance} returns this
 */
proto.cosmos.bank.v1beta1.Balance.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin coins = 2;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.bank.v1beta1.Balance.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 2));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.cosmos.bank.v1beta1.Balance} returns this
*/
proto.cosmos.bank.v1beta1.Balance.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.bank.v1beta1.Balance.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.v1beta1.Balance} returns this
 */
proto.cosmos.bank.v1beta1.Balance.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};


goog.object.extend(exports, proto.cosmos.bank.v1beta1);
