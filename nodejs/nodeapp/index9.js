import bcrypt from 'bcrypt'

const pwd = "pass1234"

const hashedpwd = await bcrypt.hash(pwd, 10);    //pasword hashed
console.log(hashedpwd);

const check= await bcrypt.compare(pwd,"$2b$10$h2V8AAmPJn.T1B4eS0EX/OMSE5TWP4AlcdR1I7ob.mAXTiZDS45ZC");   //hashed pasword and original pwd check its same or not
console.log(check);