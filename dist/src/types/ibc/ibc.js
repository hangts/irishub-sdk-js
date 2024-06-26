"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTransfer = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("../types");
var _helper = require("../../helper");
var pbs = _interopRequireWildcard(require("../proto"));
var _errors = require("../../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for Create ibc transfer Tx 
 */
/**
 * Msg for ibc Transfer
 *
 * @hidden
 */
var MsgTransfer = exports.MsgTransfer = /*#__PURE__*/function (_Msg) {
  function MsgTransfer(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgTransfer);
    _this = _callSuper(this, MsgTransfer, [_types.TxType.MsgTransfer]);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgTransfer, _Msg);
  return (0, _createClass2["default"])(MsgTransfer, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setSourcePort(this.value.source_port);
      msg.setSourceChannel(this.value.source_channel);
      msg.setToken(_helper.TxModelCreator.createCoinModel(this.value.token.denom, this.value.token.amount));
      msg.setSender(this.value.sender);
      msg.setReceiver(this.value.receiver);
      if (this.value.timeout_height && this.value.timeout_height.revision_number && this.value.timeout_height.revision_height) {
        var height = new pbs.ibc_core_client_pb.Height();
        height.setRevisionNumber(this.value.timeout_height.revision_number);
        height.setRevisionHeight(this.value.timeout_height.revision_height);
        msg.setTimeoutHeight(height);
      }
      if (this.value.timeout_timestamp) {
        msg.setTimeoutTimestamp(this.value.timeout_timestamp);
      }
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.source_port) {
        throw new _errors.SdkError("source_port is empty");
      }
      if (!this.value.source_channel) {
        throw new _errors.SdkError("source_channel is empty");
      }
      if (!this.value.token) {
        throw new _errors.SdkError("token is empty");
      }
      if (!this.value.receiver) {
        throw new _errors.SdkError("receiver is empty");
      }
      if (!this.value.timeout_height && !this.value.timeout_timestamp) {
        throw new _errors.SdkError("there must be one timeout_height or timeout_timestamp");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.ibc_transfer_query_pb.MsgTransfer;
    }
  }]);
}(_types.Msg);