/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BytesLike, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type {
  NounsAuctionHouseProxy,
  NounsAuctionHouseProxyInterface,
} from '../../../contracts/proxies/NounsAuctionHouseProxy'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
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
        name: 'newImplementation',
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
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620010e1380380620010e183398101604081905262000034916200045f565b8282828281620000478282600062000061565b50620000559050826200009e565b505050505050620005d7565b6200006c83620000f9565b6000825111806200007a5750805b1562000099576200009783836200013b60201b620002ff1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000c96200016a565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000f681620001a3565b50565b620001048162000258565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001638383604051806060016040528060278152602001620010ba602791396200030c565b9392505050565b6000620001946000805160206200109a83398151915260001b620003f260201b620002731760201c565b546001600160a01b0316919050565b6001600160a01b0381166200020e5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002376000805160206200109a83398151915260001b620003f260201b620002731760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200026e81620003f560201b6200032b1760201c565b620002d25760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840162000205565b80620002377f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620003f260201b620002731760201c565b60606001600160a01b0384163b620003765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000205565b600080856001600160a01b0316856040516200039391906200053f565b600060405180830381855af49150503d8060008114620003d0576040519150601f19603f3d011682016040523d82523d6000602084013e620003d5565b606091505b509092509050620003e882828662000404565b9695505050505050565b90565b6001600160a01b03163b151590565b606083156200041557508162000163565b825115620004265782518084602001fd5b8160405162461bcd60e51b81526004016200020591906200055d565b80516001600160a01b03811681146200045a57600080fd5b919050565b6000806000606084860312156200047557600080fd5b620004808462000442565b9250620004906020850162000442565b60408501519092506001600160401b0380821115620004ae57600080fd5b818601915086601f830112620004c357600080fd5b815181811115620004d857620004d8620005c1565b604051601f8201601f19908116603f01168101908382118183101715620005035762000503620005c1565b816040528281528960208487010111156200051d57600080fd5b6200053083602083016020880162000592565b80955050505050509250925092565b600082516200055381846020870162000592565b9190910192915050565b60208152600082518060208401526200057e81604085016020870162000592565b601f01601f19169190910160400192915050565b60005b83811015620005af57818101518382015260200162000595565b83811115620000975750506000910152565b634e487b7160e01b600052604160045260246000fd5b610ab380620005e76000396000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100a85780638f283970146100e6578063f851a440146101065761006d565b80633659cfe6146100755780634f1ef286146100955761006d565b3661006d5761006b61011b565b005b61006b61011b565b34801561008157600080fd5b5061006b61009036600461091f565b610135565b61006b6100a336600461093a565b610196565b3480156100b457600080fd5b506100bd610221565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f257600080fd5b5061006b61010136600461091f565b610276565b34801561011257600080fd5b506100bd6102ba565b610123610347565b61013361012e610435565b61043f565b565b61013d610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018e5761018b816040518060200160405280600081525060006104a3565b50565b61018b61011b565b61019e610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610219576102148383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192506104a3915050565b505050565b61021461011b565b600061022b610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561026b57610266610435565b905090565b61027361011b565b90565b61027e610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018e5761018b816104ce565b60006102c4610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561026b57610266610463565b60606103248383604051806060016040528060278152602001610a576027913961052f565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b61034f610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610133576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6000610266610657565b3660008037600080366000845af43d6000803e80801561045e573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b5473ffffffffffffffffffffffffffffffffffffffff16919050565b6104ac8361067f565b6000825111806104b95750805b15610214576104c883836102ff565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104f7610463565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301520160405180910390a161018b816106cc565b606073ffffffffffffffffffffffffffffffffffffffff84163b6105d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161042c565b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516105fd91906109bd565b600060405180830381855af49150503d8060008114610638576040519150601f19603f3d011682016040523d82523d6000602084013e61063d565b606091505b509150915061064d8282866107d8565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610487565b6106888161082b565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b73ffffffffffffffffffffffffffffffffffffffff811661076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161042c565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b606083156107e7575081610324565b8251156107f75782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042c91906109d9565b73ffffffffffffffffffffffffffffffffffffffff81163b6108cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161042c565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610792565b803573ffffffffffffffffffffffffffffffffffffffff8116811461091a57600080fd5b919050565b60006020828403121561093157600080fd5b610324826108f6565b60008060006040848603121561094f57600080fd5b610958846108f6565b9250602084013567ffffffffffffffff8082111561097557600080fd5b818601915086601f83011261098957600080fd5b81358181111561099857600080fd5b8760208285010111156109aa57600080fd5b6020830194508093505050509250925092565b600082516109cf818460208701610a2a565b9190910192915050565b60208152600082518060208401526109f8816040850160208701610a2a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b83811015610a45578181015183820152602001610a2d565b838111156104c8575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122077157078f6768c39722bf87a2d5d8b84494f348fc9302be3a403ad0140888cb164736f6c63430008060033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564'

type NounsAuctionHouseProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: NounsAuctionHouseProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class NounsAuctionHouseProxy__factory extends ContractFactory {
  constructor(...args: NounsAuctionHouseProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    logic: PromiseOrValue<string>,
    admin: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NounsAuctionHouseProxy> {
    return super.deploy(
      logic,
      admin,
      data,
      overrides || {}
    ) as Promise<NounsAuctionHouseProxy>
  }
  override getDeployTransaction(
    logic: PromiseOrValue<string>,
    admin: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(logic, admin, data, overrides || {})
  }
  override attach(address: string): NounsAuctionHouseProxy {
    return super.attach(address) as NounsAuctionHouseProxy
  }
  override connect(signer: Signer): NounsAuctionHouseProxy__factory {
    return super.connect(signer) as NounsAuctionHouseProxy__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): NounsAuctionHouseProxyInterface {
    return new utils.Interface(_abi) as NounsAuctionHouseProxyInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsAuctionHouseProxy {
    return new Contract(address, _abi, signerOrProvider) as NounsAuctionHouseProxy
  }
}
