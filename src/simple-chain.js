const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

let chain = [];

const chainMaker = {
  chain: chain,
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let linkChain = '';
    if (typeof value === "underfined") {
      linkChain = '(  )';
    } else {
      linkChain = '( ' + String(value) + ' )';
    }
    this.chain.push(linkChain);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === "number" && position%2 === Math.round(position % 2) && position > 0 && position < this.chain.length) {
      this.chain.splice(position-1,1);
      console.log(this);
      return this;
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let reschain = this.chain;
    this.chain = [];
    console.log(reschain);
    return reschain.join('~~');
  }
};

module.exports = {
  chainMaker
};
