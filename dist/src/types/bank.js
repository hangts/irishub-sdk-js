"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSend = exports.MsgMultiSend = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("./types");
var _helper = require("../helper");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Msg for sending coins
 *
 * @hidden
 */
var MsgSend = exports.MsgSend = /*#__PURE__*/function (_Msg) {
  function MsgSend(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgSend);
    _this = _callSuper(this, MsgSend, [_types.TxType.MsgSend]);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgSend, _Msg);
  return (0, _createClass2["default"])(MsgSend, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setFromAddress(this.value.from_address);
      msg.setToAddress(this.value.to_address);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.from_address) {
        throw new _errors.SdkError("from_address is empty");
      }
      if (!this.value.to_address) {
        throw new _errors.SdkError("to_address is empty");
      }
      if (!(this.value.amount && this.value.amount.length)) {
        throw new _errors.SdkError("amount is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.bank_tx_pb.MsgSend;
    }
  }]);
}(_types.Msg);
/**
 * Msg for sending coins
 *
 * @hidden
 */
var MsgMultiSend = exports.MsgMultiSend = /*#__PURE__*/function (_Msg2) {
  function MsgMultiSend(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgMultiSend);
    _this2 = _callSuper(this, MsgMultiSend, [_types.TxType.MsgMultiSend]);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgMultiSend, _Msg2);
  return (0, _createClass2["default"])(MsgMultiSend, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      this.value.inputs.forEach(function (item) {
        var input = new pbs.bank_tx_pb.Input();
        input.setAddress(item.address);
        item.coins.forEach(function (coin) {
          input.addCoins(_helper.TxModelCreator.createCoinModel(coin.denom, coin.amount));
        });
        msg.addInputs(input);
      });
      this.value.outputs.forEach(function (item) {
        var output = new pbs.bank_tx_pb.Output();
        output.setAddress(item.address);
        item.coins.forEach(function (coin) {
          output.addCoins(_helper.TxModelCreator.createCoinModel(coin.denom, coin.amount));
        });
        msg.addOutputs(output);
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.inputs) {
        throw new _errors.SdkError("inputs is empty");
      }
      if (!this.value.outputs) {
        throw new _errors.SdkError("outputs is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.bank_tx_pb.MsgMultiSend;
    }
  }]);
}(_types.Msg);
/** Base input and output struct */
/** Input implemention of [[InputOutput]] */
/** Output implemention of [[InputOutput]] */