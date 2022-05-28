const anchor = require("@project-serum/anchor");
const assert = require("assert");

const { SystemProgram } = anchor.web3;

describe("mySolanaApp", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider);

  const program = anchor.workspace.MySolanaApp;

  let _base_account;

  it("Creates a counter", async () => {
    const baseAccount = anchor.web3.Keypair.generate();

    await program.rpc.create({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount],
    });

    /* Fetch the account and check the value of count */
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

    assert.ok(account.count.toString() === "0");

    _base_account = baseAccount;
  })

  it("increments the counter", async () => {
    const baseAccount = _base_account;

    await program.rpc.increment({
      accounts: {
        baseAccount: baseAccount.publicKey,
      }
    });

    /* Fetch the account and check the value of count */
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

    assert.ok(account.count.toString() === "1");
  })
});
