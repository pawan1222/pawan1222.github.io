
db.employees.insertMany([{
    name:"Amy",
    email:"amy@gmail.com",
    department:"HR",
    salary:2000,
    location:["NY","TX"],
    date:Date()
},
{
    name:"Refeal G",
    email:"refeal@gmail.com",
    department:"Admin",
    salary:1500,
    location:["OH","TX"],
    date:Date()
}])

db.employees.updateOne(
    {email:"smith@gmail.com"},    //first parametere has filter where we have to update
    {$set:{salary:2000}}
)

db.employees.updateMany(    //if points field is not there then maid
    {},
    {$set:{points:1}}
)

db.employees.updateMany(  
    {department:"IT"},
    {$inc:{points:1}}        //points increment after this query 
)
db.employees.updateMany(  
    {department:"IT"},
    {$inc:{points:3}}        //points increment by 3
)


db.employees.updateMany(  
    {department:"IT"},
    {$inc:{points:-1}}        //points decrement by 1 
)

db.employees.updateMany(  
    {},
    {$rename:{points:"score"}}        //rename points to score
)


db.employees.updateMany(  
    {},
    {$unset:{score:""}}        //delete score
)

db.employees.updateMany(  
    {},
    {$push:{skills:"java"}}        //add new field push adds in array field
)
db.employees.updateMany(  
    {},
    {$push:{skills:"python"}}        
)


db.employees.updateMany(  
    {email:"smith@gmail.com"},
    {$pull:{skills:"mern"}}        //delete score field
)

db.employees.updateMany(  
    {email:"smith@gmail.com"},
    {$addToSet:{skills:"mern"}}        //if not exist then add
)

db.employees.updateMany(  
    {email:"smith@gmail.com"},
    {$pop:{skills:-1}}        
)

db.employees.updateOne(
    {email:"brain@gmail.com"},
    {$set:{name:"Brain"}},
    {upsert:true}
)

db.employees.deleteOne(
    {email:"brain@gmail.com"}
)

db.employees.deleteMany(
    {department:"IT"}
)
