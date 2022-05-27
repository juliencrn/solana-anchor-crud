const anchor = require("@project-serum/anchor");

describe("mySolanaApp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  it("Is initialized!", async () => {
    // Add your test here.
    const program = anchor.workspace.MySolanaApp;

    // Both way of accessing the program works.
    // const tx = await program.methods.initialize().rpc();
    const tx = await program.rpc.initialize();
    console.log("Your transaction signature", tx);
  });
});
