const axios = require('axios');

const getShopCategories = async () => {
    const result = await axios.get('http://localhost:1337/categoriesnorelation');
    return result;
}

const getShopProducts = async categoryTitle => {
    const result = await axios.get(`http://localhost:1337/categories?Title=${categoryTitle}`);
    return result;
}

 exports.getShopCategories = getShopCategories;
 exports.getShopProducts = getShopProducts;
