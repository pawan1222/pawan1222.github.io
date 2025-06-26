db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1}},   //also known as agregation pipeline
    {$sort: {salary:1}},             // sort in ascending order
    {$limit:3}                      // display only first 3 
])


db.employees.aggregate([
    {$group:
        { _id: "$department",
            total: {$sum: "$salary"}
        }
    }
])

db.employees.aggregate([
    {$project:{empName:"$name"}}
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus: {$multiply:["$salary", 2]}
    }
  }
])



db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,email:1,
        annual:{$multiply:["$salary",12]}
    }}
])

// display name,email,salary of IT employees

db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,email:1,salary:1}}
])

// display annual salary of all employees

db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,email:1,
        annual:{$multiply:["$salary",12]}
    }}
])


// display annual salary whose greater than 3000 and salary as ctc



db.student.insertOne({
    "name":"Alice Johnson",
    "age": 23,
    "courses":["math", "physics"],
    "enrolled": true
})

db.student.insertMany([
    {name: "Tom", age:22},
    {name: "Sara", age:24},
    {name: "Mike", age:21}
])

db.student.aggregate([    // calculate average age 
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" }
    }
  }
])

// update the age alice johnson to 24
db.student.updateOne(
    {name:"Alice Johnson"},
    {$set:{age:24}}
)

// add course chemistry if not exist
db.student.updateMany(  
    {name:"Alice Johnson"},
    {$addToSet:{courses:"chemistry"}}    
)

// increment age by one all of the students
db.student.updateMany(
    {},
    {$inc:{age:1}}
)