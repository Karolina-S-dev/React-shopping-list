const FormProductsList = ({ formData }) => {
  return (
    <>
      <div className="form-products-list">
        <h3>Products in a basket</h3>
        {formData.products.length === 0 ? (
          <p>No products yet</p>
        ) : (
          formData.products.map((product, index) => (
            <div key={index} className="product-row">
              <p className="product-name">{product.name}</p>
              <p className="list-product-amount">{product.amount}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FormProductsList;
