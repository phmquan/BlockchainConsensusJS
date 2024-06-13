# BlockchainJS

This project is an implementation of the essence of a Blockchain. It demonstrates the main aspects and the challenge of a Blockchain as a distributed ledger.

```
BlockchainJS  
    |-- consensus/
        |-- proof-of-authority.js
        |-- proof-of-stake.js
        |-- proof-of-work.js
        |-- delegate-proof-of-work
    |-- src/
        |-- Block.js
        |-- Blockchain.js
        |-- Participants.js
        |-- Transaction.js
    |-- example-poa.js
    |-- example-pos.js
    |-- example-pow.js
    |--example-dpos.js
```

## What is a Blockchain?

A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data ([Wikipedia](https://en.wikipedia.org/wiki/Blockchain))
  
```json
Blockchain
[
    {
        "block": 0,
        "previousHash": "0",
        "timestamp": "01/01/2010",
        "transactions": "GenesisBlock",
        "hash": "c089b45f1bd2411f615e2d75eb6578488385199477c18c4022f8273ca557abfe",
        "nonce": 0
    },
    {
        "block": 1,
        "previousHash": "c089b45f1bd2411f615e2d75eb6578488385199477c18c4022f8273ca557abfe",
        ...
        "hash": "00000f7956bb8142c44526f2fda693d95468237dacb781aadb0aca00478ae2c9",
        "nonce": 1255248
    },
    {
        "block": 2,
        "previousHash": "00000f7956bb8142c44526f2fda693d95468237dacb781aadb0aca00478ae2c9",
        ...
        "hash": "00000f9571be245f9fdf796e57831ee47730eaad565439b553130a2d543f14cb",
        "nonce": 527477
    }
]

## What is consensus and why is it important?

The best known implementations of a blockchain are in the form of a **distributed ledger** (Bitcoin, Ethereum etc.). Each participant can hold a copy of the ledger. There is no centralized database, no instances like a database admin or super user which can garantee the validity across the peers, but also could manipulate blocks retroactively. It may even be that the blockchain grows differently at different nodes. How a valid block is created must be decided amongst the participants of the blockchain. Because anybody can submit blocks (even false ones, see [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault)), the *real* blockchain must be determined by specific consensus algorithms. 

## How to use this project

This project implements the main four consensus algorithms.

```shell
# Install dependencies
npm install
```

### Proof of Work

```shell
node example-pow.js
```

### Proof of Stake

```shell
node example-pos.js
```

### Proof of Authority

```shell
node example-poa.js
```