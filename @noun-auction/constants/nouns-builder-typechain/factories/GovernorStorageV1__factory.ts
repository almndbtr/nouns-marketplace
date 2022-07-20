/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { GovernorStorageV1, GovernorStorageV1Interface } from '../GovernorStorageV1'

const _abi = [
  {
    inputs: [],
    name: 'govMeta',
    outputs: [
      {
        internalType: 'contract IToken',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'votingDelay',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'votingPeriod',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'proposalThresholdBPS',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: 'quorumVotesBPS',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610164806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063109fe31814610030575b600080fd5b6000546100db9073ffffffffffffffffffffffffffffffffffffffff81169063ffffffff740100000000000000000000000000000000000000008204811691780100000000000000000000000000000000000000000000000081049091169061ffff7c010000000000000000000000000000000000000000000000000000000082048116917e0100000000000000000000000000000000000000000000000000000000000090041685565b6040805173ffffffffffffffffffffffffffffffffffffffff909616865263ffffffff9485166020870152939092169284019290925261ffff918216606084015216608082015260a00160405180910390f3fea26469706673582212200657f9ca2f06f442af98e91aec676c6162ef6dd4b397415e83abdc1a5606ab5964736f6c634300080f0033'

type GovernorStorageV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: GovernorStorageV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class GovernorStorageV1__factory extends ContractFactory {
  constructor(...args: GovernorStorageV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GovernorStorageV1> {
    return super.deploy(overrides || {}) as Promise<GovernorStorageV1>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): GovernorStorageV1 {
    return super.attach(address) as GovernorStorageV1
  }
  override connect(signer: Signer): GovernorStorageV1__factory {
    return super.connect(signer) as GovernorStorageV1__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): GovernorStorageV1Interface {
    return new utils.Interface(_abi) as GovernorStorageV1Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorStorageV1 {
    return new Contract(address, _abi, signerOrProvider) as GovernorStorageV1
  }
}
