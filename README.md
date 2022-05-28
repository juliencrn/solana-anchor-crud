# My Solana App

Solana powered app built following this tutorial: https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291

## Installation

Require `node`, `yarn`, `anchor`, `rust` and `solana` installed.

```sh
# Compile the Solana program (smart contract)
anchor build

anchor test
```

### Develop

```sh
# In 2 terminal panes;
# 1. Start the Solana blockchain locally
solana-test-validator
# 2. Get logs
solana logs
```


### Project structure

- app - Where our frontend code will go
- programs - This is where the Rust code lives for the Solana program
- test - Where the JavaScript tests for the program live
- migrations - A basic deploy script

