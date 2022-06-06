import Web3 from 'web3';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


exports.handler = async (event) => {
   var providerURL = "wss://mainnet.infura.io/ws/v3/8e91eb9e37c34a719c796f843e196d33"

   var account = '0xf44ddE1C7234369468Bab92c86B5533743Ad61B8'
}

var checkTotalForAddress(address) => {
   var web3 = new Web3(providerURL)

   web3.eth.getBalance(String(account)).then((val) => { 
      return web3.utils.fromWei(val)
   })
}

var getTotalForAddresses(addresses) => {
   //validate
   //convert to json
   var response = {
      error: "Error: expected array of strings or single string",
      balances: []
   }
   if (Array.isArray(addresses)){
      response.error = ""
      for (var address of addresses){
         if (typeof address === 'string'){
            var balance = checkTotalForAddress(address)
            response.balances.push(balance)
         }
      }
   }
   else if (typeof address === 'string'){
      response.error = ""
      checkTotalForAddress(address)
      response.balances.push(balance)
   }
}

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/getBalance', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})









