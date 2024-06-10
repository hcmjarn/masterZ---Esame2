import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(keypair.publicKey.toString());
console.log(keypair.secretKey.toString());