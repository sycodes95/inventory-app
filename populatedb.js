const Guns = require('./models/guns')

const { request, gql } = require('graphql-request');
const category = require('./models/guns');
const userArgs = process.argv.slice(2);
/*
const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

const gunQuery = gql`
{
  items(types: preset){
    id
    shortName
    basePrice
    weight
    category {name}
    inspectImageLink
    description
    
    
  }
}
`
console.log(gunQuery);


request('https://api.tarkov.dev/graphql', gunQuery).then((data) => {
  data.items.forEach((item) => {
    console.log(item);
    /*
    const newGun = new Guns({
      id: item.id,
      name: item.shortName,
      price: item.basePrice / 70,
      weight: item.weight,
      category: item.category.name,
      picture: item.inspectImageLink,
      stock: Math.floor(Math.random() * 100)
    });
    newGun.save((err, item) =>{
      if(err){
        console.log(err);
      } else {
        console.log(item);
      }
    })
    */
    
  });
});

