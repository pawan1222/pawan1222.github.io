db.posts.insertOne({_id:"p1",post:"post1"})
db.posts.insertOne({_id:"p2",post:"post2"})


lpua> db.posts.find()
[ { _id: 'p1', post: 'post1' }, { _id: 'p2', post: 'post2' } ]

db.comments.insertOne({
    _id:"c1",
    pid:"p1",
    comment:"This is comment 1 of post 1"
})
db.comments.insertOne({
    _id:"c2",
    pid:"p1",
    comment:"This is comment 2 of post 1"
})
db.comments.insertOne({
    _id:"c3",
    pid:"p2",
    comment:"This is comment 1 of post 2"
})
db.comments.insertOne({
    _id:"c4",
    pid:"p2",
    comment:"This is comment 2 of post 2"
})
db.comments.insertOne({
    _id:"c5",
    pid:"p2",
    comment:"This is comment 3 of post 2"
})

lpua> db.comments.find()
[
  { _id: 'c1', pid: 'p1', comment: 'This is comment 1 of post 1' },
  { _id: 'c2', pid: 'p1', comment: 'This is comment 2 of post 1' },
  { _id: 'c3', pid: 'p2', comment: 'This is comment 1 of post 2' },
  { _id: 'c4', pid: 'p2', comment: 'This is comment 2 of post 2' },
  { _id: 'c5', pid: 'p2', comment: 'This is comment 3 of post 2' }
]


db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
        }
    }
])


db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
        }
    },
    {$unwind:"$comments"}
])


