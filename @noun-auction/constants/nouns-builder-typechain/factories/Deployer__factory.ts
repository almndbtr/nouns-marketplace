/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { Deployer, DeployerInterface } from '../Deployer'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenImpl',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_auctionImpl',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_treasuryImpl',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_governorImpl',
        type: 'address',
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
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'auction',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'governor',
        type: 'address',
      },
    ],
    name: 'DAODeployed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'auctionImpl',
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
        components: [
          {
            internalType: 'bytes',
            name: 'initInfo',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'foundersDAO',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'foundersMaxAllocation',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'foundersAllocationFrequency',
            type: 'uint256',
          },
        ],
        internalType: 'struct IDeployer.TokenParams',
        name: '_tokenParams',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'reservePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
        ],
        internalType: 'struct IDeployer.AuctionParams',
        name: '_auctionParams',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timelockDelay',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'votingDelay',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'votingPeriod',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'proposalThresholdBPS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quorumVotesBPS',
            type: 'uint256',
          },
        ],
        internalType: 'struct IDeployer.GovParams',
        name: '_govParams',
        type: 'tuple',
      },
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'auction',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'governor',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governorImpl',
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
    name: 'tokenImpl',
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
    name: 'treasuryImpl',
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
]

const _bytecode =
  '0x61010060405234801561001157600080fd5b506040516111713803806111718339810160408190526100309161006e565b6001600160a01b0393841660805291831660a052821660c0521660e0526100c2565b80516001600160a01b038116811461006957600080fd5b919050565b6000806000806080858703121561008457600080fd5b61008d85610052565b935061009b60208601610052565b92506100a960408601610052565b91506100b760608601610052565b905092959194509250565b60805160a05160c05160e05161105b6101166000396000818160c901526102f501526000818161013c015261027d0152600081816101150152610205015260008181610163015261018d015261105b6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063428eb53811610050578063428eb538146101105780634dfbbdaa14610137578063ffc4992f1461015e57600080fd5b8063258d3b6f1461006c578063264aa22a146100c4575b600080fd5b61007f61007a36600461067f565b610185565b6040805173ffffffffffffffffffffffffffffffffffffffff958616815293851660208501529184169183019190915290911660608201526080015b60405180910390f35b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bb565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000807f00000000000000000000000000000000000000000000000000000000000000006040516101b890610672565b73ffffffffffffffffffffffffffffffffffffffff9091168152604060208201819052600090820152606001604051809103906000f080158015610200573d6000803e3d6000fd5b5093507f000000000000000000000000000000000000000000000000000000000000000060405161023090610672565b73ffffffffffffffffffffffffffffffffffffffff9091168152604060208201819052600090820152606001604051809103906000f080158015610278573d6000803e3d6000fd5b5092507f00000000000000000000000000000000000000000000000000000000000000006040516102a890610672565b73ffffffffffffffffffffffffffffffffffffffff9091168152604060208201819052600090820152606001604051809103906000f0801580156102f0573d6000803e3d6000fd5b5091507f000000000000000000000000000000000000000000000000000000000000000060405161032090610672565b73ffffffffffffffffffffffffffffffffffffffff9091168152604060208201819052600090820152606001604051809103906000f080158015610368573d6000803e3d6000fd5b50905073ffffffffffffffffffffffffffffffffffffffff841663b50610f66103918980610735565b6103a160408c0160208d016107a1565b8b604001358c6060013589896040518863ffffffff1660e01b81526004016103cf97969594939291906107de565b600060405180830381600087803b1580156103e957600080fd5b505af11580156103fd573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff8416905063a6b63eb88561042f60408b0160208c016107a1565b60405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff928316600482015290821660248201529085166044820152602089013560648201528835608482015260a401600060405180830381600087803b1580156104b657600080fd5b505af11580156104ca573d6000803e3d6000fd5b50506040517fcd6dc68700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152883560248301528516925063cd6dc6879150604401600060405180830381600087803b15801561053e57600080fd5b505af1158015610552573d6000803e3d6000fd5b5050604080517f86489ba900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152888116602483015260208a0135604483015291890135606482015260608901356084820152608089013560a482015290841692506386489ba9915060c401600060405180830381600087803b1580156105f057600080fd5b505af1158015610604573d6000803e3d6000fd5b50506040805173ffffffffffffffffffffffffffffffffffffffff88811682528781166020830152868116828401528516606082015290517ff11e5aab072e2cc757196bc832963c0379cd33b72bc31255118228d22aaa76909350908190036080019150a193509350935093565b6107be8061086883390190565b600080600083850361010081121561069657600080fd5b843567ffffffffffffffff8111156106ad57600080fd5b8501608081880312156106bf57600080fd5b935060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156106f157600080fd5b60208501925060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08201121561072757600080fd5b506060840190509250925092565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261076a57600080fd5b83018035915067ffffffffffffffff82111561078557600080fd5b60200191503681900382131561079a57600080fd5b9250929050565b6000602082840312156107b357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107d757600080fd5b9392505050565b60c081528660c0820152868860e0830137600060e088830181019190915273ffffffffffffffffffffffffffffffffffffffff968716602083015260408201959095526060810193909352908416608083015290921660a0830152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010191905056fe60806040526040516107be3803806107be83398101604081905261002291610314565b61002e82826000610035565b5050610431565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610797602791396101a9565b9392505050565b6100ea8161028760201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61029660201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102115760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610148565b600080856001600160a01b03168560405161022c91906103e2565b600060405180830381855af49150503d8060008114610267576040519150601f19603f3d011682016040523d82523d6000602084013e61026c565b606091505b50909250905061027d828286610299565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a85750816100d0565b8251156102b85782518084602001fd5b8160405162461bcd60e51b815260040161014891906103fe565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103035781810151838201526020016102eb565b838111156100645750506000910152565b6000806040838503121561032757600080fd5b82516001600160a01b038116811461033e57600080fd5b60208401519092506001600160401b038082111561035b57600080fd5b818501915085601f83011261036f57600080fd5b815181811115610381576103816102d2565b604051601f8201601f19908116603f011681019083821181831017156103a9576103a96102d2565b816040528281528860208487010111156103c257600080fd5b6103d38360208301602088016102e8565b80955050505050509250929050565b600082516103f48184602087016102e8565b9190910192915050565b602081526000825180602084015261041d8160408501602087016102e8565b601f01601f19169190910160400192915050565b610357806104406000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102fb602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b606073ffffffffffffffffffffffffffffffffffffffff84163b610188576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516101b0919061028d565b600060405180830381855af49150503d80600081146101eb576040519150601f19603f3d011682016040523d82523d6000602084013e6101f0565b606091505b509150915061020082828661020a565b9695505050505050565b6060831561021957508161004e565b8251156102295782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017f91906102a9565b60005b83811015610278578181015183820152602001610260565b83811115610287576000848401525b50505050565b6000825161029f81846020870161025d565b9190910192915050565b60208152600082518060208401526102c881604085016020870161025d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122013f1ac00ce540cdccd30a7544a110900e7d283744e6538f16d5dfd1b57fe927d64736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122034d6b21ce092f2b89b9cb97b31163e64b476c849e352c7197b0a152419c3072b64736f6c634300080f0033'

type DeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: DeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Deployer__factory extends ContractFactory {
  constructor(...args: DeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _tokenImpl: PromiseOrValue<string>,
    _auctionImpl: PromiseOrValue<string>,
    _treasuryImpl: PromiseOrValue<string>,
    _governorImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Deployer> {
    return super.deploy(
      _tokenImpl,
      _auctionImpl,
      _treasuryImpl,
      _governorImpl,
      overrides || {}
    ) as Promise<Deployer>
  }
  override getDeployTransaction(
    _tokenImpl: PromiseOrValue<string>,
    _auctionImpl: PromiseOrValue<string>,
    _treasuryImpl: PromiseOrValue<string>,
    _governorImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenImpl,
      _auctionImpl,
      _treasuryImpl,
      _governorImpl,
      overrides || {}
    )
  }
  override attach(address: string): Deployer {
    return super.attach(address) as Deployer
  }
  override connect(signer: Signer): Deployer__factory {
    return super.connect(signer) as Deployer__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): DeployerInterface {
    return new utils.Interface(_abi) as DeployerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Deployer {
    return new Contract(address, _abi, signerOrProvider) as Deployer
  }
}
