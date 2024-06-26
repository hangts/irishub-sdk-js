// source: cosmos/staking/v1beta1/genesis.proto
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
var cosmos_staking_v1beta1_staking_pb = require('../../../cosmos/staking/v1beta1/staking_pb.js');
goog.object.extend(proto, cosmos_staking_v1beta1_staking_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.cosmos.staking.v1beta1.GenesisState', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.LastValidatorPower', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.TokenizeShareLock', null, global);
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
proto.cosmos.staking.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.GenesisState.displayName = 'proto.cosmos.staking.v1beta1.GenesisState';
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
proto.cosmos.staking.v1beta1.TokenizeShareLock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.TokenizeShareLock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.TokenizeShareLock.displayName = 'proto.cosmos.staking.v1beta1.TokenizeShareLock';
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
proto.cosmos.staking.v1beta1.LastValidatorPower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.LastValidatorPower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.LastValidatorPower.displayName = 'proto.cosmos.staking.v1beta1.LastValidatorPower';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.GenesisState.repeatedFields_ = [3,4,5,6,7,9,12];



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
proto.cosmos.staking.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && cosmos_staking_v1beta1_staking_pb.Params.toObject(includeInstance, f),
    lastTotalPower: msg.getLastTotalPower_asB64(),
    lastValidatorPowersList: jspb.Message.toObjectList(msg.getLastValidatorPowersList(),
    proto.cosmos.staking.v1beta1.LastValidatorPower.toObject, includeInstance),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    cosmos_staking_v1beta1_staking_pb.Validator.toObject, includeInstance),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    cosmos_staking_v1beta1_staking_pb.Delegation.toObject, includeInstance),
    unbondingDelegationsList: jspb.Message.toObjectList(msg.getUnbondingDelegationsList(),
    cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.toObject, includeInstance),
    redelegationsList: jspb.Message.toObjectList(msg.getRedelegationsList(),
    cosmos_staking_v1beta1_staking_pb.Redelegation.toObject, includeInstance),
    exported: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    tokenizeShareRecordsList: jspb.Message.toObjectList(msg.getTokenizeShareRecordsList(),
    cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.toObject, includeInstance),
    lastTokenizeShareRecordId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    totalLiquidStakedTokens: msg.getTotalLiquidStakedTokens_asB64(),
    tokenizeShareLocksList: jspb.Message.toObjectList(msg.getTokenizeShareLocksList(),
    proto.cosmos.staking.v1beta1.TokenizeShareLock.toObject, includeInstance)
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
 * @return {!proto.cosmos.staking.v1beta1.GenesisState}
 */
proto.cosmos.staking.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.GenesisState;
  return proto.cosmos.staking.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState}
 */
proto.cosmos.staking.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Params;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLastTotalPower(value);
      break;
    case 3:
      var value = new proto.cosmos.staking.v1beta1.LastValidatorPower;
      reader.readMessage(value,proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader);
      msg.addLastValidatorPowers(value);
      break;
    case 4:
      var value = new cosmos_staking_v1beta1_staking_pb.Validator;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 5:
      var value = new cosmos_staking_v1beta1_staking_pb.Delegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Delegation.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    case 6:
      var value = new cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.deserializeBinaryFromReader);
      msg.addUnbondingDelegations(value);
      break;
    case 7:
      var value = new cosmos_staking_v1beta1_staking_pb.Redelegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Redelegation.deserializeBinaryFromReader);
      msg.addRedelegations(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExported(value);
      break;
    case 9:
      var value = new cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.deserializeBinaryFromReader);
      msg.addTokenizeShareRecords(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastTokenizeShareRecordId(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTotalLiquidStakedTokens(value);
      break;
    case 12:
      var value = new proto.cosmos.staking.v1beta1.TokenizeShareLock;
      reader.readMessage(value,proto.cosmos.staking.v1beta1.TokenizeShareLock.deserializeBinaryFromReader);
      msg.addTokenizeShareLocks(value);
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
proto.cosmos.staking.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getLastTotalPower_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLastValidatorPowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter
    );
  }
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cosmos_staking_v1beta1_staking_pb.Delegation.serializeBinaryToWriter
    );
  }
  f = message.getUnbondingDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.serializeBinaryToWriter
    );
  }
  f = message.getRedelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      cosmos_staking_v1beta1_staking_pb.Redelegation.serializeBinaryToWriter
    );
  }
  f = message.getExported();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getTokenizeShareRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.serializeBinaryToWriter
    );
  }
  f = message.getLastTokenizeShareRecordId();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTotalLiquidStakedTokens_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getTokenizeShareLocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.cosmos.staking.v1beta1.TokenizeShareLock.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.cosmos.staking.v1beta1.Params}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Params, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes last_total_power = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes last_total_power = 2;
 * This is a type-conversion wrapper around `getLastTotalPower()`
 * @return {string}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLastTotalPower()));
};


