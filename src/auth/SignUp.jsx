const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto mt-32 pb-20">
        <form className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="John"
          />
        </div>
        
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-2 border border-gray-300 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="••••••••"
        />
        <p className="mt-1 text-xs text-gray-500">
          Must be at least 8 characters
        </p>
      </div>

      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          required
          className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="••••••••"
        />
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-medium text-gray-700">
            I agree to the <a href="#" className="text-teal-600 hover:underline">Terms</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Create Account
        </button>
      </div>
    </form>
    </div>
  );
};

export default SignUp;