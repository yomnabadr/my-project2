import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export let CartContext = createContext();


export default function CartContextProvider({ children }) {

    let headers = {
        token: localStorage.getItem('userTOken')
    }

    const [cart, setCart] = useState(null)
    const[ wishList , setWishList] = useState(null)

    async function checkout(shippingAddress) {

        try {

            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers
            });
            console.log(data);
            window.location.href = data.session.url            
           


        } catch (err) {
            console.log(err);

        }


    }


    async function AddProductToCart(productId) {

        try {

            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId: productId
            }, {
                headers
            });
            console.log(data);
            toast.success(data.message);
            setCart(data)


        } catch (err) {
            console.log(err);

        }


    }

    async function deleteProduct(productId) {

        try {

            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                {
                    headers
                });
            console.log(data);
         
            setCart(data)


        } catch (err) {
            console.log(err);

        }


    }

    async function updataProductCount(productId, count) {

        if (count > 0) {
            try {

                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                    count
                }, {
                    headers
                });
                console.log(data);

                setCart(data)


            } catch (err) {
                console.log(err);

            }

        }else{
            deleteProduct(productId)
        }




    }

    async function getCart() {

        try {

            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
                {
                    headers
                });
            console.log(data);
            setCart(data);


        } catch (err) {
            console.log(err);

        }
    }

    async function getWishList() {

        try {

            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
                {
                    headers
                });
            console.log(data);
           setWishList(data);


        } catch (err) {
            console.log(err);

        }
    }

    async function AddProductToWishList(productId) {

        try {

            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId: productId
            }, {
                headers
            });
            console.log(data);
            toast.success(data.message);
           setWishList(data)


        } catch (err) {
            console.log(err);

        }


    }

    async function updataProductWishList(productId, count) {

        if (count > 0) {
            try {

                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                    count
                }, {
                    headers
                });
                console.log(data);

               setWishList(data)


            } catch (err) {
                console.log(err);

            }

        }else{
            deleteProduct(productId)
        }




    }

    async function deleteWishList(productId) {

        try {

            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
                {
                    headers
                });
            console.log(data);
         
            setWishList(data)


        } catch (err) {
            console.log(err);

        }


    }


    useEffect(()=>{
        getCart()
        getWishList()
    },[])
    return <>
        <CartContext.Provider value={{ AddProductToWishList,getWishList, setWishList, wishList, deleteWishList,updataProductWishList, checkout ,deleteProduct,updataProductCount, AddProductToCart, getCart, cart, setCart }}>
            {children}
        </CartContext.Provider>


    </>
}