// source: cosmos/staking/v1beta1/query.proto
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

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_staking_v1beta1_staking_pb = require('../../../cosmos/staking/v1beta1/staking_pb.js');
goog.object.extend(proto, cosmos_staking_v1beta1_staking_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js');
goog.object.extend(proto, cosmos_query_v1_query_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegationRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegationResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryParamsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryParamsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryPoolRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryPoolResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryRedelegationsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryRedelegationsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorsRequest', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.QueryValidatorsResponse', null, global);
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
proto.cosmos.staking.v1beta1.QueryValidatorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorsRequest';
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
proto.cosmos.staking.v1beta1.QueryValidatorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryValidatorsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorsResponse';
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
proto.cosmos.staking.v1beta1.QueryValidatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorRequest';
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
proto.cosmos.staking.v1beta1.QueryValidatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorResponse';
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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest';
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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse';
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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest';
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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse';
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
proto.cosmos.staking.v1beta1.QueryDelegationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegationRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegationRequest';
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
proto.cosmos.staking.v1beta1.QueryDelegationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegationResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegationResponse';
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest';
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse';
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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest';
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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse';
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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest';
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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse';
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
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryRedelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryRedelegationsRequest';
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
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryRedelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryRedelegationsResponse';
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest';
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse';
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest';
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse';
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest';
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse';
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
proto.cosmos.staking.v1beta1.QueryPoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryPoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryPoolRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryPoolRequest';
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
proto.cosmos.staking.v1beta1.QueryPoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryPoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryPoolResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryPoolResponse';
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
proto.cosmos.staking.v1beta1.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryParamsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryParamsRequest';
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
proto.cosmos.staking.v1beta1.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryParamsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryParamsResponse';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse';
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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest';
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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse';
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest';
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse';
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.displayName = 'proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest';
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse';
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.displayName = 'proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked';
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo';
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.displayName = 'proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse';
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
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorsRequest;
  return proto.cosmos.staking.v1beta1.QueryValidatorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    cosmos_staking_v1beta1_staking_pb.Validator.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorsResponse;
  return proto.cosmos.staking.v1beta1.QueryValidatorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Validator;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Validator validators = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Validator>}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.Validator>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryValidatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorRequest;
  return proto.cosmos.staking.v1beta1.QueryValidatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string validator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && cosmos_staking_v1beta1_staking_pb.Validator.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorResponse;
  return proto.cosmos.staking.v1beta1.QueryValidatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Validator;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.getValidator = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.Validator} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.Validator|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorResponse.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest;
  return proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string validator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationResponsesList: jspb.Message.toObjectList(msg.getDelegationResponsesList(),
    cosmos_staking_v1beta1_staking_pb.DelegationResponse.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse;
  return proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.DelegationResponse;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.DelegationResponse.deserializeBinaryFromReader);
      msg.addDelegationResponses(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.DelegationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DelegationResponse delegation_responses = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.getDelegationResponsesList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.DelegationResponse, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.setDelegationResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.DelegationResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.DelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.addDelegationResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.DelegationResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.clearDelegationResponsesList = function() {
  return this.setDelegationResponsesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest;
  return proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string validator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unbondingResponsesList: jspb.Message.toObjectList(msg.getUnbondingResponsesList(),
    cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse;
  return proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.deserializeBinaryFromReader);
      msg.addUnbondingResponses(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnbondingResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UnbondingDelegation unbonding_responses = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.getUnbondingResponsesList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.setUnbondingResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.UnbondingDelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.UnbondingDelegation}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.addUnbondingResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.UnbondingDelegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.clearUnbondingResponsesList = function() {
  return this.setUnbondingResponsesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegationRequest;
  return proto.cosmos.staking.v1beta1.QueryDelegationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
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
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validator_addr = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegationRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationResponse: (f = msg.getDelegationResponse()) && cosmos_staking_v1beta1_staking_pb.DelegationResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegationResponse;
  return proto.cosmos.staking.v1beta1.QueryDelegationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.DelegationResponse;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.DelegationResponse.deserializeBinaryFromReader);
      msg.setDelegationResponse(value);
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
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.DelegationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional DelegationResponse delegation_response = 1;
 * @return {?proto.cosmos.staking.v1beta1.DelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.getDelegationResponse = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.DelegationResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.DelegationResponse, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.DelegationResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.setDelegationResponse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegationResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.clearDelegationResponse = function() {
  return this.setDelegationResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegationResponse.prototype.hasDelegationResponse = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest;
  return proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validator_addr = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unbond: (f = msg.getUnbond()) && cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse;
  return proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.deserializeBinaryFromReader);
      msg.setUnbond(value);
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
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnbond();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.serializeBinaryToWriter
    );
  }
};


