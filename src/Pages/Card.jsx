import { useState } from 'react';
import './Card.css'

export default function Card(){
    const[prod,setProd]=useState([
        {
            image:'https://www.pngkey.com/png/full/932-9328480_apples-png-image-red-apple-fruit.png',
            title:'Apple',
            price:'Rs.180.00',
            isAvailable:true
        },
        {
            image:'http://pluspng.com/img-png/fruits-png-hd-fruit-free-png-image-png-image-2500.png',
            title:'Orange',
            price:'Rs.90.00',
            isAvailable:true
        },
        {
            image:'https://www.pngall.com/wp-content/uploads/12/Papaya-Fruit-PNG-HD-Image.png',
            title:'Papaya',
            price:'Rs.50.00',
            isAvailable:false
        },
        {
            image:'https://buzzghana.com/wp-content/uploads/2015/08/banana-e1439973458806.png',
            title:'Banana',
            price:'Rs.130.00',
            isAvailable:true
        },
        {
            image:'http://purepng.com/public/uploads/large/purepng.com-dragon-fruitfruitsdragon-fruitpitayapitahaya-981524762841msxvf.png',
            title:'Dragan Fruit',
            price:'Rs.400.00',
            isAvailable:false
        },
        {
            image:'https://pluspng.com/img-png/cherry-png-cherries-png-image-3949.png',
            title:'Cherry',
            price:'Rs.100.00',
            isAvailable:true
        },     
        {
            image:'https://www.nicepng.com/png/full/963-9639319_green-apple-green-apple-png.png',
            title:'Green Apple',
            price:'Rs.120.00',
            isAvailable:false
        },
        {
            image:'http://pluspng.com/img-png/grapes-hd-png-white-grape-3000.png',
            title:'Grapes',
            price:'Rs.150.00',
            isAvailable:true
        },
        {
            image:'https://freepngimg.com/thumb/watermelon/1-watermelon-png-image.png',
            title:'Watermelon',
            price:'Rs.40.00',
            isAvailable:false
        },
        {
            image:'http://www.pngall.com/wp-content/uploads/2016/04/Grape-PNG.png',
            title:'Grapes',
            price:'Rs.150.00',
            isAvailable:true
        },
        {
            image:'http://pluspng.com/img-png/fruits-png-hd-fruit-free-png-image-png-image-2500.png',
            title:'Orange',
            price:'Rs.90.00',
            isAvailable:true
        },
        {
            image:'https://www.pngall.com/wp-content/uploads/12/Papaya-Fruit-PNG-HD-Image.png',
            title:'Papaya',
            price:'Rs.50.00',
            isAvailable:false
        }

    ])

    
    const [userSearch,setUserSearch]=useState('')
    return(
        <>
        <div className="header">
            <h2>Fruits</h2>
        </div>
        <div className="container">
            <div className="input-field">
                <input type='text' placeholder='Serch Fruits Name' onChange={(e)=>{setUserSearch(e.target.value)}}></input>
            </div>
            {
                prod.filter((prod)=>{
                    return userSearch.toLowerCase() === '' ? prod : prod.title.toLowerCase().includes(userSearch)             
                 }).map((prod,key)=>{
                    return(
                        <div className="card" key={key}>
                            <img src={prod.image}></img>
                            <h2>{prod.title}</h2>
                            <div className="cardfooter">
                                <p>{prod.price}</p>
                                <p className={prod.isAvailable ? 'available' : 'not-available'}>
                                    {prod.isAvailable ? 'Available' : 'Out Of Stock'}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )

}