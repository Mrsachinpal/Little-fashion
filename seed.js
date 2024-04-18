const Product = require('./models/Products');

const products = [
    {
        Pname: "Tree pot",
        Pimg: "https://plus.unsplash.com/premium_photo-1680125270088-d0eb9ac39cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D",
        Pprice: 2500,
        Pshortdesc: "Original package design from house",
        Pmaindesc: "Original package design from house Original package design from house Original package design from house"
    },
    {
        Pname: "Yellow trending Suit for Women",
        Pimg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNoaXJ0fGVufDB8fDB8fHww",
        Pprice:3999,
        Pshortdesc: "Costume package",
        Pmaindesc: " Costume packageCostume packageCostume packageCostume package"
    },
    {
        Pname: "Juice Drink",
        Pimg: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8anVpY2UlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D",
        Pprice:250,
        Pshortdesc: " juice Drink For good Health",
        Pmaindesc: "juice Drink For good Health juice Drink For good Health juice Drink For good Health"
    },
    {
        Pname: "Boys Blue Denim Pant",
        Pimg: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
        Pprice:5999,
        Pshortdesc: "High Quality Denim Pant",
        Pmaindesc: "High Quality Denim Pant High Quality Denim Pant High Quality Denim Pant High Quality Denim Pant"
    },
    {
        Pname: "Ipad 11th gen",
        Pimg: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
        Pprice: 120000,
        Pshortdesc: "The ultimate iPad experience.",
        Pmaindesc: "The ultimate iPad experience with the most advanced technology. The ultimate iPad experience with the most advanced technology."
    },
    {
        Pname: "Water Bottle in Sea Green Color",
        Pimg: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Pprice:1599,
        Pshortdesc: "stainless steel water bottle",
        Pmaindesc: "stainless steel water bottle stainless steel water bottle stainless steel water bottle"
    }
]

async function seedDb(){
   await Product.insertMany(products)  
    console.log('Seeded in DataBase'); 
}
module.exports=seedDb