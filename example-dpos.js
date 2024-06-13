const Blockchain = require('./src/Blockchain.js');
const Transaction = require('./src/Transaction.js');
const Participants = require('./src/Participants.js');
const repeat_lines = 50;

// Initialize blockchain with DPoS consensus
let blockchain = new Blockchain('dpos');

// Register delegates and participants
blockchain.addDelegate('Alice');
blockchain.addDelegate('Bob');
blockchain.addDelegate('Charlie');

blockchain.registerParticipant('Voter1');
blockchain.registerParticipant('Voter2');
blockchain.registerParticipant('Voter3');
blockchain.registerParticipant('Voter4');
blockchain.registerParticipant('Voter5');

// Voters cast their votes
blockchain.voteForDelegate('Voter1', 'Alice');
blockchain.voteForDelegate('Voter2', 'Bob');
blockchain.voteForDelegate('Voter3', 'Alice');
blockchain.voteForDelegate('Voter4', 'Charlie');
blockchain.voteForDelegate('Voter5', 'Alice');

console.log("-".repeat(repeat_lines));
console.log("New Blockchain started with Delegated Proof of Stake");
console.log("-".repeat(repeat_lines));

console.log("Genesis Block 1 created");
console.log("-".repeat(repeat_lines));

console.log('\nTransactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 100));
blockchain.createTransaction(new Transaction(Participants.accounts()[1][0], Participants.accounts()[0][0], 50));

console.log("-".repeat(repeat_lines));
console.log('\nGenerating Block 2...');
blockchain.generateBlock(Participants.nodes()[0][0], 4);

console.log("-".repeat(repeat_lines));
console.log('\nGenerating Block 3...');
console.log('\nMiner of Block 2 is been rewarded...');
blockchain.generateBlock(Participants.nodes()[1][0], 4);

/**
 * Validation check of the blockchain
 */
console.log("\n" + "-".repeat(repeat_lines) + "\n" + "-".repeat(repeat_lines));
console.log("Validation check...");
blockchain.validationCheck();

/**
 * Print balances
 */
console.log("\n" + "-".repeat(repeat_lines));
Participants.nodes().forEach(function(account) {
    console.log('Balance of ' + account[0] + ':\t' + blockchain.getBalanceOfAddress(account[0]));
});
Participants.accounts().forEach(function(account) {
    console.log('Balance of ' + account[0] + ':\t' + blockchain.getBalanceOfAddress(account[0]));
});

/**
 * Print blockchain
 */
console.log("\n" + "-".repeat(repeat_lines) + "\n" + "-".repeat(repeat_lines));
console.log("Blockchain");
console.log(JSON.stringify(blockchain.chain, '', 4));
console.log("-".repeat(repeat_lines));
console.log("Pending transactions");
console.log(JSON.stringify(blockchain.pendingTransactions, '', 4));