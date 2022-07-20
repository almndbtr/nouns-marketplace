/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../../common'
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
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
  '0x6080604052604051620010cd380380620010cd83398101604081905262000026916200044b565b828162000036828260006200004d565b50620000449050826200008a565b505050620005c3565b6200005883620000e5565b600082511180620000665750805b1562000085576200008383836200012760201b620002ff1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000b562000156565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e2816200018f565b50565b620000f08162000244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200014f8383604051806060016040528060278152602001620010a660279139620002f8565b9392505050565b6000620001806000805160206200108683398151915260001b620003de60201b620002731760201c565b546001600160a01b0316919050565b6001600160a01b038116620001fa5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002236000805160206200108683398151915260001b620003de60201b620002731760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200025a81620003e160201b6200032b1760201c565b620002be5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f1565b80620002237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620003de60201b620002731760201c565b60606001600160a01b0384163b620003625760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620001f1565b600080856001600160a01b0316856040516200037f91906200052b565b600060405180830381855af49150503d8060008114620003bc576040519150601f19603f3d011682016040523d82523d6000602084013e620003c1565b606091505b509092509050620003d4828286620003f0565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620004015750816200014f565b825115620004125782518084602001fd5b8160405162461bcd60e51b8152600401620001f1919062000549565b80516001600160a01b03811681146200044657600080fd5b919050565b6000806000606084860312156200046157600080fd5b6200046c846200042e565b92506200047c602085016200042e565b60408501519092506001600160401b03808211156200049a57600080fd5b818601915086601f830112620004af57600080fd5b815181811115620004c457620004c4620005ad565b604051601f8201601f19908116603f01168101908382118183101715620004ef57620004ef620005ad565b816040528281528960208487010111156200050957600080fd5b6200051c8360208301602088016200057e565b80955050505050509250925092565b600082516200053f8184602087016200057e565b9190910192915050565b60208152600082518060208401526200056a8160408501602087016200057e565b601f01601f19169190910160400192915050565b60005b838110156200059b57818101518382015260200162000581565b83811115620000835750506000910152565b634e487b7160e01b600052604160045260246000fd5b610ab380620005d36000396000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100a85780638f283970146100e6578063f851a440146101065761006d565b80633659cfe6146100755780634f1ef286146100955761006d565b3661006d5761006b61011b565b005b61006b61011b565b34801561008157600080fd5b5061006b61009036600461091f565b610135565b61006b6100a336600461093a565b610196565b3480156100b457600080fd5b506100bd610221565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f257600080fd5b5061006b61010136600461091f565b610276565b34801561011257600080fd5b506100bd6102ba565b610123610347565b61013361012e610435565b61043f565b565b61013d610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018e5761018b816040518060200160405280600081525060006104a3565b50565b61018b61011b565b61019e610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610219576102148383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192506104a3915050565b505050565b61021461011b565b600061022b610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561026b57610266610435565b905090565b61027361011b565b90565b61027e610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018e5761018b816104ce565b60006102c4610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561026b57610266610463565b60606103248383604051806060016040528060278152602001610a576027913961052f565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b61034f610463565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610133576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6000610266610657565b3660008037600080366000845af43d6000803e80801561045e573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b5473ffffffffffffffffffffffffffffffffffffffff16919050565b6104ac8361067f565b6000825111806104b95750805b15610214576104c883836102ff565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104f7610463565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301520160405180910390a161018b816106cc565b606073ffffffffffffffffffffffffffffffffffffffff84163b6105d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161042c565b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516105fd91906109bd565b600060405180830381855af49150503d8060008114610638576040519150601f19603f3d011682016040523d82523d6000602084013e61063d565b606091505b509150915061064d8282866107d8565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610487565b6106888161082b565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b73ffffffffffffffffffffffffffffffffffffffff811661076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161042c565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b606083156107e7575081610324565b8251156107f75782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042c91906109d9565b73ffffffffffffffffffffffffffffffffffffffff81163b6108cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161042c565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610792565b803573ffffffffffffffffffffffffffffffffffffffff8116811461091a57600080fd5b919050565b60006020828403121561093157600080fd5b610324826108f6565b60008060006040848603121561094f57600080fd5b610958846108f6565b9250602084013567ffffffffffffffff8082111561097557600080fd5b818601915086601f83011261098957600080fd5b81358181111561099857600080fd5b8760208285010111156109aa57600080fd5b6020830194508093505050509250925092565b600082516109cf818460208701610a2a565b9190910192915050565b60208152600082518060208401526109f8816040850160208701610a2a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b83811015610a45578181015183820152602001610a2d565b838111156104c8575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122097f18a60872dedf4d731b8a1db7f630e8ab3820daba9560bfb18348d5512c3df64736f6c63430008060033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564'

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {})
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(address, _abi, signerOrProvider) as TransparentUpgradeableProxy
  }
}
