import { useState } from "react";
import "../assets/css/shopping-form.css";

const ShoppingForm = ({ setShoppingData }) => {
  const [formData, setFormData] = useState({
    title: "",
    shoppingDate: "",
    product: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //walidacja formularza
    if (formData.title === "") {
      return;
    }
    if (formData.shoppingDate === "") {
      return;
    }
    if (formData.product === "") {
      return;
    }
    if (formData.product <= 0) {
      return;
    }

    setShoppingData((prev) => [
      ...prev,
      {
        title: formData.title,
        shoppingDate: formData.shoppingDate,
        products: [
          {
            name: formData.product,
            amount: Number(formData.amount),
            bought: false,
          },
        ],
      },
    ]);

    // czyszczenie formularza
    setFormData({
      title: "",
      shoppingDate: "",
      product: "",
      amount: 0,
    });
  };

  return (
    <>
      <form className="shopping-form">
        <p className="shopping-form-title">Add a shopping list</p>

        {/*  -------TITLE------ */}
        <label htmlFor="title" className="list-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Shopping list title"
          value={formData.title}
          onChange={(event) => {
            console.log(event.target.value);
            setFormData((prev) => ({
              ...prev,
              title: event.target.value,
            }));
          }}
        />

        {/*  -------DATE------ */}
        <label htmlFor="shoppingDate">Shopping date</label>
        <input
          className="form-date common-style"
          type="date"
          id="shoppingDate"
          value={formData.shoppingDate}
          onChange={(event) => {
            console.log(event.target.value);
            setFormData((prev) => ({
              ...prev,
              shoppingDate: event.target.value,
            }));
          }}
        />

        {/*  -------PRODUCT------ */}
        <label htmlFor="product">Product</label>
        <input
          type="text"
          id="product"
          placeholder="Product name"
          value={formData.product}
          onChange={(event) => {
            console.log(event.target.value);
            setFormData((prev) => ({
              ...prev,
              product: event.target.value,
            }));
          }}
        />

        {/*  -------AMOUNT------ */}
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={(event) => {
            console.log(event.target.value);
            setFormData((prev) => ({
              ...prev,
              amount: event.target.value,
            }));
          }}
        />

        <button className="form-button" onClick={handleSubmit}>
          Add list
        </button>
      </form>
    </>
  );
};

export default ShoppingForm;
