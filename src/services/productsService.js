import axios from 'axios'

class ProductsService{
    static getAllProdycts = () => axios.get('https://dummyjson.com/products')
}

export default ProductsService