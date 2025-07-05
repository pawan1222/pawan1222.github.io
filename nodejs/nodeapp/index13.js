import dotenv from 'dotenv'
dotenv.config()

// const DBuser = process.env.DBUSER
// const dbpass = process.env.DBPASS

const DBuser = encodeURIComponent(process.env.DBUSER)  // use for send as it is bascially used in deployment
const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(DBuser,dbpass);