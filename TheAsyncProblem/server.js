var orm = require("./config/orm.js");

// var data = orm.selectWhere("parties", "party_type", "grown-up");

orm.selectWhere("parties", "party_type", "grown-up", function (result) {
  console.log(result)
})

//console.log(data); // Data is undefined. Why?