/**
 * optional UnbondingDelegation unbond = 1;
 * @return {?proto.cosmos.staking.v1beta1.UnbondingDelegation}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.getUnbond = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.UnbondingDelegation} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.UnbondingDelegation|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.setUnbond = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.clearUnbond = function() {
  return this.setUnbond(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.prototype.hasUnbond = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest;
  return proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationResponsesList: jspb.Message.toObjectList(msg.getDelegationResponsesList(),
    cosmos_staking_v1beta1_staking_pb.DelegationResponse.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse;
  return proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.DelegationResponse;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.DelegationResponse.deserializeBinaryFromReader);
      msg.addDelegationResponses(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.DelegationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DelegationResponse delegation_responses = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.getDelegationResponsesList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.DelegationResponse, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.DelegationResponse>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.setDelegationResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.DelegationResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.DelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.addDelegationResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.DelegationResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.clearDelegationResponsesList = function() {
  return this.setDelegationResponsesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest;
  return proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unbondingResponsesList: jspb.Message.toObjectList(msg.getUnbondingResponsesList(),
    cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse;
  return proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.deserializeBinaryFromReader);
      msg.addUnbondingResponses(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnbondingResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UnbondingDelegation unbonding_responses = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.getUnbondingResponsesList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.setUnbondingResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.UnbondingDelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.UnbondingDelegation}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.addUnbondingResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.UnbondingDelegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.clearUnbondingResponsesList = function() {
  return this.setUnbondingResponsesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcValidatorAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dstValidatorAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryRedelegationsRequest;
  return proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcValidatorAddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstValidatorAddr(value);
      break;
    case 4:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDstValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string src_validator_addr = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.getSrcValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.setSrcValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dst_validator_addr = 3;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.getDstValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.setDstValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 4;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 4));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    redelegationResponsesList: jspb.Message.toObjectList(msg.getRedelegationResponsesList(),
    cosmos_staking_v1beta1_staking_pb.RedelegationResponse.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryRedelegationsResponse;
  return proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.RedelegationResponse;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.RedelegationResponse.deserializeBinaryFromReader);
      msg.addRedelegationResponses(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedelegationResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.RedelegationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RedelegationResponse redelegation_responses = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.RedelegationResponse>}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.getRedelegationResponsesList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.RedelegationResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.RedelegationResponse, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.RedelegationResponse>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.setRedelegationResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.RedelegationResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.RedelegationResponse}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.addRedelegationResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.RedelegationResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.clearRedelegationResponsesList = function() {
  return this.setRedelegationResponsesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest;
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    cosmos_staking_v1beta1_staking_pb.Validator.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse;
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Validator;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Validator validators = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Validator>}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.Validator>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest;
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string delegator_addr = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.getDelegatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.setDelegatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validator_addr = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.prototype.setValidatorAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && cosmos_staking_v1beta1_staking_pb.Validator.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse;
  return proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Validator;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
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
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.getValidator = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.Validator} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.Validator|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest;
  return proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hist: (f = msg.getHist()) && cosmos_staking_v1beta1_staking_pb.HistoricalInfo.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse;
  return proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.HistoricalInfo;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.HistoricalInfo.deserializeBinaryFromReader);
      msg.setHist(value);
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
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.HistoricalInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional HistoricalInfo hist = 1;
 * @return {?proto.cosmos.staking.v1beta1.HistoricalInfo}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.getHist = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.HistoricalInfo} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.HistoricalInfo, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.HistoricalInfo|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.setHist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.clearHist = function() {
  return this.setHist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.prototype.hasHist = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryPoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryPoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryPoolRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolRequest}
 */
