db.employees.insertOne({
    name:"john smith",
    email:"smith@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})


db.employees.insertMany([{
    name:"mike joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","TX"],
    date:Date()
},
{
    name:"cathy G",
    email:"cathy@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","TX"],
    date:Date()
}])

db.employees.find().skip(1);
db.employees.find().limit(1);
db.employees.find().sort({name:1});    // in ascending order
db.employees.find().sort({name:-1});    // in descending order
db.employees.find().sort({name:1}).limit(1);    // show only first object

db.employees.find({department:"IT"})
db.employees.find({},{name:1})

db.employees.find({},{_id:0,name:1})    // only show name field
db.employees.find({},{_id:false,name:true})

db.employees.find({},{_id:0,name:1,department:1})
db.employees.find({location:"FL"})


db.employees.find({},{EmpName:"$name"})