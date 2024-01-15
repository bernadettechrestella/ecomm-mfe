import axios from "axios";

export const getProducts = async (callback) => {
    try {
        const res = await axios.get(
            'https://dummyjson.com/products?limit=0',
        );
        callback(res.data.products);
    } catch (error) {
        console.log(error);
    }
}