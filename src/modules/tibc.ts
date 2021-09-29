import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { ModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';

/**
 * This module implements TIBC related functions
 *
 *
 * @category Modules
 * @since v0.2.0.2
 */

export class Tibc {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * nft Transfer
   * @param param:{
      class:string,         // the class to which the NFT to be transferred belongs
      id:string,            // the nft id
      receiver:string,      // the nft receiver
      dest_chain:string,    // target chain of transmission
      realay_chain:string   // relay chain during transmission
    }
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v2.0.2
   */
  async nftTransfer(
    param:{
      class:string,
      id:string,
      receiver:string,
      dest_chain:string,
      realay_chain?:string
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgNftTransfer,
        value:{
          class:param.class,
          id:param.id,
          sender: from,
          receiver:param.receiver,
          dest_chain:param.dest_chain,
          realay_chain:param.realay_chain || null
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}