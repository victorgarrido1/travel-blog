// src/components/MobilePage.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFirebaseStorage from "../hooks/useFireBaseStorage";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Cupcake Order Form</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Product Selection */}
        <div>
          <p className="text-lg font-semibold mb-4">Select and order your cupcakes:</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Carrot Cupcake', price: '$1.67', image: '🧁' },
              { name: 'Peppermint Chocolate', price: '$2.50', image: '🧁' },
              { name: 'Mango Cheesecake', price: '$3.45', image: '🧁' },
              { name: 'Mocha Cupcake', price: '$4.00', image: '🧁' },
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-orange-500">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* this is the order suammrt and form section  */}
        <div className="bg=white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary Section</h2>
            <p> Carrot Cupcake x3 - $6.00</p>
            <p> Mocha Cupcake x3 - $4.00</p>
            <hr  className="my-4"/>
            <p className="font-semibold">Total Price $10.00</p>

            {/* Thisis where the from section will go in place */}
            <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <p>Carrot Cake x3 - $6.00</p>
            <p>Mocha Cupcake x3 - $4.00</p>
            <hr className="my-4" />
            <p className="font-semibold"> Total Price: $10.00</p>
            </form>

        </div>
      </div>
    </div>
  );
};

export default MobilePage;
