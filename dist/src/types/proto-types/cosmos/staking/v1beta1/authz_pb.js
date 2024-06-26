// source: cosmos/staking/v1beta1/authz.proto
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
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.staking.v1beta1.AuthorizationType', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.StakeAuthorization', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.StakeAuthorization.Validators', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.StakeAuthorization.ValidatorsCase', null, global);
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
proto.cosmos.staking.v1beta1.StakeAuthorization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cosmos.staking.v1beta1.StakeAuthorization.oneofGroups_);
};
goog.inherits(proto.cosmos.staking.v1beta1.StakeAuthorization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.StakeAuthorization.displayName = 'proto.cosmos.staking.v1beta1.StakeAuthorization';
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
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.StakeAuthorization.Validators, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.displayName = 'proto.cosmos.staking.v1beta1.StakeAuthorization.Validators';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.ValidatorsCase = {
  VALIDATORS_NOT_SET: 0,
  ALLOW_LIST: 2,
  DENY_LIST: 3
};

/**
 * @return {proto.cosmos.staking.v1beta1.StakeAuthorization.ValidatorsCase}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.getValidatorsCase = function() {
  return /** @type {proto.cosmos.staking.v1beta1.StakeAuthorization.ValidatorsCase} */(jspb.Message.computeOneofCase(this, proto.cosmos.staking.v1beta1.StakeAuthorization.oneofGroups_[0]));
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
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.StakeAuthorization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxTokens: (f = msg.getMaxTokens()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    allowList: (f = msg.getAllowList()) && proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.toObject(includeInstance, f),
    denyList: (f = msg.getDenyList()) && proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.toObject(includeInstance, f),
    authorizationType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.StakeAuthorization;
  return proto.cosmos.staking.v1beta1.StakeAuthorization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setMaxTokens(value);
      break;
    case 2:
      var value = new proto.cosmos.staking.v1beta1.StakeAuthorization.Validators;
      reader.readMessage(value,proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.deserializeBinaryFromReader);
      msg.setAllowList(value);
      break;
    case 3:
      var value = new proto.cosmos.staking.v1beta1.StakeAuthorization.Validators;
      reader.readMessage(value,proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.deserializeBinaryFromReader);
      msg.setDenyList(value);
      break;
    case 4:
      var value = /** @type {!proto.cosmos.staking.v1beta1.AuthorizationType} */ (reader.readEnum());
      msg.setAuthorizationType(value);
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
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.StakeAuthorization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxTokens();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getAllowList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.serializeBinaryToWriter
    );
  }
  f = message.getDenyList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.StakeAuthorization.Validators;
  return proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddress(value);
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
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string address = 1;
 * @return {!Array<string>}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.getAddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.setAddressList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.addAddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.Validators.prototype.clearAddressList = function() {
  return this.setAddressList([]);
};


/**
 * optional cosmos.base.v1beta1.Coin max_tokens = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.getMaxTokens = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
*/
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.setMaxTokens = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.clearMaxTokens = function() {
  return this.setMaxTokens(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.hasMaxTokens = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Validators allow_list = 2;
 * @return {?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.getAllowList = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.staking.v1beta1.StakeAuthorization.Validators, 2));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
*/
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.setAllowList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cosmos.staking.v1beta1.StakeAuthorization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.clearAllowList = function() {
  return this.setAllowList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.hasAllowList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Validators deny_list = 3;
 * @return {?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.getDenyList = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.staking.v1beta1.StakeAuthorization.Validators, 3));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.StakeAuthorization.Validators|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
*/
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.setDenyList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cosmos.staking.v1beta1.StakeAuthorization.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.clearDenyList = function() {
  return this.setDenyList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.hasDenyList = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuthorizationType authorization_type = 4;
 * @return {!proto.cosmos.staking.v1beta1.AuthorizationType}
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.getAuthorizationType = function() {
  return /** @type {!proto.cosmos.staking.v1beta1.AuthorizationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.cosmos.staking.v1beta1.AuthorizationType} value
 * @return {!proto.cosmos.staking.v1beta1.StakeAuthorization} returns this
 */
proto.cosmos.staking.v1beta1.StakeAuthorization.prototype.setAuthorizationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.cosmos.staking.v1beta1.AuthorizationType = {
  AUTHORIZATION_TYPE_UNSPECIFIED: 0,
  AUTHORIZATION_TYPE_DELEGATE: 1,
  AUTHORIZATION_TYPE_UNDELEGATE: 2,
  AUTHORIZATION_TYPE_REDELEGATE: 3
};

goog.object.extend(exports, proto.cosmos.staking.v1beta1);
