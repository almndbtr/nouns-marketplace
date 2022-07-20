/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { AuctionStorageV1, AuctionStorageV1Interface } from '../AuctionStorageV1'

const _abi = [
  {
    inputs: [],
    name: 'auction',
    outputs: [
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'house',
    outputs: [
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
    stateMutability: 'view',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610289806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637d9f6db514610046578063fc0c546a14610130578063ff9b3acf14610175575b600080fd5b6001546002546003546100d892919073ffffffffffffffffffffffffffffffffffffffff81169064ffffffffff74010000000000000000000000000000000000000000820481169179010000000000000000000000000000000000000000000000000081049091169060ff7e010000000000000000000000000000000000000000000000000000000000009091041686565b60408051968752602087019590955273ffffffffffffffffffffffffffffffffffffffff9093169385019390935264ffffffffff90811660608501529091166080830152151560a082015260c0015b60405180910390f35b6000546101509073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610127565b6004546005546102059173ffffffffffffffffffffffffffffffffffffffff81169174010000000000000000000000000000000000000000820464ffffffffff908116927901000000000000000000000000000000000000000000000000008104909116917e0100000000000000000000000000000000000000000000000000000000000090910461ffff169085565b6040805173ffffffffffffffffffffffffffffffffffffffff96909616865264ffffffffff9485166020870152929093169184019190915261ffff166060830152608082015260a00161012756fea26469706673582212204ed28eec179fd4f2ef2dff79876041f4fdaaa453fda76b4c3b4e16785f90cdc864736f6c634300080f0033'

type AuctionStorageV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: AuctionStorageV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class AuctionStorageV1__factory extends ContractFactory {
  constructor(...args: AuctionStorageV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AuctionStorageV1> {
    return super.deploy(overrides || {}) as Promise<AuctionStorageV1>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): AuctionStorageV1 {
    return super.attach(address) as AuctionStorageV1
  }
  override connect(signer: Signer): AuctionStorageV1__factory {
    return super.connect(signer) as AuctionStorageV1__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): AuctionStorageV1Interface {
    return new utils.Interface(_abi) as AuctionStorageV1Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AuctionStorageV1 {
    return new Contract(address, _abi, signerOrProvider) as AuctionStorageV1
  }
}
