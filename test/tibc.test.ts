import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 90000;

describe('tibc Tests', () => {
  describe('transfer', () => {
    test(
      'tibc nft transfer',
      async () => {
        
        await BaseTest.getClient()
          .tibc.nftTransfer(
            {
              class:'pcuz',
              id:'vklojqi',
              receiver:'iaa1cqprvn2u7xw04h0rzjxx5gu5wg4vt0664vpkvt',
              dest_chain:'tibc-test2',
              realay_chain:'tibc-test',
            },
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });
});
