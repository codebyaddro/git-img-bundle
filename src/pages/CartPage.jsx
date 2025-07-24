/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FiShoppingCart, FiTrash2, FiArrowLeft, FiCreditCard } from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { NavLink } from 'react-router';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Advanced React E-book',
      price: 29.99,
      image: 'https://via.placeholder.com/80',
      category: 'E-books',
      author: 'React Experts',
      fileType: 'PDF',
      fileSize: '12.5 MB'
    },
    {
      id: 2,
      name: 'UI Design Templates Pack',
      price: 19.99,
      image: 'https://via.placeholder.com/80',
      category: 'Design Assets',
      author: 'Creative Studio',
      fileType: 'ZIP (PSD, AI, SVG)',
      fileSize: '45.2 MB'
    },
    {
      id: 3,
      name: 'JavaScript Masterclass Videos',
      price: 49.99,
      image: 'https://via.placeholder.com/80',
      category: 'Video Courses',
      author: 'JS Academy',
      fileType: 'MP4',
      fileSize: '3.2 GB'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax - discount;

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (!couponCode) return;
    
    setIsApplyingCoupon(true);
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'SAVE20') {
        setDiscount(subtotal * 0.2); // 20% discount
        alert('Coupon applied successfully! 20% discount added.');
      } else {
        alert('Invalid coupon code');
      }
      setIsApplyingCoupon(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <NavLink to='/products' className="flex items-center text-teal-600  mr-4">
            <FiArrowLeft className="mr-1" /> Continue Shopping
          </NavLink>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FiShoppingCart className="mr-3" /> Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FiShoppingCart className="text-gray-400 text-3xl" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any digital products yet.</p>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Browse Products
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-teal-50 shadow rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-400">
                  <h2 className="text-lg font-medium text-gray-900">
                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in Cart
                  </h2>
                </div>

                <div className="divide-y divide-gray-400">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category} by {item.author}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-500">
                          <div>
                            <span className="font-medium">Format:</span> {item.fileType}
                          </div>
                          <div>
                            <span className="font-medium">Size:</span> {item.fileSize}
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-lg font-bold text-gray-900">
                            ${item.price.toFixed(2)}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Instant download</span>
                            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-teal-50 shadow rounded-lg p-6 sticky top-4">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 my-3"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-black bg-white"
                      placeholder="Enter coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={isApplyingCoupon}
                      className="px-4 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 disabled:bg-indigo-400"
                    >
                      {isApplyingCoupon ? 'Applying...' : 'Apply'}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Secure Payment</h3>
                  <div className="flex space-x-4 mb-4">
                    <FaCcVisa className="text-gray-400 text-2xl" />
                    <FaCcMastercard className="text-gray-400 text-2xl" />
                    <FaCcPaypal className="text-gray-400 text-2xl" />
                  </div>
                  <p className="text-xs text-gray-500">
                    Your payment is secured with 256-bit SSL encryption. We dont store your credit card details.
                  </p>
                </div>

                <NavLink to='/checkout' className="w-full flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">
                  <FiCreditCard className="mr-2" />
                  Proceed to Checkout
                </NavLink>

                <p className="mt-4 text-center text-sm text-gray-500">
                  By completing your purchase, you agree to our{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;