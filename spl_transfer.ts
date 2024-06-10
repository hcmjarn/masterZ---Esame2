import {Keypair, Connection, LAMPORTS_PER_SOL, SystemProgram, Transaction, sendAndConfirmTransaction, PublicKey} from "@solana/web3.js";
import {
    getOrCreateAssociatedTokenAccount,
    transfer
} from "@solana/spl-token";
import wallet from "./wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("Cjt5pPbZ8PrrXAriKGahiemr91ihFUhq8ktjQyRNUnho");
const fromAta = new PublicKey("DVbgikeZTrwYF8ZRyAw8a13NHFxMJEwQnfzB8nnV7rjZ");

const to = Keypair.generate();
console.log(to.publicKey.toBase58());

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        to.publicKey
    );

    const toAta = tokenAccount.address;
    console.log(toAta.toBase58());
    
    const amount = 10e5;

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount

    )

    console.log("transferred ", amount," from ", fromAta.toBase58(), " To ", toAta.toBase58());

}) ()
/*transferred  1000000  from  DVbgikeZTrwYF8ZRyAw8a13NHFxMJEwQnfzB8nnV7rjZ  To  9CRu2XgBBXs4B5s5pYhezRw55b6hVZgL7RzmwYDaFMsb*/