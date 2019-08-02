#Using REST API with Node.js to persist data
In this project you will connect your private Blockchain that was runing on your machine to a web API.
You will build a REST API using Node.js framework that will interface with the private Blockchain, by configuring API for your private blockchain you expose functionality that can be consumed by several types of web clients.
You will be able to post and retrieve data to and from an endpoint located on the server using POST/GET blocks.  
This is an important step, and one that is required in developing web application.

#NodeJS Framework in this project
Express.js

#Tools & Packages
Node JS
crypto-js
Express JS
body-parser

#Getting Started
Install all required packages using npm
Run npm install

#Testing
Run node server.js

#Endpoints
GET block will send a request with block height parameters to receive the block object in JSON format
http://localhost:8000/block/{block_height}

POST block will post new block with payload data to be added to the block body. The block body supports a string of text and the response for the endpoint provides the block object in JSON format.
http://localhost:8000/block

Server should listen on port 8000
Recommended to use Postman or any other REST client



