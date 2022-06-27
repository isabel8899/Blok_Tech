/*******************************************
* Define some variables
********************************************/
const express = require('express')
const app = express()
const port = 3000

/*******************************************
* Middleware
********************************************/
// body-parser is voor data uit fomulieren halen.

/*******************************************
* Set template engine (ejs gebruiken is makkelijker!, dan handlebars)
********************************************/
// partials -> footer header en head bijv, pages -> gwn alle paginas

/*******************************************
* Routes
********************************************/
app.get('/', (req, res) => {
  res.send('test werkt')
})

/*******************************************
* if no routes show 404
********************************************/
app.use((req, res) => {
  res.status(404)
  res.redirect('/error')
})

/*******************************************
* Start webserver
********************************************/
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
