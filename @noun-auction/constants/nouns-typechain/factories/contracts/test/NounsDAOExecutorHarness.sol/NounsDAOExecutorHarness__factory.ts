/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../common'
import type {
  NounsDAOExecutorHarness,
  NounsDAOExecutorHarnessInterface,
} from '../../../../contracts/test/NounsDAOExecutorHarness.sol/NounsDAOExecutorHarness'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'delay_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'CancelTransaction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'ExecuteTransaction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'NewAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newDelay',
        type: 'uint256',
      },
    ],
    name: 'NewDelay',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newPendingAdmin',
        type: 'address',
      },
    ],
    name: 'NewPendingAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'QueueTransaction',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'GRACE_PERIOD',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAXIMUM_DELAY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINIMUM_DELAY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'admin',
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
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'cancelTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'delay',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'executeTransaction',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
    ],
    name: 'harnessSetAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pendingAdmin_',
        type: 'address',
      },
    ],
    name: 'harnessSetPendingAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingAdmin',
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
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'signature',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256',
      },
    ],
    name: 'queueTransaction',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'queuedTransactions',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'delay_',
        type: 'uint256',
      },
    ],
    name: 'setDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pendingAdmin_',
        type: 'address',
      },
    ],
    name: 'setPendingAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516114ea3803806114ea83398101604081905261002f91610156565b81816202a3008110156100af5760405162461bcd60e51b815260206004820152603f60248201527f4e6f756e7344414f4578656375746f723a3a636f6e7374727563746f723a204460448201527f656c6179206d75737420657863656564206d696e696d756d2064656c61792e0060648201526084015b60405180910390fd5b62278d0081111561012a576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d757374206e6f7420657863656564206d6178696d756d2064656c61792e60648201526084016100a6565b600080546001600160a01b0319166001600160a01b039390931692909217909155600255506101909050565b6000806040838503121561016957600080fd5b82516001600160a01b038116811461018057600080fd5b6020939093015192949293505050565b61134b8061019f6000396000f3fe6080604052600436106100e05760003560e01c806372b812b411610084578063c1a287e211610056578063c1a287e2146102fc578063e177246e14610313578063f2b0653714610333578063f851a4401461037357005b806372b812b41461020a5780637d645fab1461026c5780639ddf774f14610283578063b1b43ae5146102e557005b80633a66f901116100bd5780633a66f901146101865780634dd18bf5146101b4578063591fcdfe146101d45780636a42b8f8146101f457005b80630825f38f146100e95780630e18b6811461011f578063267822471461013457005b366100e757005b005b3480156100f557600080fd5b50610109610104366004611055565b6103a0565b6040516101169190611227565b60405180910390f35b34801561012b57600080fd5b506100e761082c565b34801561014057600080fd5b506001546101619073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610116565b34801561019257600080fd5b506101a66101a1366004611055565b61091c565b604051908152602001610116565b3480156101c057600080fd5b506100e76101cf366004611033565b610b3a565b3480156101e057600080fd5b506100e76101ef366004611055565b610c44565b34801561020057600080fd5b506101a660025481565b34801561021657600080fd5b506100e7610225366004611033565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b34801561027857600080fd5b506101a662278d0081565b34801561028f57600080fd5b506100e761029e366004611033565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3480156102f157600080fd5b506101a66202a30081565b34801561030857600080fd5b506101a66212750081565b34801561031f57600080fd5b506100e761032e366004611106565b610db4565b34801561033f57600080fd5b5061036361034e366004611106565b60036020526000908152604090205460ff1681565b6040519015158152602001610116565b34801561037f57600080fd5b506000546101619073ffffffffffffffffffffffffffffffffffffffff1681565b60005460609073ffffffffffffffffffffffffffffffffffffffff163314610437576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a657865637574655472616e73616360448201527f74696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e60648201526084015b60405180910390fd5b600086868686866040516020016104529594939291906111cd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291815281516020928301206000818152600390935291205490915060ff166105335760405162461bcd60e51b815260206004820152604560248201527f4e6f756e7344414f4578656375746f723a3a657865637574655472616e73616360448201527f74696f6e3a205472616e73616374696f6e206861736e2774206265656e20717560648201527f657565642e000000000000000000000000000000000000000000000000000000608482015260a40161042e565b824210156105cf5760405162461bcd60e51b815260206004820152604d60248201527f4e6f756e7344414f4578656375746f723a3a657865637574655472616e73616360448201527f74696f6e3a205472616e73616374696f6e206861736e2774207375727061737360648201527f65642074696d65206c6f636b2e00000000000000000000000000000000000000608482015260a40161042e565b6105dc6212750084611277565b4211156106515760405162461bcd60e51b815260206004820152603b60248201527f4e6f756e7344414f4578656375746f723a3a657865637574655472616e73616360448201527f74696f6e3a205472616e73616374696f6e206973207374616c652e0000000000606482015260840161042e565b600081815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905584516060906106955750836106c1565b8580519060200120856040516020016106af929190611169565b60405160208183030381529060405290505b6000808973ffffffffffffffffffffffffffffffffffffffff1689846040516106ea91906111b1565b60006040518083038185875af1925050503d8060008114610727576040519150601f19603f3d011682016040523d82523d6000602084013e61072c565b606091505b5091509150816107ca5760405162461bcd60e51b815260206004820152604560248201527f4e6f756e7344414f4578656375746f723a3a657865637574655472616e73616360448201527f74696f6e3a205472616e73616374696f6e20657865637574696f6e207265766560648201527f727465642e000000000000000000000000000000000000000000000000000000608482015260a40161042e565b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051610817949392919061123a565b60405180910390a39998505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146108bb576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a61636365707441646d696e3a204360448201527f616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e606482015260840161042e565b60008054337fffffffffffffffffffffffff0000000000000000000000000000000000000000918216811783556001805490921690915560405190917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146109aa5760405162461bcd60e51b815260206004820152603e60248201527f4e6f756e7344414f4578656375746f723a3a71756575655472616e736163746960448201527f6f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e0000606482015260840161042e565b6002546109b79042611277565b821015610a525760405162461bcd60e51b815260206004820152605160248201527f4e6f756e7344414f4578656375746f723a3a71756575655472616e736163746960448201527f6f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d7560648201527f737420736174697366792064656c61792e000000000000000000000000000000608482015260a40161042e565b60008686868686604051602001610a6d9594939291906111cd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000818152600390925291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055915073ffffffffffffffffffffffffffffffffffffffff88169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f90610b28908a908a908a908a9061123a565b60405180910390a39695505050505050565b333014610bd55760405162461bcd60e51b815260206004820152604860248201527f4e6f756e7344414f4578656375746f723a3a73657450656e64696e6741646d6960448201527f6e3a2043616c6c206d75737420636f6d652066726f6d204e6f756e7344414f4560648201527f78656375746f722e000000000000000000000000000000000000000000000000608482015260a40161042e565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cd15760405162461bcd60e51b815260206004820152603f60248201527f4e6f756e7344414f4578656375746f723a3a63616e63656c5472616e7361637460448201527f696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e00606482015260840161042e565b60008585858585604051602001610cec9594939291906111cd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000818152600390925291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055915073ffffffffffffffffffffffffffffffffffffffff87169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610da490899089908990899061123a565b60405180910390a3505050505050565b333014610e4f5760405162461bcd60e51b815260206004820152604160248201527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2043616c6c60448201527f206d75737420636f6d652066726f6d204e6f756e7344414f4578656375746f7260648201527f2e00000000000000000000000000000000000000000000000000000000000000608482015260a40161042e565b6202a300811015610ec85760405162461bcd60e51b815260206004820152603c60248201527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d75737420657863656564206d696e696d756d2064656c61792e00000000606482015260840161042e565b62278d00811115610f43576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d757374206e6f7420657863656564206d6178696d756d2064656c61792e606482015260840161042e565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b600067ffffffffffffffff80841115610f9157610f916112e6565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610fd757610fd76112e6565b81604052809350858152868686011115610ff057600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461102e57600080fd5b919050565b60006020828403121561104557600080fd5b61104e8261100a565b9392505050565b600080600080600060a0868803121561106d57600080fd5b6110768661100a565b945060208601359350604086013567ffffffffffffffff8082111561109a57600080fd5b818801915088601f8301126110ae57600080fd5b6110bd89833560208501610f76565b945060608801359150808211156110d357600080fd5b508601601f810188136110e557600080fd5b6110f488823560208401610f76565b95989497509295608001359392505050565b60006020828403121561111857600080fd5b5035919050565b600081518084526111378160208601602086016112b6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600082516111a38160048501602087016112b6565b919091016004019392505050565b600082516111c38184602087016112b6565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015260a06040820152600061120260a083018661111f565b8281036060840152611214818661111f565b9150508260808301529695505050505050565b60208152600061104e602083018461111f565b848152608060208201526000611253608083018661111f565b8281036040840152611265818661111f565b91505082606083015295945050505050565b600082198211156112b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b60005b838110156112d15781810151838201526020016112b9565b838111156112e0576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220bea193f47f099a65c1cf030e653ac7992eb898bd52652b8376e03ccc8f7d579e64736f6c63430008060033'

type NounsDAOExecutorHarnessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: NounsDAOExecutorHarnessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class NounsDAOExecutorHarness__factory extends ContractFactory {
  constructor(...args: NounsDAOExecutorHarnessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    admin_: PromiseOrValue<string>,
    delay_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NounsDAOExecutorHarness> {
    return super.deploy(
      admin_,
      delay_,
      overrides || {}
    ) as Promise<NounsDAOExecutorHarness>
  }
  override getDeployTransaction(
    admin_: PromiseOrValue<string>,
    delay_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {})
  }
  override attach(address: string): NounsDAOExecutorHarness {
    return super.attach(address) as NounsDAOExecutorHarness
  }
  override connect(signer: Signer): NounsDAOExecutorHarness__factory {
    return super.connect(signer) as NounsDAOExecutorHarness__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): NounsDAOExecutorHarnessInterface {
    return new utils.Interface(_abi) as NounsDAOExecutorHarnessInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsDAOExecutorHarness {
    return new Contract(address, _abi, signerOrProvider) as NounsDAOExecutorHarness
  }
}
