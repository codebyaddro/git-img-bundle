import { useState } from 'react';
import { FiUser, FiLock, FiShoppingBag, FiCreditCard, FiSettings, FiLogOut } from 'react-icons/fi';
import { FaCcPaypal, FaCcVisa, FaRegStar, FaStar } from 'react-icons/fa';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [bio, setBio] = useState('Digital product enthusiast and web developer');
  const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/men/1.jpg');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const purchaseHistory = [
    {
      id: 'ORD-12345',
      date: '2023-05-15',
      items: [
        { name: 'Advanced React E-book', price: 24.99, image: 'https://via.placeholder.com/60' },
        { name: 'UI Design Templates', price: 19.99, image: 'https://via.placeholder.com/60' }
      ],
      total: 44.98,
      status: 'Completed',
      rating: 5
    },
    {
      id: 'ORD-12344',
      date: '2023-04-28',
      items: [
        { name: 'JavaScript Masterclass', price: 29.99, image: 'https://via.placeholder.com/60' }
      ],
      total: 29.99,
      status: 'Completed',
      rating: 4
    },
    {
      id: 'ORD-12343',
      date: '2023-03-10',
      items: [
        { name: 'Premium Stock Photos Pack', price: 12.99, image: 'https://via.placeholder.com/60' },
        { name: 'Social Media Templates', price: 9.99, image: 'https://via.placeholder.com/60' }
      ],
      total: 22.98,
      status: 'Completed',
      rating: 3
    }
  ];

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    // Profile update logic here
    alert('Profile updated successfully!');
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    // Password change logic here
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };



/* 
 if user loged in or sign up then this page will be shown otherwise it will show log in or sign page.

 User can see their purchase history
*/




  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-20 font-">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
        <p className="text-gray-600 mb-8">Manage your profile and view your purchase history</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-teal-50 shadow rounded-lg overflow-hidden">
              <div className="p-6 text-center border-b border-gray-200">
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={avatar} alt="User avatar" className="w-full h-full object-cover" />
                  <label className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-1 cursor-pointer">
                    Change
                    <input type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
                  </label>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
              <nav className="space-y-1 p-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === 'profile' ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiUser className="mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('purchases')}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === 'purchases' ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiShoppingBag className="mr-3" />
                  Purchase History
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === 'security' ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiLock className="mr-3" />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === 'payment' ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiCreditCard className="mr-3" />
                  Payment Methods
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === 'settings' ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiSettings className="mr-3" />
                  Settings
                </button>
                <button className="flex items-center w-full px-4 py-3 text-left rounded-lg text-gray-700 hover:bg-gray-100">
                  <FiLogOut className="mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
          {/* profile editing section */}
            {activeTab === 'profile' && (
              <div className="bg-teal-50 shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
                <form onSubmit={handleSubmitProfile}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      About Me
                    </label>
                    <textarea
                      id="bio"
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none "
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* this is purchase history section */}

            {activeTab === 'purchases' && (
              <div className="bg-teal-50 shadow rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Purchase History</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {purchaseHistory.map((order) => (
                    <div key={order.id} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">Order #{order.id}</h3>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                              <div className="flex items-center mt-1">
                                {renderStars(order.rating)}
                                <span className="ml-2 text-xs text-gray-500">Rated</span>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              ${item.price.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                          {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          ${order.total.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>
                <form onSubmit={handleSubmitPassword}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h2>
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 mb-6">
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded mr-4">
                        <FaCcVisa className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Visa ending in 4242</h4>
                        <p className="text-xs text-gray-500">Expires 04/2025</p>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Edit
                    </button>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded mr-4">
                        <FaCcPaypal className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">PayPal</h4>
                        <p className="text-xs text-gray-500">john.doe@example.com</p>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Edit
                    </button>
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add Payment Method
                </button>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive updates about your account and purchases</p>
                    </div>
                    <div className="ml-4 flex items-center h-5">
                      <input
                        id="email-notifications"
                        name="email-notifications"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                      <p className="text-sm text-gray-500">Get important updates via text message</p>
                    </div>
                    <div className="ml-4 flex items-center h-5">
                      <input
                        id="sms-notifications"
                        name="sms-notifications"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">Dark Mode</h3>
                      <p className="text-sm text-gray-500">Switch to dark theme</p>
                    </div>
                    <div className="ml-4 flex items-center h-5">
                      <input
                        id="dark-mode"
                        name="dark-mode"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Delete Account
                    </button>
                    <p className="mt-2 text-xs text-gray-500">
                      Permanently remove your account and all associated data.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;