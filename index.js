const express = require("express");

/*define consts and variables */

const app = express();
const port =  3000

/*dit staat hier tijdelijk tot in week 4! */
const movies =  [
    {
        "id": 1,
        "slug": "black-panther", /*voor in de url vgm */
        "name": "black-panther",
        "year": "2018",
        "catagories": ["animation", "action"]
    },

    {
        "id": 2,
        "slug": "pink-panther",
        "name": "pink-panther",
        "year": "2002",
        "catagories": ["comedy", "childern"]
    },

    {
        "id": 3,
        "slug": "panther",
        "name": "panther",
        "year": "2011",
        "catagories": ["romance", "drama"]
    }
];

/* middleware */

app.use(express.static('static'));

/*routes
  get /
    home - show movie list, ofterwijl toont de variabele in de local:host */

    app.get('/',(req,res) => {
        movies.forEach( movie => {
            res.send(`<h1>${movies[0].name}</h1>`) 
        })  /*res send eig neit gebruiken , res.render wel, omdat we template gaan gebruiken */
    })
    

/* if no routes give response, show 404 page*/

app.use( (req,res) => {
    res.status(404).send("Error 404: file not found");
})


/* Set template engine */


/*start webserver */
app.listen(port, () => {
    console.log(`webserver running on port localhost:${port}`)
})