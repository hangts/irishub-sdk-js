"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Protobuf = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var types = _interopRequireWildcard(require("../types"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
var Protobuf = exports.Protobuf = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Protobuf(client) {
    (0, _classCallCheck2["default"])(this, Protobuf);
    this.client = client;
  }

  /**
   * deserialize Tx
   * @param  {[type]} Tx:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} Tx object                        
   */
  return (0, _createClass2["default"])(Protobuf, [{
    key: "deserializeTx",
    value: function deserializeTx(tx, returnProtobufModel) {
      var _this = this;
      if (!tx) {
        throw new _errors.SdkError('tx can not be empty');
      }
      if (returnProtobufModel) {
        return types.tx_tx_pb.Tx.deserializeBinary(tx);
      } else {
        var txObj = types.tx_tx_pb.Tx.deserializeBinary(tx).toObject();
        if (txObj.body && txObj.body.messagesList) {
          txObj.body.messagesList = txObj.body.messagesList.map(function (msg) {
            return _this.unpackMsg(msg);
          });
        }
        return txObj;
      }
    }

    /**
     * Unpack protobuffer tx msg
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @param  {[type]} msg tx msg of proto any type
     * @return {[type]} message object 
     */
  }, {
    key: "unpackMsg",
    value: function unpackMsg(msg, returnProtobufModel) {
      if (!msg) {
        throw new _errors.SdkError('message can not be empty');
      }
      var messageModelClass;
      var typeUrl = msg.typeUrl.replace(/^\//, '');
      switch (typeUrl) {
        //bank
        case types.TxType.MsgSend:
          {
            messageModelClass = types.MsgSend.getModelClass();
            break;
          }
        case types.TxType.MsgMultiSend:
          {
            messageModelClass = types.MsgMultiSend.getModelClass();
            break;
          }
        //staking
        case types.TxType.MsgDelegate:
          {
            messageModelClass = types.MsgDelegate.getModelClass();
            break;
          }
        case types.TxType.MsgUndelegate:
          {
            messageModelClass = types.MsgUndelegate.getModelClass();
            break;
          }
        case types.TxType.MsgBeginRedelegate:
          {
            messageModelClass = types.MsgRedelegate.getModelClass();
            break;
          }
        //distribution
        case types.TxType.MsgWithdrawDelegatorReward:
          {
            messageModelClass = types.MsgWithdrawDelegatorReward.getModelClass();
            break;
          }
        case types.TxType.MsgSetWithdrawAddress:
          {
            messageModelClass = types.MsgSetWithdrawAddress.getModelClass();
            break;
          }
        case types.TxType.MsgWithdrawValidatorCommission:
          {
            messageModelClass = types.MsgWithdrawValidatorCommission.getModelClass();
            break;
          }
        case types.TxType.MsgFundCommunityPool:
          {
            messageModelClass = types.MsgFundCommunityPool.getModelClass();
            break;
          }
        //token
        case types.TxType.MsgIssueToken:
          {
            messageModelClass = types.MsgIssueToken.getModelClass();
            break;
          }
        case types.TxType.MsgEditToken:
          {
            messageModelClass = types.MsgEditToken.getModelClass();
            break;
          }
        case types.TxType.MsgMintToken:
          {
            messageModelClass = types.MsgMintToken.getModelClass();
            break;
          }
        case types.TxType.MsgBurnToken:
          {
            messageModelClass = types.MsgBurnToken.getModelClass();
            break;
          }
        case types.TxType.MsgTransferTokenOwner:
          {
            messageModelClass = types.MsgTransferTokenOwner.getModelClass();
            break;
          }
        case types.TxType.MsgSwapFeeToken:
          {
            messageModelClass = types.MsgSwapFeeToken.getModelClass();
            break;
          }
        //coinswap
        case types.TxType.MsgAddLiquidity:
          {
            messageModelClass = types.MsgAddLiquidity.getModelClass();
            break;
          }
        case types.TxType.MsgRemoveLiquidity:
          {
            messageModelClass = types.MsgRemoveLiquidity.getModelClass();
            break;
          }
        case types.TxType.MsgSwapOrder:
          {
            messageModelClass = types.MsgSwapOrder.getModelClass();
            break;
          }
        //farm
        case types.TxType.MsgStake:
          {
            messageModelClass = types.MsgStake.getModelClass();
            break;
          }
        case types.TxType.MsgUnstake:
          {
            messageModelClass = types.MsgUnstake.getModelClass();
            break;
          }
        case types.TxType.MsgHarvest:
          {
            messageModelClass = types.MsgHarvest.getModelClass();
            break;
          }
        //nft
        case types.TxType.MsgIssueDenom:
          {
            messageModelClass = types.MsgIssueDenom.getModelClass();
            break;
          }
        case types.TxType.MsgMintNFT:
          {
            messageModelClass = types.MsgMintNFT.getModelClass();
            break;
          }
        case types.TxType.MsgEditNFT:
          {
            messageModelClass = types.MsgEditNFT.getModelClass();
            break;
          }
        case types.TxType.MsgTransferNFT:
          {
            messageModelClass = types.MsgTransferNFT.getModelClass();
            break;
          }
        case types.TxType.MsgBurnNFT:
          {
            messageModelClass = types.MsgBurnNFT.getModelClass();
            break;
          }
        //gov
        case types.TxType.MsgSubmitProposal:
          {
            messageModelClass = types.MsgSubmitProposal.getModelClass();
            break;
          }
        case types.TxType.MsgVote:
          {
            messageModelClass = types.MsgVote.getModelClass();
            break;
          }
        case types.TxType.MsgVoteWeighted:
          {
            messageModelClass = types.MsgVoteWeighted.getModelClass();
            break;
          }
        case types.TxType.MsgDeposit:
          {
            messageModelClass = types.MsgDeposit.getModelClass();
            break;
          }
        //htlc
        case types.TxType.MsgCreateHTLC:
          {
            messageModelClass = types.MsgCreateHTLC.getModelClass();
            break;
          }
        case types.TxType.MsgClaimHTLC:
          {
            messageModelClass = types.MsgClaimHTLC.getModelClass();
            break;
          }
        //ibc
        case types.TxType.MsgTransfer:
          {
            messageModelClass = types.MsgTransfer.getModelClass();
            break;
          }
        case types.TxType.MsgIbcNftTransfer:
          {
            messageModelClass = types.MsgIbcNftTransfer.getModelClass();
            break;
          }
        default:
          {
            throw new _errors.SdkError("not exist tx type", _errors.CODES.InvalidType);
          }
      }
      if (messageModelClass && messageModelClass.deserializeBinary) {
        var messageObj = messageModelClass.deserializeBinary(msg.value);
        if (!returnProtobufModel) {
          messageObj = messageObj.toObject();
          messageObj.type = typeUrl;
        }
        if (typeUrl == types.TxType.MsgSubmitProposal && messageObj.content && messageObj.content.typeUrl && messageObj.content.value) {
          messageObj.content = this.unpackProposalContent(messageObj.content);
        }
        return messageObj;
      } else {
        return null;
      }
    }

    /**
     * Unpack protobuffer Proposal Content
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @param  {[type]} content proposal Content of proto any type
     * @return {[type]} message object 
     */
  }, {
    key: "unpackProposalContent",
    value: function unpackProposalContent(content, returnProtobufModel) {
      if (!content) {
        return null;
      }
      var contentModelClass;
      var typeUrl = content.typeUrl.replace(/^\//, '');
      switch (typeUrl) {
        case types.ProposalType.Text_Proposal:
          {
            contentModelClass = types.gov_gov_pb.TextProposal;
            break;
          }
        case types.ProposalType.Community_Pool_Spend_Proposal:
          {
            contentModelClass = types.distribution_distribution_pb.CommunityPoolSpendProposal;
            break;
          }
        case types.ProposalType.Parameter_Change_Proposal:
          {
            contentModelClass = types.params_params_pb.ParameterChangeProposal;
            break;
          }
        case types.ProposalType.Software_Upgrade_Proposal:
          {
            contentModelClass = types.upgrade_upgrade_pb.SoftwareUpgradeProposal;
            break;
          }
        case types.ProposalType.Cancel_Software_Upgrade_Proposal:
          {
            contentModelClass = types.upgrade_upgrade_pb.CancelSoftwareUpgradeProposal;
            break;
          }
      }
      if (contentModelClass && contentModelClass.deserializeBinary) {
        var contentObj = contentModelClass.deserializeBinary(content.value);
        if (!returnProtobufModel && contentObj && contentObj.toObject) {
          contentObj = contentObj.toObject();
          contentObj.type = typeUrl;
        }
        return contentObj;
      } else {
        return null;
      }
    }

    /**
     * deserialize TxBody
     * @param  {[type]} TxBody:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txBody object                        
     */
  }, {
    key: "deserializeTxBody",
    value: function deserializeTxBody(txBody, returnProtobufModel) {
      if (!txBody) {
        throw new _errors.SdkError('txBody can not be empty');
      }
      if (returnProtobufModel) {
        return types.tx_tx_pb.TxBody.deserializeBinary(txBody);
      } else {
        return types.tx_tx_pb.TxBody.deserializeBinary(txBody).toObject();
      }
    }

    /**
     * deserialize AuthInfo
     * @param  {[type]} AuthInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} authInfo object                        
     */
  }, {
    key: "deserializeAuthInfo",
    value: function deserializeAuthInfo(authInfo, returnProtobufModel) {
      if (!authInfo) {
        throw new _errors.SdkError('authInfo can not be empty');
      }
      if (returnProtobufModel) {
        return types.tx_tx_pb.AuthInfo.deserializeBinary(authInfo);
      } else {
        return types.tx_tx_pb.AuthInfo.deserializeBinary(authInfo).toObject();
      }
    }

    /**
     * deserialize SignDoc
     * @param  {[type]} signDoc:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} signDoc object                        
     */
  }, {
    key: "deserializeSignDoc",
    value: function deserializeSignDoc(signDoc, returnProtobufModel) {
      if (!signDoc) {
        throw new _errors.SdkError('signDoc can not be empty');
      }
      if (returnProtobufModel) {
        return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc);
      } else {
        return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc).toObject();
      }
    }

    /**
     * deserialize txRaw
     * @param  {[type]} txRaw:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txRaw object                        
     */
  }, {
    key: "deserializeTxRaw",
    value: function deserializeTxRaw(txRaw, returnProtobufModel) {
      if (!txRaw) {
        throw new _errors.SdkError('txRaw can not be empty');
      }
      if (returnProtobufModel) {
        return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw);
      } else {
        return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw).toObject();
      }
    }

    /**
     * deserialize Signing Info
     * @param  {[type]} signingInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Signing Info object                        
     */
  }, {
    key: "deserializeSigningInfo",
    value: function deserializeSigningInfo(signingInfo, returnProtobufModel) {
      if (!signingInfo) {
        throw new _errors.SdkError('signing info can not be empty');
      }
      if (returnProtobufModel) {
        return types.slashing_slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo);
      } else {
        return types.slashing_slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo).toObject();
      }
    }

    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object                        
     */
  }, {
    key: "deserializeAccount",
    value: function deserializeAccount(account, returnProtobufModel) {
      if (!account) {
        throw new _errors.SdkError('account can not be empty');
      }
      var result = _objectSpread({}, account);
      switch (account.typeUrl) {
        case '/cosmos.auth.v1beta1.BaseAccount':
          result.value = types.auth_auth_pb.BaseAccount.deserializeBinary(account.value);
          break;
        case '/cosmos.auth.v1beta1.ModuleAccount':
          result.value = types.auth_auth_pb.ModuleAccount.deserializeBinary(account.value);
          break;
      }
      if (!returnProtobufModel && result.value && result.value.toObject) {
        var _result$value, _result$value2, _result$value4;
        result.value = result.value.toObject();
        if ((_result$value = result.value) !== null && _result$value !== void 0 && _result$value.baseAccount && (_result$value2 = result.value) !== null && _result$value2 !== void 0 && (_result$value2 = _result$value2.baseAccount) !== null && _result$value2 !== void 0 && _result$value2.pubKey) {
          var _result$value3;
          result.value.baseAccount.pubKey = this.deserializePubkey((_result$value3 = result.value) === null || _result$value3 === void 0 || (_result$value3 = _result$value3.baseAccount) === null || _result$value3 === void 0 ? void 0 : _result$value3.pubKey);
        } else if ((_result$value4 = result.value) !== null && _result$value4 !== void 0 && _result$value4.pubKey) {
          var _result$value5;
          result.value.pubKey = this.deserializePubkey((_result$value5 = result.value) === null || _result$value5 === void 0 ? void 0 : _result$value5.pubKey);
        }
      }
      return result;
    }

    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object                        
     */
  }, {
    key: "deserializePubkey",
    value: function deserializePubkey(pubKey, returnProtobufModel) {
      if (!pubKey) {
        throw new _errors.SdkError('pubKey can not be empty');
      }
      var result = _objectSpread({}, pubKey);
      switch (pubKey.typeUrl) {
        case '/cosmos.crypto.ed25519.PubKey':
          result.value = types.crypto_ed25519_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;
        case '/cosmos.crypto.multisig.LegacyAminoPubKey':
          result.value = types.crypto_multisig_keys_pb.LegacyAminoPubKey.deserializeBinary(pubKey.value);
          break;
        case '/cosmos.crypto.secp256k1.PubKey':
          result.value = types.crypto_secp256k1_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;
        case '/cosmos.crypto.secp256r1.PubKey':
          result.value = types.crypto_secp256r1_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;
        case '/cosmos.crypto.sm2.PubKey':
          result.value = types.crypto_sm2_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;
      }
      if (!returnProtobufModel && result.value && result.value.toObject) {
        result.value = result.value.toObject();
      }
      return result;
    }

    /**
     * deserialize Global Account Number
     * @param  {[type]} GlobalAccountNumber:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Global Account Number object                        
     */
  }, {
    key: "deserializeGlobalAccountNumber",
    value: function deserializeGlobalAccountNumber(GlobalAccountNumber, returnProtobufModel) {
      if (!GlobalAccountNumber) {
        throw new _errors.SdkError('Global Account Number can not be empty');
      }
      if (returnProtobufModel) {
        return types.custom_base_pb.MsgGlobalAccountNumber.deserializeBinary(GlobalAccountNumber);
      } else {
        return types.custom_base_pb.MsgGlobalAccountNumber.deserializeBinary(GlobalAccountNumber).toObject();
      }
    }
  }]);
}();