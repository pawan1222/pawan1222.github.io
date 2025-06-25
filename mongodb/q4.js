db.employees.find({department:"IT"});

db.employees.find({department: {$eq:"IT"}})   //eq=equal to

db.employees.find({salary: {$gt:3000}})    //greater than

db.employees.find({salary: {$gte:3000}})   //greater than equal to

db.employees.find({salary: {$lt:3000}})    //less than

db.employees.find({salary: {$lte:3000}})    //less than equal to

db.employees.find({salary: {$ne:3000}})    // not equal to

db.employees.find({salary: {$ne:3000}, department:{$eq:"IT"}}, {name:1}); 

db.employees.find({salary: {$ne:3000}, department:{$eq:"IT"}}, {name:1}).limit(1); 



// Display the top two highest paid employees

db.employees.find().sort({salary:-1}).limit(2);

db.employees.find({salary: {$ne:3000}, department: {$eq:"IT"}}, {name:1}).limit(1)

db.employees.find(
    {$and : [{salary: {$ne:3000}, department: {$eq:"IT"}}, {name:1}]}
).limit(1)

db.employees.find(
    {$or : [{salary: {$ne:3000}, department: {$eq:"IT"}}, {name:1}]}
).limit(1)