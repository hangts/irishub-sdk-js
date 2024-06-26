import {Client} from '../client';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
import {EventQueryBuilder, EventKey, EventAction} from '../types';
import {Utils, Crypto} from '../utils';
import * as is from 'is_js';
import { ModelCreator } from "../helper";

/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
export class Staking {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * performing the status transition for a validator from bonded to unbonding
   * @param baseTx 
   */
  unbondValidator(baseTx: types.BaseTx): Promise<{}> {
    const validator_address = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgUnbondValidator,
        value: {
          validator_address
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * MsgTokenizeShares tokenizes a delegation
   * 
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be tokenized to the validator
   * @param tokenizedShareOwner tokenized share owner
   * @param baseTx 
   * @returns
   * @since v3.4.0
   */
  tokenizeShares(
    validatorAddr: string,
    amount: types.Coin,
    tokenizedShareOwner: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgTokenizeShares,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
          amount,
          tokenized_share_owner: tokenizedShareOwner,
        }
      },
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * MsgRedeemTokensForShares redeems a tokenized share back into a native delegation
   * 
   * @param amount amount to redeemes tokenized share
   * @param baseTx 
   * @returns 
   * @since v3.4.0
   */
  redeemTokensForShares(
    amount: types.Coin,
    baseTx: types.BaseTx,
  ): Promise<types.TxResult> {
    const dlegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgRedeemTokensForShares,
        value: {
          delegator_address: dlegatorAddr,
          amount,
        }
      },
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * transfer a tokenize share record
   * 
   * @param tokenizeShareRecordId tokenize share record id
   * @param newOwner Bech32 new owner address
   * @param baseTx
   * @returns
   * @since v3.4.0
   */
  transferTokenizeShareRecord(
    tokenizeShareRecordId: number,
    newOwner: string,
    baseTx: types.BaseTx,
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgTransferTokenizeShareRecord,
        value: {
          tokenize_share_record_id: tokenizeShareRecordId,
          sender,
          new_owner: newOwner,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * prevents the tokenization of shares for a given address
   * 
   * @param baseTx 
   * @returns
   * @since v3.4.0
   */
  disableTokenizeShares(
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgDisableTokenizeShares,
        value: {
          delegator_address: delegatorAddr,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * re-enables tokenization of shares for a given address
   * 
   * @param baseTx 
   * @returns
   * @since v3.4.0
   */
  enableTokenizeShares(
    baseTx: types.BaseTx,
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgEnableTokenizeShares,
        value: {
          delegator_address: delegatorAddr,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * performing validator self-bond of delegated coins from a delegator to a validator
   * 
   * @param validatorAddr Bech32 validator address
   * @param baseTx 
   * @returns 
   */
  validatorBond(
    validatorAddr: string,
    baseTx: types.BaseTx,
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgValidatorBond,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Delegate liquid tokens to an validator
   *
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be delegated to the validator
   * @param baseTx
   * @returns
   * @since v0.17
   */
  delegate(
    validatorAddr: string,
    amount: types.Coin,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgDelegate,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
          amount
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Undelegate from a validator
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be undelegated from the validator
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async undelegate(
    validatorAddr: string,
    amount: types.Coin,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgUndelegate,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
          amount
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Redelegate illiquid tokens from one validator to another
   * @param validatorSrcAddr Bech32 source validator address
   * @param validatorDstAddr Bech32 destination validator address
   * @param amount Amount to be redelegated
   * @param baseTx
   * @since v0.17
   */
  async redelegate(
    validatorSrcAddr: string,
    validatorDstAddr: string,
    amount: types.Coin,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgBeginRedelegate,
        value: {
          delegator_address: delegatorAddr,
          validator_src_address: validatorSrcAddr,
          validator_dst_address: validatorDstAddr,
          amount
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query a delegation based on delegator address and validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryDelegation(
    delegator_addr: string,
    validator_addr: string
  ): Promise<types.Delegation> {
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryDelegationRequest()
      .setValidatorAddr(validator_addr)
      .setDelegatorAddr(delegator_addr);

    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Delegation',
      request,
      types.staking_query_pb.QueryDelegationResponse
    );
  }

  /**
   * Query all delegations made from one delegator
   *
   * @param pagination page info
   * @param delegator_addr Bech32 delegator address
   * @returns
   * @since
   */
  queryDelegations(
    query: {
      pagination?:types.Pagination,
      delegator_addr: string;
    }
  ): Promise<types.Delegation[]> {
    const {pagination, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorDelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
      request,
      types.staking_query_pb.QueryDelegatorDelegationsResponse
    );
  }

  /**
   * Query an unbonding-delegation record based on delegator and validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryUnbondingDelegation(
    delegator_addr: string,
    validator_addr: string
  ): Promise<types.UnbondingDelegation> {
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryUnbondingDelegationRequest()
      .setValidatorAddr(validator_addr)
      .setDelegatorAddr(delegator_addr);

    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
      request,
      types.staking_query_pb.QueryUnbondingDelegationResponse
    );
  }

  /**
   * Query all unbonding-delegations records for one delegator
   *
   * @param pagination page info
   * @param delegator_addr Bech32 delegator address
   * @returns
   * @since
   */
  queryDelegatorUnbondingDelegations(
    query: {
      pagination?:types.Pagination,
      delegator_addr: string;
    }
  ): Promise<types.UnbondingDelegation[]> {
    const {pagination, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorUnbondingDelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));

    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
      request,
      types.staking_query_pb.QueryDelegatorUnbondingDelegationsResponse
    );
  }

  /**
   * Query a redelegation record based on delegator and a source and destination validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param src_validator_addr (optional) Bech32 source validator address
   * @param dst_validator_addr (optional) Bech32 destination validator address
   * @returns
   * @since
   */
  queryRedelegation(
    query: {
      pagination?:types.Pagination,
      delegator_addr: string;
      src_validator_addr?: string;
      dst_validator_addr?:string;
    }
  ): Promise<types.Redelegation[]> {
    const {pagination, delegator_addr,src_validator_addr, dst_validator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryRedelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));
    if (is.not.undefined(src_validator_addr)) {
      request.setSrcValidatorAddr(src_validator_addr)
    }
    if (is.not.undefined(dst_validator_addr)) {
      request.setDstValidatorAddr(dst_validator_addr);
    }
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Redelegations',
      request,
      types.staking_query_pb.QueryRedelegationsResponse
    );
  }

  /**
   * Query all validators info for given delegator
   *
   * @param delegator_addr Bech32 delegator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryDelegatorValidators(
    query: {
      pagination?:types.Pagination,
      delegator_addr: string
    }
  ): Promise<object> {
    const {pagination, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorValidatorsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorValidators',
      request,
      types.staking_query_pb.QueryDelegatorValidatorsResponse
    );
  }

  /**
   * Query validator info for given delegator validator
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryDelegatorValidator(
    query: {
      delegator_addr: string;
      validator_addr: string;
    }
  ): Promise<object> {
    const { delegator_addr, validator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryDelegatorValidatorRequest()
      .setDelegatorAddr(delegator_addr)
      .setValidatorAddr(validator_addr);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorValidator',
      request,
      types.staking_query_pb.QueryDelegatorValidatorResponse
    );
  }

  /**
   * Query the historical info for given height.
   *
   * @param height defines at which height to query the historical info
   * @returns
   * @since
   */
  queryHistoricalInfo(
    query: {
      height: number;
    }
  ): Promise<object> {
    const { height} = query;
    if (is.undefined(height)) {
      throw new SdkError('block height can not be empty');
    }
    const request = new types.staking_query_pb.QueryHistoricalInfoRequest()
      .setHeight(height);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/HistoricalInfo',
      request,
      types.staking_query_pb.QueryHistoricalInfoResponse
    );
  }

  /**
   * Query all delegations to one validator
   *
   * @param validator_addr Bech32 validator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryValidatorDelegations(
    query: {
      pagination?:types.Pagination,
      validator_addr: string;
    }
  ): Promise<types.Delegation[]> {
    const {pagination, validator_addr} = query;
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorDelegationsRequest()
      .setValidatorAddr(validator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
      request,
      types.staking_query_pb.QueryValidatorDelegationsResponse
    );
  }

  /**
   * Query all unbonding delegatations from a validator
   *
   * @param validator_addr Bech32 validator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryValidatorUnbondingDelegations(
    query: {
      pagination?:types.Pagination,
      validator_addr: string;
    }
  ): Promise<types.UnbondingDelegation[]> {
    const {pagination, validator_addr} = query;
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorUnbondingDelegationsRequest()
      .setValidatorAddr(validator_addr)
      .setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
      request,
      types.staking_query_pb.QueryValidatorUnbondingDelegationsResponse
    );
  }

  /**
   * Query a validator
   *
   * @param address Bech32 validator address
   * @returns
   * @since
   */
  queryValidator(address: string): Promise<types.Validator> {
    if (is.undefined(address)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorRequest().setValidatorAddr(address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Validator',
      request,
      types.staking_query_pb.QueryValidatorResponse
    ).then(res=>{
      let result = {...res};
      if (res.validator && res.validator.consensusPubkey && res.validator.consensusPubkey.value) {
        result.validator.consensusPubkey = this.client.protobuf.deserializePubkey(res.validator.consensusPubkey);
      }
      return result;
    });
  }

  /**
   * Query for all validators
   * @param pagination page info
   * @param status validator status
   * @returns
   * @since
   */
  queryValidators(
    query: {
      pagination?:types.Pagination,
      status?: string;
    }
  ): Promise<types.Validator[]> {
    const {pagination, status} = query;
    const request = new types.staking_query_pb.QueryValidatorsRequest()
      .setPagination(ModelCreator.createPaginationModel(pagination));
    if (is.not.undefined(status)) {
      request.setStatus(status);
    }
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Validators',
      request,
      types.staking_query_pb.QueryValidatorsResponse
    ).then(res=>{
      let result:any = {...res};
      if (res.validatorsList && res.validatorsList.length) {
          result.validatorsList = res.validatorsList.map((val:any)=>{
            if (val.consensusPubkey && val.consensusPubkey.value) {
              val.consensusPubkey = this.client.protobuf.deserializePubkey(val.consensusPubkey);
            }
            return val;
          });
      }
      return result;
    });
  }

  /**
   * Query for individual tokenize share record information by share by id
   * 
   * @param id record id
   * @returns 
   * @since v3.4.0
   */
  queryTokenizeShareRecordById(id: number): Promise<types.TokenizeShareRecord> {
    if (is.undefined(id)) {
      throw new SdkError('record id can not be empty');
    }
    const request = new types.staking_query_pb.QueryTokenizeShareRecordByIdRequest()
      .setId(id);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordById',
      request,
      types.staking_query_pb.QueryTokenizeShareRecordByIdResponse
    );
  }

  /**
   * Query for individual tokenize share record information by share denom
   * 
   * @param denom denom string
   * @returns 
   * @since v3.4.0
   */
  queryTokenizeShareRecordByDenom(denom: string): Promise<types.TokenizeShareRecord> {
    if (is.undefined(denom)) {
      throw new SdkError('denom can not be empty');
    }
    const request = new types.staking_query_pb.QueryTokenizeShareRecordByDenomRequest()
      .setDenom(denom);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom',
      request,
      types.staking_query_pb.QueryTokenizeShareRecordByDenomResponse
    );
  }

  /**
   * Query tokenize share records by address
   * 
   * @param owner Bech32 owner address
   * @returns
   * @since v3.4.0
   */
  queryTokenizeShareRecordsOwned(owner: string): Promise<types.TokenizeShareRecord[]> {
    if (is.undefined(owner)) {
      throw new SdkError('owner can not be empty');
    }
    const request = new types.staking_query_pb.QueryTokenizeShareRecordsOwnedRequest()
      .setOwner(owner);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned',
      request,
      types.staking_query_pb.QueryTokenizeShareRecordsOwnedResponse
    );
  }

  /**
   * Query for all tokenize share records
   * 
   * @param pagination page info
   * @returns
   * @since v3.4.0
   */
  queryAllTokenizeShareRecords(pagination: types.Pagination): Promise<{
    records: types.TokenizeShareRecord[],
    pagination: types.Pagination,
  }> {
    const request = new types.staking_query_pb.QueryAllTokenizeShareRecordsRequest()
      .setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/AllTokenizeShareRecords',
      request,
      types.staking_query_pb.QueryAllTokenizeShareRecordsResponse
    );
  }

  /**
   * Query for last tokenize share record id
   * 
   * @returns
   * @since v3.4.0
   */
  queryLastTokenizeShareRecordId(): Promise<{id: number}> {
    const request = new types.staking_query_pb.QueryLastTokenizeShareRecordIdRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId',
      request,
      types.staking_query_pb.QueryLastTokenizeShareRecordIdResponse
    );
  }

  /**
   * Query for total tokenized staked assets
   * 
   * @returns
   * @since v3.4.0
   */
  queryTotalTokenizeSharedAssets(): Promise<{value: types.Coin}> {
    const request = new types.staking_query_pb.QueryTotalTokenizeSharedAssetsRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets',
      request,
      types.staking_query_pb.QueryTotalTokenizeSharedAssetsResponse
    );
  }

