/* ===== Testing ==============================================================|
|                                                                              |
|  Test adding and retrieval of blocks from peristent store                    |
|																																							 |
|  ===========================================================================*/

const {Block, Blockchain} = require('./simpleChain')

let blockchain = new Blockchain();

(function theLoop (i)

{setTimeout(function () {
  blockchain.addBlock(new Block(`Test data ${i}`));
if (--i) theLoop(i);
}, 100);
})(10);

setTimeout(() => blockchain.validateChain(), 2000)



