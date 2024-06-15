const SHA256 = require('crypto-js/sha256');

class ProofOfWork {
    constructor(block) {
        this.block = block; 
        this.block.hash = this.calculateHash();
    }
    
    calculateHash() {
        return SHA256(this.block.previousHash + this.block.timestamp + JSON.stringify(this.block.transactions) + this.block.nonce).toString();
    }
    
    generateBlock(difficulty) {
        while(this.block.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")) {
            this.block.nonce++;
            this.block.hash = this.calculateHash();
        }
        console.log("Block mined:"+this.block.hash);
        return this.block;
    }
}

module.exports = ProofOfWork;