  /**
   * Query for total liquid staked (including tokenized shares or owned by an liquid staking provider)
   * 
   * @returns
   * @since v3.4.0
   */
  queryTotalLiquidStaked(): Promise<{tokens: string}> {
    const request = new types.staking_query_pb.QueryTotalLiquidStaked();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TotalLiquidStaked',
      request,
      types.staking_query_pb.QueryTotalLiquidStakedResponse
    );
  }

  /**
   * Query tokenize share locks
   * 
   * @param address Bech32 address 
   * @returns 
   * @since v3.4.0
   */
  queryTokenizeShareLockInfo(address: string): Promise<{
    status: string
    expiration_time: string
  }> {
    if (is.undefined(address)) {
      throw new SdkError('address can not be empty');
    }
    const request = new types.staking_query_pb.QueryTokenizeShareLockInfo()
      .setAddress(address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/TokenizeShareLockInfo',
      request,
      types.staking_query_pb.QueryTokenizeShareLockInfoResponse
    );
  }

  /**
   * Query the current staking pool values
   * @returns
   * @since
   */
  queryPool(): Promise<types.StakingPool> {
    const request = new types.staking_query_pb.QueryPoolRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Pool',
      request,
      types.staking_query_pb.QueryPoolResponse
    );
  }

  /**
   * Query the current staking parameters information
   * @returns
   * @since
   */
  queryParams(): Promise<types.StakingParams> {
    const request = new types.staking_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Params',
      request,
      types.staking_query_pb.QueryParamsResponse
    );
  }

  /**
   * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
   *
   * Removing on irishub v1.0
   * @deprecated
   * @hidden
   */
  private appendZero(num: string, count: number): string {
    const length = num.length;
    const dotIndex = num.lastIndexOf('.');
    if (dotIndex <= 0) {
      return this.appendZero(num + '.0', count);
    }
    if (length - (dotIndex + 1) < count) {
      return this.appendZero(num + '0', count);
    }
    return num;
  }

  /**
   * Create new validator initialized with a self-delegation to it
   *
   * ** Not Supported **
   */
  createValidator() {
    throw new SdkError('Not supported',CODES.Internal);
  }
}
