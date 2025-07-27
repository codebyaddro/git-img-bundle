import { useState } from 'react';
import { FaLock, } from 'react-icons/fa';



/* if user paid the ammount , he will be redirected to DownloadPage */

const CheckOut = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setCardNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Process payment logic here
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful! Your download will begin shortly.');
    }, 2000);
  };

  const products = [
    {
      id: 1,
      name: 'Premium E-book: Web Development Guide',
      price: 29.99,
      type: 'E-book',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Custom Logo Design',
      price: 49.99,
      type: 'Digital Art',
      image: 'https://via.placeholder.com/80',
    },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <p className="mt-2 text-sm text-gray-600">
            Complete your purchase securely
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:w-2/3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-6">
                <FaLock className="text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Secure checkout
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Contact information
                  </h2>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Payment details
                  </h2>
                  <div className="mb-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="card-number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                        placeholder="Enter your Phone number"
                        value={phoneNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                     
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder=""
                        
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    id="save-info"
                    name="save-info"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:outline-none border-gray-300 rounded"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">
                    Save this information for next time
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-3 px-4 rounded-md hover:bg-teal-600 focus:outline-none transition-all ease-in-out duration-300  flex justify-center items-center"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaLock className="mr-2" />
                      Pay ${total.toFixed(2)}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order summary
              </h2>

              <div className="space-y-4 mb-6">
                {products.map((product) => (
                  <div key={product.id} className="flex items-start">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.type}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs text-gray-500">
                  By completing your purchase, you agree to our{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                  . Your digital products will be available for immediate download after payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;