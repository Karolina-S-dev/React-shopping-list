import { useState } from "react";
import "../assets/css/shopping-form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingForm = ({ setShoppingData }) => {
  const [formData, setFormData] = useState({
    title: "",
    shoppingDate: "",
    completed: false,
    product: "",
    amount: 0,
    bought: false,
    products: [],
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.product,
      bought: formData.bought,
      amount: formData.amount,
    };

    if (formData.product === "") {
      toast.error("Aby dodać produkt musisz wpisać nazwę", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }
    if (formData.amount <= 0) {
      toast.error("Aby dodać produkt musisz wpisać ilość", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, newProduct],
      // czyszczenie formularza produktu
      product: "",
      amount: 0,
    }));
  };

  console.log(formData.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    //walidacja formularza
    if (formData.title === "") {
      toast.error("Aby dodać listę zakupów musisz podać tytuł", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }
    if (formData.shoppingDate === "") {
      toast.error("Aby dodać listę zakupów musisz podać datę", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }
    if (formData.products.length === 0 && formData.product ==="") {
      toast.error("Aby dodać listę zakupów musisz podać produkt", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }

    setShoppingData((prev) => [
      ...prev,
      {
        title: formData.title,
        shoppingDate: formData.shoppingDate,
        completed: false,
        products: formData.products,
      },
    ]);
    toast.success("Dodano listę zakupów", {
      position: "top-center",
      className: "toast-success",
    });

    // czyszczenie formularza
    setFormData({
      title: "",
      shoppingDate: "",
      completed: false,
      product: "",
      amount: 0,
      bought: false,
      products: [],
    });
  };

  return (
    <>
      <form className="shopping-form">
        <div className="shopping-form-header">
          <ion-icon name="bag-outline"></ion-icon>
          <p className="shopping-form-title">Add a shopping list</p>
        </div>
        <div className="flex-row">
          {/*  -------TITLE------ */}
          <div className="flex-col">
            <label htmlFor="title" className="list-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Shopping list title"
              value={formData.title}
              onChange={(event) => {
                // console.log(event.target.value);
                setFormData((prev) => ({
                  ...prev,
                  title: event.target.value,
                }));
              }}
            />
          </div>
          {/*  -------DATE------ */}
          <div className="flex-col">
            <label htmlFor="shoppingDate">Shopping date</label>
            <input
              className="form-date common-style"
              type="date"
              id="shoppingDate"
              value={formData.shoppingDate}
              onChange={(event) => {
                // console.log(event.target.value);
                setFormData((prev) => ({
                  ...prev,
                  shoppingDate: event.target.value,
                }));
              }}
            />
          </div>
        </div>
        {/*  -------PRODUCT------ */}
        <div className="flex-row">
          <div className="flex-col">
            <label htmlFor="product">Product</label>
            <input
              type="text"
              id="product"
              placeholder="Product name"
              value={formData.product}
              onChange={(event) => {
                // console.log(event.target.value);
                setFormData((prev) => ({
                  ...prev,
                  product: event.target.value,
                }));
              }}
            />
          </div>

          {/*  -------AMOUNT------ */}
          <div className="flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={(event) => {
                // console.log(event.target.value);
                setFormData((prev) => ({
                  ...prev,
                  amount: event.target.value,
                }));
              }}
            />
          </div>
        </div>

        <button className="form-button" onClick={handleAddProduct}>
          <span>+</span> Add product
        </button>

        <button className="form-button" onClick={handleSubmit}>
          <span>+</span> Add list
        </button>
      </form>
    </>
  );
};

export default ShoppingForm;
