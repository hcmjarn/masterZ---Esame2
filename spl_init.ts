import {Keypair, Connection, LAMPORTS_PER_SOL, SystemProgram, Transaction, sendAndConfirmTransaction} from "@solana/web3.js";
import {createMint} from "@solana/spl-token";
import wallet from "./wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {
    
    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6, 
    );
    
    console.log(mint.toBase58());



}) ()

/* Nuovo mint account : Cjt5pPbZ8PrrXAriKGahiemr91ihFUhq8ktjQyRNUnho*/
