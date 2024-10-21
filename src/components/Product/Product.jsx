const Product = ({ info }) => {
    console.log(info.phone);
    return (
        <div>
            <h2>This is from product child</h2>
        </div>
    );
};

export default Product;