proto.cosmos.staking.v1beta1.QueryPoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryPoolRequest;
  return proto.cosmos.staking.v1beta1.QueryPoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolRequest}
 */
proto.cosmos.staking.v1beta1.QueryPoolRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryPoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryPoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryPoolRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryPoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pool: (f = msg.getPool()) && cosmos_staking_v1beta1_staking_pb.Pool.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolResponse}
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryPoolResponse;
  return proto.cosmos.staking.v1beta1.QueryPoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolResponse}
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.Pool;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.Pool.deserializeBinaryFromReader);
      msg.setPool(value);
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
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryPoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Pool.serializeBinaryToWriter
    );
  }
};


/**
 * optional Pool pool = 1;
 * @return {?proto.cosmos.staking.v1beta1.Pool}
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.getPool = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.Pool} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Pool, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.Pool|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.setPool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryPoolResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.clearPool = function() {
  return this.setPool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryPoolResponse.prototype.hasPool = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryParamsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsRequest}
 */
proto.cosmos.staking.v1beta1.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryParamsRequest;
  return proto.cosmos.staking.v1beta1.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsRequest}
 */
proto.cosmos.staking.v1beta1.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && cosmos_staking_v1beta1_staking_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsResponse}
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryParamsResponse;
  return proto.cosmos.staking.v1beta1.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsResponse}
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.cosmos.staking.v1beta1.Params}
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Params, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryParamsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.deserializeBinaryFromReader);
      msg.setRecord(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional TokenizeShareRecord record = 1;
 * @return {?proto.cosmos.staking.v1beta1.TokenizeShareRecord}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.getRecord = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.TokenizeShareRecord} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.TokenizeShareRecord|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    denom: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDenom(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.deserializeBinaryFromReader);
      msg.setRecord(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional TokenizeShareRecord record = 1;
 * @return {?proto.cosmos.staking.v1beta1.TokenizeShareRecord}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.getRecord = function() {
  return /** @type{?proto.cosmos.staking.v1beta1.TokenizeShareRecord} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord, 1));
};


/**
 * @param {?proto.cosmos.staking.v1beta1.TokenizeShareRecord|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.toObject, includeInstance)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenizeShareRecord records = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareRecord}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.TokenizeShareRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest;
  return proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} returns this
*/
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} returns this
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.repeatedFields_ = [1];



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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse;
  return proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord;
      reader.readMessage(value,cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenizeShareRecord records = 1;
 * @return {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.TokenizeShareRecord, 1));
};


/**
 * @param {!Array<!proto.cosmos.staking.v1beta1.TokenizeShareRecord>} value
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.TokenizeShareRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.TokenizeShareRecord}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.staking.v1beta1.TokenizeShareRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest}
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest;
  return proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest}
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse}
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse;
  return proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse}
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
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
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest;
  return proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse;
  return proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
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
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.v1beta1.Coin value = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.getValue = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse} returns this
*/
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked}
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked;
  return proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked}
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokens: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse}
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse;
  return proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse}
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokens(value);
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
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokens();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tokens = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.prototype.getTokens = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.prototype.setTokens = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expirationTime: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse;
  return proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationTime(value);
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
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpirationTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string expiration_time = 2;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.getExpirationTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse} returns this
 */
proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.prototype.setExpirationTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.staking.v1beta1);
