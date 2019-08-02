const express = require('express');
const bodyParser = require('body-parser');

//const myBlockChain = require('./blockChain')();
const { Block, Blockchain } = require('./simpleChain');
const blockchain = new Blockchain();

const port = process.env.PORT || 8000;

// initialize express app
const app = express();


// use body parser to to enable JSON body to be presented in request object
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.text({type: '*/*'}));

// add end-point to get block   GET /block/{block-height}
app.get("/block/:height", async (req, res) => {
    try {
        const block = await blockchain.getBlock(req.params.height)
        res.send(block);
      } catch (error) {
        res.status(404).json({
          "status": 404,
          "message": "Block not found"
        })
      }
 });

// add end-point to add block   POST /block
app.post("/block", async (req, res) => {
    if (req.body.data === '' || req.body.data === undefined){
        res.status(400).json({
            "status": 400,
            "message": "fill the body parameters"})
    }else{
        await blockchain.addBlock(new Block(req.body.data))
        const height = await blockchain.getBlockHeight()
        const block = await blockchain.getBlock(height)
        res.status(201).send(block)
    }
      })

// start express app
app.listen(port, () => console.log(`Server Listening for port: ${port}`));
	