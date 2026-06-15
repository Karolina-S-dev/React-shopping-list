import { useState } from "react";
import "../assets/css/shopping-form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormProductsList from "./FormProductsList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ShoppingForm = ({ setShoppingData }) => {
  const [formData, setFormData] = useState({
    title: "",
    shoppingDate: "",
    completed: false,
    product: "",
    amount: "",
    bought: false,
    products: [],
  });

  const [startDate, setStartDate] = useState(new Date());

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.product,
      bought: formData.bought,
      amount: Number(formData.amount),
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
      amount: "",
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
    if (formData.products.length === 0 && formData.product === "") {
      toast.error("Aby dodać listę zakupów musisz podać produkt", {
        position: "top-center",
        className: "toast-error",
      });
      return;
    }

    const products = [...formData.products];
    if (products.length === 0 && formData.product !== "") {
      products.push({
        name: formData.product,
        amount: Number(formData.amount),
        bought: formData.bought,
      });
    }

    setShoppingData((prev) => [
      ...prev,
      {
        title: formData.title,
        shoppingDate: formData.shoppingDate.toLocaleDateString(),
        completed: false,
        products: products,
        createdDate: Date.now(),
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
      amount: "",
      bought: false,
      products: [],
    });
  };

  return (
    <>
      <div className="header-flex-row">
        <form className="shopping-form box-shadow">
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
              <DatePicker
                id="shoppingDate"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFormData((prev) => ({
                    ...prev,
                    shoppingDate: date,
                  }));
                }}
                showIcon
                toggleCalendarOnIconClick
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
                    amount: Number(event.target.value),
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
        <FormProductsList formData={formData} />
      </div>
    </>
  );
};

export default ShoppingForm;
