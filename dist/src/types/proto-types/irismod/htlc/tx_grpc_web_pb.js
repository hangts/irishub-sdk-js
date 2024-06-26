/**
 * @fileoverview gRPC-Web generated client stub for irismod.htlc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_msg_v1_msg_pb = require('../../cosmos/msg/v1/msg_pb.js')

var cosmos_proto_cosmos_pb = require('../../cosmos_proto/cosmos_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var irismod_htlc_htlc_pb = require('../../irismod/htlc/htlc_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.htlc = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.htlc.MsgClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.htlc.MsgPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.MsgCreateHTLC,
 *   !proto.irismod.htlc.MsgCreateHTLCResponse>}
 */
const methodDescriptor_Msg_CreateHTLC = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Msg/CreateHTLC',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.MsgCreateHTLC,
  proto.irismod.htlc.MsgCreateHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.MsgCreateHTLC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgCreateHTLCResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.htlc.MsgCreateHTLC,
 *   !proto.irismod.htlc.MsgCreateHTLCResponse>}
 */
const methodInfo_Msg_CreateHTLC = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.htlc.MsgCreateHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.MsgCreateHTLC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgCreateHTLCResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.MsgCreateHTLC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.htlc.MsgCreateHTLCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.MsgCreateHTLCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.MsgClient.prototype.createHTLC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Msg/CreateHTLC',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateHTLC,
      callback);
};


/**
 * @param {!proto.irismod.htlc.MsgCreateHTLC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.MsgCreateHTLCResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.MsgPromiseClient.prototype.createHTLC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Msg/CreateHTLC',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateHTLC);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.MsgClaimHTLC,
 *   !proto.irismod.htlc.MsgClaimHTLCResponse>}
 */
const methodDescriptor_Msg_ClaimHTLC = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Msg/ClaimHTLC',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.MsgClaimHTLC,
  proto.irismod.htlc.MsgClaimHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.MsgClaimHTLC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgClaimHTLCResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.htlc.MsgClaimHTLC,
 *   !proto.irismod.htlc.MsgClaimHTLCResponse>}
 */
const methodInfo_Msg_ClaimHTLC = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.htlc.MsgClaimHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.MsgClaimHTLC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgClaimHTLCResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.MsgClaimHTLC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.htlc.MsgClaimHTLCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.MsgClaimHTLCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.MsgClient.prototype.claimHTLC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Msg/ClaimHTLC',
      request,
      metadata || {},
      methodDescriptor_Msg_ClaimHTLC,
      callback);
};


/**
 * @param {!proto.irismod.htlc.MsgClaimHTLC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.MsgClaimHTLCResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.MsgPromiseClient.prototype.claimHTLC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Msg/ClaimHTLC',
      request,
      metadata || {},
      methodDescriptor_Msg_ClaimHTLC);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.MsgUpdateParams,
 *   !proto.irismod.htlc.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.MsgUpdateParams,
  proto.irismod.htlc.MsgUpdateParamsResponse,
  /**
   * @param {!proto.irismod.htlc.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.htlc.MsgUpdateParams,
 *   !proto.irismod.htlc.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.htlc.MsgUpdateParamsResponse,
  /**
   * @param {!proto.irismod.htlc.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.htlc.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.irismod.htlc.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


module.exports = proto.irismod.htlc;

