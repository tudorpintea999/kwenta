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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IMarginBaseTypes {
  export type NewPositionStruct = {
    marketKey: PromiseOrValue<BytesLike>;
    marginDelta: PromiseOrValue<BigNumberish>;
    sizeDelta: PromiseOrValue<BigNumberish>;
  };

  export type NewPositionStructOutput = [string, BigNumber, BigNumber] & {
    marketKey: string;
    marginDelta: BigNumber;
    sizeDelta: BigNumber;
  };
}

export interface CrossMarginBaseInterface extends utils.Interface {
  functions: {
    "ETH()": FunctionFragment;
    "activeMarketKeys(uint256)": FunctionFragment;
    "cancelOrder(uint256)": FunctionFragment;
    "checker(uint256)": FunctionFragment;
    "committedMargin()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositAndDistribute(uint256,(bytes32,int256,int256)[])": FunctionFragment;
    "distributeMargin((bytes32,int256,int256)[])": FunctionFragment;
    "executeOrder(uint256)": FunctionFragment;
    "freeMargin()": FunctionFragment;
    "gelato()": FunctionFragment;
    "getNumberOfInternalPositions()": FunctionFragment;
    "getPosition(bytes32)": FunctionFragment;
    "initialize()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "marginAsset()": FunctionFragment;
    "marginBaseSettings()": FunctionFragment;
    "marketKeyIndex(bytes32)": FunctionFragment;
    "ops()": FunctionFragment;
    "orderId()": FunctionFragment;
    "orders(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "placeOrder(bytes32,int256,int256,uint256,uint8)": FunctionFragment;
    "placeOrderWithFeeCap(bytes32,int256,int256,uint256,uint8,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueERC20(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validOrder(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawEth(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ETH"
      | "activeMarketKeys"
      | "cancelOrder"
      | "checker"
      | "committedMargin"
      | "deposit"
      | "depositAndDistribute"
      | "distributeMargin"
      | "executeOrder"
      | "freeMargin"
      | "gelato"
      | "getNumberOfInternalPositions"
      | "getPosition"
      | "initialize()"
      | "initialize(address,address,address,address)"
      | "marginAsset"
      | "marginBaseSettings"
      | "marketKeyIndex"
      | "ops"
      | "orderId"
      | "orders"
      | "owner"
      | "placeOrder"
      | "placeOrderWithFeeCap"
      | "renounceOwnership"
      | "rescueERC20"
      | "transferOwnership"
      | "validOrder"
      | "withdraw"
      | "withdrawEth"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activeMarketKeys",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checker",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "committedMargin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAndDistribute",
    values: [PromiseOrValue<BigNumberish>, IMarginBaseTypes.NewPositionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeMargin",
    values: [IMarginBaseTypes.NewPositionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "freeMargin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNumberOfInternalPositions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPosition",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize(address,address,address,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marginAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marginBaseSettings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketKeyIndex",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "ops", values?: undefined): string;
  encodeFunctionData(functionFragment: "orderId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "placeOrder",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "placeOrderWithFeeCap",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueERC20",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "ETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "activeMarketKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "committedMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositAndDistribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "freeMargin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfInternalPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialize()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialize(address,address,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginBaseSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketKeyIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ops", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "placeOrderWithFeeCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "FeeImposed(address,uint256)": EventFragment;
    "OrderCancelled(address,uint256)": EventFragment;
    "OrderFilled(address,uint256,uint256,uint256)": EventFragment;
    "OrderPlaced(address,uint256,bytes32,int256,int256,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Rescued(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeImposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rescued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface FeeImposedEventObject {
  account: string;
  amount: BigNumber;
}
export type FeeImposedEvent = TypedEvent<
  [string, BigNumber],
  FeeImposedEventObject
>;

export type FeeImposedEventFilter = TypedEventFilter<FeeImposedEvent>;

export interface OrderCancelledEventObject {
  account: string;
  orderId: BigNumber;
}
export type OrderCancelledEvent = TypedEvent<
  [string, BigNumber],
  OrderCancelledEventObject
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export interface OrderFilledEventObject {
  account: string;
  orderId: BigNumber;
  fillPrice: BigNumber;
  keeperFee: BigNumber;
}
export type OrderFilledEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  OrderFilledEventObject
>;

export type OrderFilledEventFilter = TypedEventFilter<OrderFilledEvent>;

export interface OrderPlacedEventObject {
  account: string;
  orderId: BigNumber;
  marketKey: string;
  marginDelta: BigNumber;
  sizeDelta: BigNumber;
  targetPrice: BigNumber;
  orderType: number;
}
export type OrderPlacedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber, BigNumber, number],
  OrderPlacedEventObject
>;

export type OrderPlacedEventFilter = TypedEventFilter<OrderPlacedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RescuedEventObject {
  token: string;
  amount: BigNumber;
}
export type RescuedEvent = TypedEvent<[string, BigNumber], RescuedEventObject>;

export type RescuedEventFilter = TypedEventFilter<RescuedEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface CrossMarginBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossMarginBaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH(overrides?: CallOverrides): Promise<[string]>;

    activeMarketKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    cancelOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checker(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    committedMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositAndDistribute(
      _amount: PromiseOrValue<BigNumberish>,
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    distributeMargin(
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    freeMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getNumberOfInternalPositions(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        fundingIndex: BigNumber;
        margin: BigNumber;
        lastPrice: BigNumber;
        size: BigNumber;
      }
    >;

    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,address)"(
      _marginAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      _marginBaseSettings: PromiseOrValue<string>,
      _ops: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    marginAsset(overrides?: CallOverrides): Promise<[string]>;

    marginBaseSettings(overrides?: CallOverrides): Promise<[string]>;

    marketKeyIndex(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ops(overrides?: CallOverrides): Promise<[string]>;

    orderId(overrides?: CallOverrides): Promise<[BigNumber]>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
        marketKey: string;
        marginDelta: BigNumber;
        sizeDelta: BigNumber;
        targetPrice: BigNumber;
        gelatoTaskId: string;
        orderType: number;
        maxDynamicFee: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    placeOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    placeOrderWithFeeCap(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      _maxDynamicFee: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rescueERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawEth(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ETH(overrides?: CallOverrides): Promise<string>;

  activeMarketKeys(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  cancelOrder(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checker(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositAndDistribute(
    _amount: PromiseOrValue<BigNumberish>,
    _newPositions: IMarginBaseTypes.NewPositionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  distributeMargin(
    _newPositions: IMarginBaseTypes.NewPositionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOrder(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getNumberOfInternalPositions(overrides?: CallOverrides): Promise<BigNumber>;

  getPosition(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      fundingIndex: BigNumber;
      margin: BigNumber;
      lastPrice: BigNumber;
      size: BigNumber;
    }
  >;

  "initialize()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,address)"(
    _marginAsset: PromiseOrValue<string>,
    _addressResolver: PromiseOrValue<string>,
    _marginBaseSettings: PromiseOrValue<string>,
    _ops: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  marginAsset(overrides?: CallOverrides): Promise<string>;

  marginBaseSettings(overrides?: CallOverrides): Promise<string>;

  marketKeyIndex(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ops(overrides?: CallOverrides): Promise<string>;

  orderId(overrides?: CallOverrides): Promise<BigNumber>;

  orders(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
      marketKey: string;
      marginDelta: BigNumber;
      sizeDelta: BigNumber;
      targetPrice: BigNumber;
      gelatoTaskId: string;
      orderType: number;
      maxDynamicFee: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  placeOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    _marginDelta: PromiseOrValue<BigNumberish>,
    _sizeDelta: PromiseOrValue<BigNumberish>,
    _targetPrice: PromiseOrValue<BigNumberish>,
    _orderType: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  placeOrderWithFeeCap(
    _marketKey: PromiseOrValue<BytesLike>,
    _marginDelta: PromiseOrValue<BigNumberish>,
    _sizeDelta: PromiseOrValue<BigNumberish>,
    _targetPrice: PromiseOrValue<BigNumberish>,
    _orderType: PromiseOrValue<BigNumberish>,
    _maxDynamicFee: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rescueERC20(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validOrder(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawEth(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH(overrides?: CallOverrides): Promise<string>;

    activeMarketKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    cancelOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checker(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositAndDistribute(
      _amount: PromiseOrValue<BigNumberish>,
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    distributeMargin(
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getNumberOfInternalPositions(overrides?: CallOverrides): Promise<BigNumber>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        fundingIndex: BigNumber;
        margin: BigNumber;
        lastPrice: BigNumber;
        size: BigNumber;
      }
    >;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    "initialize(address,address,address,address)"(
      _marginAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      _marginBaseSettings: PromiseOrValue<string>,
      _ops: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    marginAsset(overrides?: CallOverrides): Promise<string>;

    marginBaseSettings(overrides?: CallOverrides): Promise<string>;

    marketKeyIndex(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ops(overrides?: CallOverrides): Promise<string>;

    orderId(overrides?: CallOverrides): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
        marketKey: string;
        marginDelta: BigNumber;
        sizeDelta: BigNumber;
        targetPrice: BigNumber;
        gelatoTaskId: string;
        orderType: number;
        maxDynamicFee: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    placeOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    placeOrderWithFeeCap(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      _maxDynamicFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEth(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;

    "FeeImposed(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      amount?: null
    ): FeeImposedEventFilter;
    FeeImposed(
      account?: PromiseOrValue<string> | null,
      amount?: null
    ): FeeImposedEventFilter;

    "OrderCancelled(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      orderId?: null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      account?: PromiseOrValue<string> | null,
      orderId?: null
    ): OrderCancelledEventFilter;

    "OrderFilled(address,uint256,uint256,uint256)"(
      account?: PromiseOrValue<string> | null,
      orderId?: null,
      fillPrice?: null,
      keeperFee?: null
    ): OrderFilledEventFilter;
    OrderFilled(
      account?: PromiseOrValue<string> | null,
      orderId?: null,
      fillPrice?: null,
      keeperFee?: null
    ): OrderFilledEventFilter;

    "OrderPlaced(address,uint256,bytes32,int256,int256,uint256,uint8)"(
      account?: PromiseOrValue<string> | null,
      orderId?: null,
      marketKey?: null,
      marginDelta?: null,
      sizeDelta?: null,
      targetPrice?: null,
      orderType?: null
    ): OrderPlacedEventFilter;
    OrderPlaced(
      account?: PromiseOrValue<string> | null,
      orderId?: null,
      marketKey?: null,
      marginDelta?: null,
      sizeDelta?: null,
      targetPrice?: null,
      orderType?: null
    ): OrderPlacedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Rescued(address,uint256)"(token?: null, amount?: null): RescuedEventFilter;
    Rescued(token?: null, amount?: null): RescuedEventFilter;

    "Withdraw(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    activeMarketKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checker(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositAndDistribute(
      _amount: PromiseOrValue<BigNumberish>,
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    distributeMargin(
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfInternalPositions(overrides?: CallOverrides): Promise<BigNumber>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "initialize(address,address,address,address)"(
      _marginAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      _marginBaseSettings: PromiseOrValue<string>,
      _ops: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    marginAsset(overrides?: CallOverrides): Promise<BigNumber>;

    marginBaseSettings(overrides?: CallOverrides): Promise<BigNumber>;

    marketKeyIndex(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ops(overrides?: CallOverrides): Promise<BigNumber>;

    orderId(overrides?: CallOverrides): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    placeOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    placeOrderWithFeeCap(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      _maxDynamicFee: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rescueERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawEth(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activeMarketKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checker(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committedMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositAndDistribute(
      _amount: PromiseOrValue<BigNumberish>,
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    distributeMargin(
      _newPositions: IMarginBaseTypes.NewPositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    freeMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfInternalPositions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,address)"(
      _marginAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      _marginBaseSettings: PromiseOrValue<string>,
      _ops: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    marginAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginBaseSettings(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketKeyIndex(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ops(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    placeOrderWithFeeCap(
      _marketKey: PromiseOrValue<BytesLike>,
      _marginDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _targetPrice: PromiseOrValue<BigNumberish>,
      _orderType: PromiseOrValue<BigNumberish>,
      _maxDynamicFee: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rescueERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validOrder(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
