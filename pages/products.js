import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getShopProducts } from '../helpers/shop-details';

const Products = () => {
  const [shopProducts, setShopProducts] = useState('');

  const router = useRouter();

  useEffect(() => {
    const apiProducts = getShopProducts('Handyman');
    apiProducts.then(result => {
      setShopProducts(result.data[0].products);
    })
    .catch(err => {
      console.log(err)
    })

  }, []);

  const setProductsDisplay = () => {
    // if(Object.entries(products).length > 0) {
    //   return Object.keys(products).map(key => {
    //     return (
    //       <option value={key}>{key}</option>
    //     )
    //   })
    // }
  }

  const setProductsImgs = () => {
    console.log(Array.isArray(shopProducts))
    if(shopProducts.length > 0) {
      return shopProducts.map(el => {
        console.log('in set cat');
        console.log(el);
        return (
          <div className="col-md-4 col-sm-6 no-padding-col catImgspacing" id="">
          <div className="caption text-center">
              <h4 className="caption-title">{el.Title}</h4>
          </div>
              <div className="thumbnail no-border no-padding">
                  <div className="media">
                      <a className="media-link" href="#/products/{{el.Title}}">
                          <img src={`http://localhost:1337${el.ProductImages[0].formats.medium.url}`} alt=""/>
                      </a>
                  </div>
                  <div className="caption text-center">
                      <h4 className="caption-title">{el.Title}</h4>
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
                                          {setProductsDisplay()}
                                      </select>
                                  </span>
                              </div>
                          </div>
                      </div>

                      <div className="row products grid">
                            {setProductsImgs()}
                      </div>

                  </div>
              </div>
          </div>
      </section>
  </div>
)
}
export default Products
