const SHA256 = require('crypto-js/sha256');

class DelegatedProofOfStake {
    constructor(block) {
        this.block = block;
        this.delegates = [];
        this.votes = {};
    }

    addDelegate(name) {
        this.delegates.push({ name: name, votes: 0 });
    }

    voteForDelegate(voter, delegateName) {
        if (!this.votes[voter]) {
            this.votes[voter] = delegateName;
            this.delegates.forEach(delegate => {
                if (delegate.name === delegateName) {
                    delegate.votes++;
                }
            });
        } else {
            console.log("Voter has already voted.");
        }
    }

    selectTopDelegates(count) {
        this.delegates.sort((a, b) => b.votes - a.votes);
        return this.delegates.slice(0, count);
    }

    assignDelegate() {
        let topDelegates = this.selectTopDelegates(21); 
        let delegateIndex = this.block.index % topDelegates.length;
        if (topDelegates[delegateIndex]) {
            this.block.delegate = topDelegates[delegateIndex].name;
        } else {
            // Assign a default value to this.block.delegate
            this.block.delegate = 'No delegate found';
        }
    }

    calculateHash() {
        // You need to ensure that SHA256 is available in your context
        return SHA256(this.block.previousHash + this.block.timestamp + JSON.stringify(this.block.transactions) + this.block.delegate).toString();
    }

    generateBlock() {
        this.assignDelegate();
        this.block.hash = this.calculateHash();
        console.log("Block created by: " + this.block.delegate);
        return this.block;
    }
}

module.exports = DelegatedProofOfStake;