# My Solana App

Solana powered app built following this tutorial: https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291

## Installation

Require `node`, `yarn`, `anchor`, `rust` and `solana` installed.

```sh
# Compile the Solana program (smart contract)
anchor build
```

### Project structure

- app - Where our frontend code will go
- programs - This is where the Rust code lives for the Solana program
- test - Where the JavaScript tests for the program live
- migrations - A basic deploy script

