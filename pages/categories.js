import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { getShopCategories } from '../helpers/shop-details';

const Shop = () => {
  const [categories, setCategories] = useState('');

  useEffect(() => {
    const categories = getShopCategories();
    categories.then(result => {
      let categoriesData = {};

      result.data.forEach((item, i) => {
        let imgUrl = null;
        if(item.Category_Image) {imgUrl = item.Category_Image.formats.medium.url};
        categoriesData[item.Title] = imgUrl;
      });

      console.log(categoriesData);
      setCategories(categoriesData);
    })
    .catch(err => {
      console.log(err)
    })

  }, []);

  const setCategoriesDisplay = () => {
    if(Object.entries(categories).length > 0) {
      return Object.keys(categories).map(key => {
        return (
          <option value={key}>{key}</option>
        )
      })
    }
  }

  const setCategoriesImgs = () => {
    console.log('in set cat');
    console.log(categories)
    if(Object.entries(categories).length > 0) {
      return Object.keys(categories).map(key => {
        return (
          <div className="col-md-4 col-sm-6 no-padding-col catImgspacing" id="">
          <div className="caption text-center">
              <h4 className="caption-title">{key}</h4>
          </div>
              <div className="thumbnail no-border no-padding">
                  <div className="media">
                      <a className="media-link" href="#/products/{{product.productId}}">
                          <img src={`http://localhost:1337${categories[key]}`} alt=""/>
                      </a>
                  </div>
                  <div className="caption text-center">
                      <h4 className="caption-title">{key}</h4>
                      <div className="price">price goes here</div>
                  </div>
              </div>
          </div>
        )
      })
        }
  }

  return (
  <div className="content-area">
      <section className="page-section">
          <div className="container-fluid container-shop">
              <div className="row">
                  <div className="col-md-12 col-lg-12 content" id="content">

                      <div className="shop-sorting">
                          <div className="row">
                              <div className="col-sm-12 text-center">
                                  <span className="hidden-xs">Sort by</span>
                                  <span className="select-wrapper hidden-xs">
                                      <select className='selectclassName'>
                                          <option value="name">Product Name</option>
                                          <option value="-price">HIGHEST PRICE</option>
                                          <option value="price">LOWEST PRICE</option>
                                      </select>
                                  </span>

                                  <span>Show me</span>
                                  <span className="select-wrapper">
                                      <select >
                                          <option value="" selected>All Products</option>
                                          {setCategoriesDisplay()}
                                      </select>
                                  </span>
                              </div>
                          </div>
                      </div>

                      <div className="row products grid">
                            {setCategoriesImgs()}
                      </div>

                  </div>
              </div>
          </div>
      </section>
  </div>
)
}
export default Shop
