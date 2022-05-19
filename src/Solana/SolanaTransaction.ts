/* eslint-disable @typescript-eslint/no-explicit-any */
import { struct, u32, ns64 } from "@solana/buffer-layout";
import { Buffer } from "buffer";
import web3 from "@solana/web3.js";

const keypair = web3.Keypair.generate();
const payer = web3.Keypair.generate();

const connection = new web3.Connection(web3.clusterApiUrl("testnet"));

const airdropSignature = await connection.requestAirdrop(
  payer.publicKey,
  web3.LAMPORTS_PER_SOL,
);

// TODO: deprecated
await connection.confirmTransaction(airdropSignature);

// TODO: deprecated
const allocateTransaction = new web3.Transaction({
  feePayer: payer.publicKey
});

const keys = [{ pubkey: keypair.publicKey, isSigner: true, isWritable: true }];

const params = { space: 100 };

const allocateStruct = {
  index: 8,
  layout: struct([
    u32("instruction") as any,
    ns64("space") as any,
  ])
};

const data = Buffer.alloc(allocateStruct.layout.span);
const layoutFields = Object.assign({ instruction: allocateStruct.index }, params);
allocateStruct.layout.encode(layoutFields, data);

allocateTransaction.add(new web3.TransactionInstruction({
  keys,
  programId: web3.SystemProgram.programId,
  data,
}));

await web3.sendAndConfirmTransaction(connection, allocateTransaction, [payer, keypair]);