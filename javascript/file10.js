// shopping cart

let cart={};
const product=[
    {id: 1, name: "product 1", price: 25},
    {id: 2, name: "product 2", price: 35},
    {id: 3, name: "product 3", price: 45}
]

const showproduct= () => {
    console.log("***product list***")
    let str= ``
    product.map(value => {
        str+= `${value.id} - ${value.name} - ${value.price}\n`;
    })
    console.log(str);
}
showproduct();


const addtocart=(id)=>{
    cart={...cart,[id]:1};
};

addtocart(1);
addtocart(2);
addtocart(3);
// console.log(cart);

const showcart=()=>{
    console.log("***cart list***");
    let str=""
    product.map((value)=>{
        cart[value.id] && 
        (str += `${value.name} - ${value.price} - ${cart[value.id]} - ${cart[value.id]*value.price}\n`);
    })
    console.log(str);
}

showcart();

const increment=(id)=>{
    cart={...cart,[id]:cart[id]+1};
}

increment(1);
showcart();

const decrement=(id)=>{
    cart={...cart,[id]:cart[id]-1};
}

decrement(1);
showcart();

const ordervalue=product.reduce((sum, value)=>{
    return sum+ (value.price * cart[value.id] ?? 0);
},0);

console.log(`total cost - ${ordervalue}`);