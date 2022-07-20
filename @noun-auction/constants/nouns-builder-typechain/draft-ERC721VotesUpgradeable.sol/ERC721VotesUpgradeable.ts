/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../common'

export interface ERC721VotesUpgradeableInterface extends utils.Interface {
  functions: {
    'DOMAIN_SEPARATOR()': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'delegate(address)': FunctionFragment
    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'delegates(address)': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'getPastTotalSupply(uint256)': FunctionFragment
    'getPastVotes(address,uint256)': FunctionFragment
    'getVotes(address)': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'name()': FunctionFragment
    'nonces(address)': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'symbol()': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'DOMAIN_SEPARATOR'
      | 'approve'
      | 'balanceOf'
      | 'delegate'
      | 'delegateBySig'
      | 'delegates'
      | 'getApproved'
      | 'getPastTotalSupply'
      | 'getPastVotes'
      | 'getVotes'
      | 'isApprovedForAll'
      | 'name'
      | 'nonces'
      | 'ownerOf'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'supportsInterface'
      | 'symbol'
      | 'tokenURI'
      | 'transferFrom'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'delegate',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'delegateBySig',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'delegates',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getPastTotalSupply',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getPastVotes',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getVotes',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'tokenURI',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'delegate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'delegateBySig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'delegates', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPastTotalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPastVotes', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVotes', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'DelegateChanged(address,address,address)': EventFragment
    'DelegateVotesChanged(address,uint256,uint256)': EventFragment
    'Initialized(uint8)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DelegateChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DelegateVotesChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export interface ApprovalEventObject {
  owner: string
  approved: string
  tokenId: BigNumber
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface ApprovalForAllEventObject {
  owner: string
  operator: string
  approved: boolean
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>

export interface DelegateChangedEventObject {
  delegator: string
  fromDelegate: string
  toDelegate: string
}
export type DelegateChangedEvent = TypedEvent<
  [string, string, string],
  DelegateChangedEventObject
>

export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>

export interface DelegateVotesChangedEventObject {
  delegate: string
  previousBalance: BigNumber
  newBalance: BigNumber
}
export type DelegateVotesChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DelegateVotesChangedEventObject
>

export type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>

export interface InitializedEventObject {
  version: number
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>

export interface TransferEventObject {
  from: string
  to: string
  tokenId: BigNumber
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface ERC721VotesUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ERC721VotesUpgradeableInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    name(overrides?: CallOverrides): Promise<[string]>

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  delegate(
    delegatee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  delegateBySig(
    delegatee: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

  getApproved(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>

  getPastTotalSupply(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getPastVotes(
    account: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>

  name(overrides?: CallOverrides): Promise<string>

  nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>

  'safeTransferFrom(address,address,uint256)'(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>

  symbol(overrides?: CallOverrides): Promise<string>

  tokenURI(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    delegate(delegatee: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>

    delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>

    symbol(overrides?: CallOverrides): Promise<string>

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter

    'ApprovalForAll(address,address,bool)'(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter

    'DelegateChanged(address,address,address)'(
      delegator?: PromiseOrValue<string> | null,
      fromDelegate?: PromiseOrValue<string> | null,
      toDelegate?: PromiseOrValue<string> | null
    ): DelegateChangedEventFilter
    DelegateChanged(
      delegator?: PromiseOrValue<string> | null,
      fromDelegate?: PromiseOrValue<string> | null,
      toDelegate?: PromiseOrValue<string> | null
    ): DelegateChangedEventFilter

    'DelegateVotesChanged(address,uint256,uint256)'(
      delegate?: PromiseOrValue<string> | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter
    DelegateVotesChanged(
      delegate?: PromiseOrValue<string> | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter

    'Initialized(uint8)'(version?: null): InitializedEventFilter
    Initialized(version?: null): InitializedEventFilter

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter
  }

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nonces(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
