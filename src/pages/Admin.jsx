import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Admin() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const [adminProducts, setAdminProducts] = useState(
    JSON.parse(localStorage.getItem("adminProducts")) || []
  );

  const [formData, setFormData] = useState({
    name: "",
    category: "Beef",
    price: "",
    description: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const isAdminLoggedIn =
      localStorage.getItem("adminLoggedIn") === "true";

    if (!isAdminLoggedIn) {
      navigate("/admin-login");
    }
  }, [navigate]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));

      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      !formData.description ||
      !formData.image
    ) {
      alert("Please fill all fields and select a product image.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      unit: "1 KG",
      image: formData.image,
      description: formData.description,
    };

    const updatedProducts = [
      ...adminProducts,
      newProduct,
    ];

    setAdminProducts(updatedProducts);

    localStorage.setItem(
      "adminProducts",
      JSON.stringify(updatedProducts)
    );

    window.dispatchEvent(new Event("productsUpdated"));

    alert("Product added successfully!");

    setFormData({
      name: "",
      category: "Beef",
      price: "",
      description: "",
      image: "",
    });

    setImagePreview("");
  };

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = adminProducts.filter(
      (product) => product.id !== id
    );

    setAdminProducts(updatedProducts);

    localStorage.setItem(
      "adminProducts",
      JSON.stringify(updatedProducts)
    );

    window.dispatchEvent(new Event("productsUpdated"));
  };

  const updateOrderStatus = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? {
            ...order,
            status,
          }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  const deleteOrder = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this delivered order?"
    );

    if (!confirmDelete) return;

    const updatedOrders = orders.filter(
      (order) => order.id !== id
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    alert("Delivered order deleted successfully!");
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");

    alert("Admin logged out successfully!");

    navigate("/");
  };

  const totalProducts =
    products.length + adminProducts.length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12">

          <div>
            <p className="text-red-500 uppercase tracking-[4px] text-sm font-bold mb-3">
              Admin Panel
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              Fresh Meat{" "}
              <span className="text-red-600">
                Dashboard
              </span>
            </h1>

            <p className="text-gray-400 mt-3">
              Manage products and customer orders.
            </p>
          </div>

          <button
            onClick={logout}
            className="
              bg-red-600
              hover:bg-red-500
              text-white
              px-7
              py-3
              rounded-xl
              font-bold
              transition
              shadow-lg
              shadow-red-900/30
            "
          >
            🚪 Logout
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-[#151515] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Products
            </p>

            <h2 className="text-4xl font-extrabold text-white mt-3">
              {totalProducts}
            </h2>
          </div>

          <div className="bg-[#151515] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Orders
            </p>

            <h2 className="text-4xl font-extrabold text-white mt-3">
              {orders.length}
            </h2>
          </div>

          <div className="bg-[#151515] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Delivered Orders
            </p>

            <h2 className="text-4xl font-extrabold text-green-500 mt-3">
              {deliveredOrders}
            </h2>
          </div>

          <div className="bg-[#151515] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Pending Orders
            </p>

            <h2 className="text-4xl font-extrabold text-red-500 mt-3">
              {pendingOrders}
            </h2>
          </div>

        </div>

        <div className="bg-[#151515] border border-white/10 rounded-3xl p-8 mb-12">

          <h2 className="text-3xl font-extrabold mb-8">
            Add New Product
          </h2>

          <form
            onSubmit={addProduct}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Example: Beef Ribs"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  text-white
                  px-4 py-3
                  rounded-xl
                  outline-none
                  focus:border-red-600
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  text-white
                  px-4 py-3
                  rounded-xl
                  outline-none
                  focus:border-red-600
                "
              >
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Mutton">Mutton</option>
                <option value="Seafood">Seafood</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="1200"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  text-white
                  px-4 py-3
                  rounded-xl
                  outline-none
                  focus:border-red-600
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Product Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  text-gray-300
                  px-4 py-3
                  rounded-xl
                "
              />
            </div>

            <div className="md:col-span-2">

              <label className="block text-gray-300 font-semibold mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Fresh and premium quality meat."
                rows="4"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  text-white
                  px-4 py-3
                  rounded-xl
                  outline-none
                  focus:border-red-600
                  resize-none
                "
              ></textarea>

            </div>

            {imagePreview && (
              <div className="md:col-span-2">

                <p className="text-gray-300 font-semibold mb-3">
                  Image Preview
                </p>

                <img
                  src={imagePreview}
                  alt="Preview"
                  className="
                    w-48
                    h-40
                    object-cover
                    rounded-xl
                    border
                    border-red-600
                  "
                />

              </div>
            )}

            <div className="md:col-span-2">

              <button
                type="submit"
                className="
                  w-full
                  bg-red-600
                  hover:bg-red-500
                  text-white
                  py-4
                  rounded-xl
                  font-extrabold
                  text-lg
                  transition
                "
              >
                + Add Product
              </button>

            </div>

          </form>

        </div>

        {adminProducts.length > 0 && (
          <div className="mb-12">

            <h2 className="text-3xl font-extrabold mb-7">
              Products Added by Admin
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {adminProducts.map((product) => (
                <div
                  key={product.id}
                  className="
                    bg-[#151515]
                    border border-white/10
                    rounded-2xl
                    overflow-hidden
                  "
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">

                    <p className="text-red-500 text-xs uppercase font-bold">
                      {product.category}
                    </p>

                    <h3 className="text-xl font-bold mt-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {product.description}
                    </p>

                    <p className="text-red-500 font-bold text-xl mt-4">
                      Rs. {product.price}
                    </p>

                    <button
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                      className="
                        mt-4
                        w-full
                        border
                        border-red-600
                        text-red-500
                        hover:bg-red-600
                        hover:text-white
                        py-2
                        rounded-lg
                        font-bold
                        transition
                      "
                    >
                      Delete Product
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

        <div>

          <h2 className="text-3xl font-extrabold mb-7">
            Order Management
          </h2>

          {orders.length === 0 ? (

            <div className="bg-[#151515] border border-white/10 rounded-2xl p-10 text-center">

              <p className="text-gray-400">
                No orders available yet.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="
                    bg-[#151515]
                    border border-white/10
                    rounded-2xl
                    p-6
                  "
                >

                  <div className="flex flex-col md:flex-row md:justify-between gap-5">

                    <div>

                      <h3 className="text-xl font-bold">
                        Order #{order.id}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Customer: {order.customer?.name}
                      </p>

                      <p className="text-gray-400">
                        Phone: {order.customer?.phone}
                      </p>

                      <p className="text-gray-400">
                        City: {order.customer?.city}
                      </p>

                      <p className="text-gray-400">
                        Address: {order.customer?.address}
                      </p>

                    </div>

                    <div className="text-left md:text-right">

                      <p className="text-red-500 text-2xl font-extrabold">
                        Rs. {order.total}
                      </p>

                      <p className="text-gray-500 text-sm mt-2">
                        {order.date}
                      </p>

                      <select
                        value={order.status || "Pending"}
                        onChange={(e) =>
                          updateOrderStatus(
                            order.id,
                            e.target.value
                          )
                        }
                        className="
                          mt-4
                          bg-[#0b0b0b]
                          border border-white/10
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          outline-none
                        "
                      >

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                      </select>

                      {order.status === "Delivered" && (
                        <button
                          type="button"
                          onClick={() =>
                            deleteOrder(order.id)
                          }
                          className="
                            mt-4
                            w-full
                            bg-red-600
                            hover:bg-red-500
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            font-bold
                            transition
                          "
                        >
                          🗑️ Delete Order
                        </button>
                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default Admin;