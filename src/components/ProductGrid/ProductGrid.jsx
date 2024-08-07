import React from 'react'
import './ProductGrid.css'
import useFetch from '../../Hook/useFetch'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'

const ProductGrid = () => {
    const { products, loading, error } = useFetch();
    const input = useSelector((state) => state.search.input);
    const filters = useSelector((state) => state.search.filters);


    const filteredProducts = products.filter((product) => (
        product.title.toLowerCase().includes(input.toLowerCase()) &&
        filters.every(filter => product.title.includes(filter))
    ))


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="productgrid">
            {
                filteredProducts.map(product => (
                    <ProductCard key={product.id} id={product.id} image={product.image} name={product.title} price={product.price} />
                ))
            }
        </div>
    )
}

export default ProductGrid