/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { IAuction, IAuctionInterface } from '../IAuction'

const _abi = [
  {
    inputs: [],
    name: 'auction',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'highestBid',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint40',
            name: 'startTime',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'endTime',
            type: 'uint40',
          },
          {
            internalType: 'bool',
            name: 'settled',
            type: 'bool',
          },
        ],
        internalType: 'struct IAuction.Auction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'createBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'house',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'treasury',
            type: 'address',
          },
          {
            internalType: 'uint40',
            name: 'duration',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'timeBuffer',
            type: 'uint40',
          },
          {
            internalType: 'uint16',
            name: 'minBidIncrementPercentage',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'reservePrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAuction.House',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'foundersDAO',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'reservePrice',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minBidIncrementPercentage',
        type: 'uint256',
      },
    ],
    name: 'setMinBidIncrementPercentage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reservePrice',
        type: 'uint256',
      },
    ],
    name: 'setReservePrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timeBuffer',
        type: 'uint256',
      },
    ],
    name: 'setTimeBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settleCurrentAndCreateNewAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract IToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

export class IAuction__factory {
  static readonly abi = _abi
  static createInterface(): IAuctionInterface {
    return new utils.Interface(_abi) as IAuctionInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IAuction {
    return new Contract(address, _abi, signerOrProvider) as IAuction
  }
}