/**
 * optional bytes last_total_power = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastTotalPower()`
 * @return {!Uint8Array}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastTotalPower()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setLastTotalPower = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated LastValidatorPower last_validator_powers = 3;
 * @return {!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastValidatorPowersList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.staking.v1beta1.LastValidatorPower, 3));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setLastValidatorPowersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addLastValidatorPowers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.staking.v1beta1.LastValidatorPower, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearLastValidatorPowersList = function() {
  return this.setLastValidatorPowersList([]);
};


/**
 * repeated Validator validators = 4;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Validator>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 4));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.Validator>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.staking.v1beta1.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * repeated Delegation delegations = 5;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Delegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Delegation, 5));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.Delegation>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Delegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cosmos.staking.v1beta1.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};


/**
 * repeated UnbondingDelegation unbonding_delegations = 6;
 * @return {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getUnbondingDelegationsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, 6));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setUnbondingDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.UnbondingDelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.UnbondingDelegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addUnbondingDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.cosmos.staking.v1beta1.UnbondingDelegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearUnbondingDelegationsList = function() {
  return this.setUnbondingDelegationsList([]);
};


/**
 * repeated Redelegation redelegations = 7;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Redelegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getRedelegationsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Redelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Redelegation, 7));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.Redelegation>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setRedelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.Redelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Redelegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addRedelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cosmos.staking.v1beta1.Redelegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearRedelegationsList = function() {
  return this.setRedelegationsList([]);
};


/**
 * optional bool exported = 8;
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getExported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setExported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated TokenizeShareRecord tokenize_share_records = 9;
 * @return {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getTokenizeShareRecordsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord, 9));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setTokenizeShareRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareRecord}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addTokenizeShareRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.cosmos.staking.v1beta1.TokenizeShareRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearTokenizeShareRecordsList = function() {
  return this.setTokenizeShareRecordsList([]);
};


/**
 * optional uint64 last_tokenize_share_record_id = 10;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTokenizeShareRecordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setLastTokenizeShareRecordId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bytes total_liquid_staked_tokens = 11;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getTotalLiquidStakedTokens = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes total_liquid_staked_tokens = 11;
 * This is a type-conversion wrapper around `getTotalLiquidStakedTokens()`
 * @return {string}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getTotalLiquidStakedTokens_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTotalLiquidStakedTokens()));
};


/**
 * optional bytes total_liquid_staked_tokens = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTotalLiquidStakedTokens()`
 * @return {!Uint8Array}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getTotalLiquidStakedTokens_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTotalLiquidStakedTokens()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setTotalLiquidStakedTokens = function(value) {
  return jspb.Message.setProto3BytesField(this, 11, value);
};


/**
 * repeated TokenizeShareLock tokenize_share_locks = 12;
 * @return {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareLock>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getTokenizeShareLocksList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.TokenizeShareLock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.staking.v1beta1.TokenizeShareLock, 12));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareLock>} value
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
*/
proto.cosmos.staking.v1beta1.GenesisState.prototype.setTokenizeShareLocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareLock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addTokenizeShareLocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.cosmos.staking.v1beta1.TokenizeShareLock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState} returns this
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.clearTokenizeShareLocksList = function() {
  return this.setTokenizeShareLocksList([]);
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
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.TokenizeShareLock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareLock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    completionTime: (f = msg.getCompletionTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.TokenizeShareLock;
  return proto.cosmos.staking.v1beta1.TokenizeShareLock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareLock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletionTime(value);
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
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.TokenizeShareLock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareLock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompletionTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock} returns this
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock} returns this
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp completion_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.getCompletionTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock} returns this
*/
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.setCompletionTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareLock} returns this
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.clearCompletionTime = function() {
  return this.setCompletionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.TokenizeShareLock.prototype.hasCompletionTime = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.LastValidatorPower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    power: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.LastValidatorPower;
  return proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPower(value);
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
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower} returns this
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower} returns this
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.setPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.staking.v1beta1);
