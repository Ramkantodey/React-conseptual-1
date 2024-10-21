import Product from "../Product/Product";
const Products = ({ info }) => {
    return (
        <div>
            <h1>I am from Products</h1>
            <Product info={info} />
        </div>
    );
};

export default Products;