import { Coin, Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError, CODES } from '../errors';

/**
 * param struct for tibc Nft Transfer
 */
export interface NftTransferParam {
  class: string;
  id: string;
  sender: string;
  receiver: string;
  dest_chain: string;
  realay_chain: string;
}

/**
 * Msg for tibc Nft Transfer
 *
 * @hidden
 */
export class MsgNftTransfer extends Msg {
  value: NftTransferParam;

  constructor(msg:NftTransferParam) {
    super(TxType.MsgNftTransfer);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.tibc_nft_transfer_tx_pb.MsgNftTransfer;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setClass(this.value.class);
    msg.setId(this.value.id);
    msg.setSender(this.value.sender);
    msg.setReceiver(this.value.receiver);
    msg.setDestChain(this.value.dest_chain);
    if (this.value.realay_chain) {
      msg.setRealayChain(this.value.realay_chain);
    }
    return msg;
  }

  validate() {
    if (!this.value.class) {
      throw new SdkError("class is empty");
    }
    if (!this.value.id) {
      throw new SdkError("nft id is empty");
    }
    if (!this.value.receiver) {
      throw new SdkError("receiver is empty");
    }
    if (!this.value.dest_chain) {
      throw new SdkError("dest_chain is empty");
    }
  }
}
