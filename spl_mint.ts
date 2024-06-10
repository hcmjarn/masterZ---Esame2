import {Keypair, Connection, LAMPORTS_PER_SOL, SystemProgram, Transaction, sendAndConfirmTransaction, PublicKey} from "@solana/web3.js";
import {
    mintTo,
    getOrCreateAssociatedTokenAccount
} from "@solana/spl-token";
import wallet from "./wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("Cjt5pPbZ8PrrXAriKGahiemr91ihFUhq8ktjQyRNUnho");

(async () => {

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        keypair.publicKey
    )

    const ata = tokenAccount.address;
    console.log(ata.toBase58());

    const amount = 10e6;
    await mintTo(
        connection,
        keypair,
        mint,
        ata,
        keypair.publicKey,
        amount
    );

    console.log("Minted ", amount, " To ", ata.toBase58());


})()

/*  Minted  10000000  To  DVbgikeZTrwYF8ZRyAw8a13NHFxMJEwQnfzB8nnV7rjZ */