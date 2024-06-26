"use client"
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsReducer";
function ProductSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <div className="container mx-auto px-5 lg:px-20 py-20" >
      <h2 className="text-2xl font-bold my-5 dark:text-white">Our Latest Products</h2>
      <ProductList />
      </div>
  )
}


export default ProductSection;
