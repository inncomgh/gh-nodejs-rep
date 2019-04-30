const http = require('http')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


