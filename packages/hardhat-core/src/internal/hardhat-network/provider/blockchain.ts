import { Block } from "@nomicfoundation/ethereumjs-block";
import { RpcLogOutput } from "./output";
import { FilterParams } from "./node-types";
import { HardforkName } from "../../util/hardforks";

export interface BlockchainAdapter {
  blockSupportsHardfork(
    hardfork: HardforkName,
    blockNumberOrPending?: bigint | "pending"
  ): Promise<boolean>;

  getBlockByHash(hash: Buffer): Promise<Block | undefined>;

  getBlockByNumber(number: bigint): Promise<Block | undefined>;

  getBlockByTransactionHash(
    transactionHash: Buffer
  ): Promise<Block | undefined>;

  getLatestBlock(): Promise<Block>;

  getLatestBlockNumber(): Promise<bigint>;

  getLogs(filterParams: FilterParams): Promise<RpcLogOutput[]>;

  getTotalDifficultyByHash(hash: Buffer): Promise<bigint | undefined>;
}