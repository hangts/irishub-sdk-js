"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gov = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var types = _interopRequireWildcard(require("../types"));
var _helper = require("../helper");
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
var Gov = exports.Gov = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Gov(client) {
    (0, _classCallCheck2["default"])(this, Gov);
    this.client = client;
  }

  /**
   * submit Proposal
   * @param proposal_id 
   * @param option
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  return (0, _createClass2["default"])(Gov, [{
    key: "submitProposal",
    value: (function () {
      var _submitProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(content, initial_deposit, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              from = this.client.keys.show(baseTx.from);
              msgs = [{
                type: types.TxType.MsgSubmitProposal,
                value: {
                  content: content,
                  initial_deposit: initial_deposit,
                  proposer: from
                }
              }];
              return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function submitProposal(_x, _x2, _x3) {
        return _submitProposal.apply(this, arguments);
      }
      return submitProposal;
    }()
    /**
     * vote
     * @param proposal_id 
     * @param option
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    )
  }, {
    key: "vote",
    value: (function () {
      var _vote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(proposal_id, option, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              from = this.client.keys.show(baseTx.from);
              msgs = [{
                type: types.TxType.MsgVote,
                value: {
                  proposal_id: proposal_id,
                  voter: from,
                  option: option
                }
              }];
              return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function vote(_x4, _x5, _x6) {
        return _vote.apply(this, arguments);
      }
      return vote;
    }()
    /**
     * voteWeighted 
     * @param proposal_id 
     * @param options Note: Due to Chain precision issues, option.weight needs to be multiplied by 10^18, such as 0.3 => 0.3 * 10**18 = 3000000000000000000
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v3.0.1
     */
    )
  }, {
    key: "voteWeighted",
    value: (function () {
      var _voteWeighted = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(proposal_id, options, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              from = this.client.keys.show(baseTx.from);
              msgs = [{
                type: types.TxType.MsgVoteWeighted,
                value: {
                  proposal_id: proposal_id,
                  voter: from,
                  options: options
                }
              }];
              return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function voteWeighted(_x7, _x8, _x9) {
        return _voteWeighted.apply(this, arguments);
      }
      return voteWeighted;
    }()
    /**
     * deposit
     * @param proposal_id 
     * @param amount
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    )
  }, {
    key: "deposit",
    value: (function () {
      var _deposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(proposal_id, amount, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              from = this.client.keys.show(baseTx.from);
              msgs = [{
                type: types.TxType.MsgDeposit,
                value: {
                  proposal_id: proposal_id,
                  depositor: from,
                  amount: amount
                }
              }];
              return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function deposit(_x10, _x11, _x12) {
        return _deposit.apply(this, arguments);
      }
      return deposit;
    }()
    /**
     * Proposal queries proposal details based on ProposalID.
     * @param proposal_id defines the unique id of the proposal.
     */
    )
  }, {
    key: "queryProposal",
    value: function queryProposal(proposal_id) {
      var _this = this;
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      var request = new types.gov_query_pb.QueryProposalRequest();
      request.setProposalId(proposal_id);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposal', request, types.gov_query_pb.QueryProposalResponse).then(function (res) {
        if (res && res.proposal && res.proposal.content && res.proposal.content.typeUrl && res.proposal.content.value) {
          res.proposal.content = _this.client.protobuf.unpackProposalContent(res.proposal.content);
        }
        return res;
      });
    }

    /**
     * Proposals queries all proposals based on given status.
     * @param option {
        proposal_status?:types.ProposalStatus,
        voter?:string,
        depositor?:string
      }
     */
  }, {
    key: "queryProposals",
    value: function queryProposals(option, pagination) {
      var _this2 = this;
      var request = new types.gov_query_pb.QueryProposalsRequest();
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      if (typeof option.proposal_status != 'undefined') {
        request.setProposalStatus(option.proposal_status);
      }
      if (option.voter) {
        request.setVoter(option.voter);
      }
      if (option.depositor) {
        request.setDepositor(option.depositor);
      }
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposals', request, types.gov_query_pb.QueryProposalsResponse).then(function (res) {
        if (res && res.proposalsList) {
          res.proposalsList = res.proposalsList.map(function (item) {
            if (item.content && item.content.typeUrl && item.content.value) {
              item.content = _this2.client.protobuf.unpackProposalContent(item.content);
            }
            return item;
          });
        }
        return res;
      });
    }

    /**
     * Vote queries voted information based on proposalID, voterAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param voter defines the oter address for the proposals.
     */
  }, {
    key: "queryVote",
    value: function queryVote(proposal_id, voter) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      if (!voter) {
        throw new _errors.SdkError("voter can ont be empty");
      }
      var request = new types.gov_query_pb.QueryVoteRequest();
      request.setProposalId(proposal_id);
      request.setVoter(voter);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Vote', request, types.gov_query_pb.QueryVoteResponse);
    }

    /**
     * Votes queries votes of a given proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
  }, {
    key: "queryVotes",
    value: function queryVotes(proposal_id, pagination) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      var request = new types.gov_query_pb.QueryVotesRequest();
      request.setProposalId(proposal_id);
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Votes', request, types.gov_query_pb.QueryVotesResponse);
    }

    /**
     * Params queries all parameters of the gov module.
     * @param params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
     */
  }, {
    key: "queryParams",
    value: function queryParams(params_type) {
      if (!params_type) {
        throw new _errors.SdkError("params_type can be one of 'voting', 'tallying' or 'deposit'");
      }
      var request = new types.gov_query_pb.QueryParamsRequest();
      request.setParamsType(params_type);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Params', request, types.gov_query_pb.QueryParamsResponse);
    }

    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param depositor defines the deposit addresses from the proposals.
     */
  }, {
    key: "queryDeposit",
    value: function queryDeposit(proposal_id, depositor) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      if (!depositor) {
        throw new _errors.SdkError("depositor can ont be empty");
      }
      var request = new types.gov_query_pb.QueryDepositRequest();
      request.setProposalId(proposal_id);
      request.setDepositor(depositor);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposit', request, types.gov_query_pb.QueryDepositResponse);
    }

    /**
     * Deposits queries all deposits of a single proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
  }, {
    key: "queryDeposits",
    value: function queryDeposits(proposal_id, pagination) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      var request = new types.gov_query_pb.QueryDepositsRequest();
      request.setProposalId(proposal_id);
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposits', request, types.gov_query_pb.QueryDepositsResponse);
    }

    /**
     * TallyResult queries the tally of a proposal vote.
     * @param proposal_id defines the unique id of the proposal.
     */
  }, {
    key: "queryTallyResult",
    value: function queryTallyResult(proposal_id) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }
      var request = new types.gov_query_pb.QueryTallyResultRequest();
      request.setProposalId(proposal_id);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/TallyResult', request, types.gov_query_pb.QueryTallyResultResponse);
    }
  }]);
}();