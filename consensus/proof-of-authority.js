const Participants = require('../src/Participants.js');
const SHA256 = require('crypto-js/sha256');

class ProofOfAuthority {
    constructor(block) { 
        this.block = block;
    }

    calculateHash() {
        return SHA256(this.block.previousHash + this.block.timestamp + JSON.stringify(this.block.transactions) + this.block.validator).toString();
    }

    generateBlock() {
        this.block.hash = this.calculateHash();
        console.log("Block generated:"+this.block.hash);
        return this.block;
    }
}

module.exports = ProofOfAuthority;