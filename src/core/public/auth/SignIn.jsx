import { useState } from "react";
import { dummyUser } from "../../../dummydata/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === dummyUser.email && password === dummyUser.password) {
      setLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white py-6 px-12 rounded-xl border border-gray-300 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/Logo/paypal-logo.png" alt="PayPal" className="w-10" />
        </div>

        {loggedIn ? (
          <div className="text-center text-green-600 font-medium">
            ✅ You are now logged in!
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4"
              required
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="text-left text-[#0070E0] text-md mb-4 cursor-pointer font-bold">
              Forgot password?
            </div>

            <button
              type="submit"
              className="w-full bg-[#0544b5] hover:bg-[#0070E0] cursor-pointer text-white p-3 rounded-full font-semibold"
            >
              Log In
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-1" />
              <span className="px-2 text-gray-400">or</span>
              <hr className="flex-1" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-400 text-black p-3 rounded-full font-semibold"
            >
              Sign Up
            </button>

            <div className="mt-6 flex justify-center">
              <img
                src="https://flagcdn.com/w40/np.png"
                alt="Nepal Flag"
                className="w-3 h-4 mr-2"
              />
              <span className="text-sm text-gray-600">Nepal</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignIn
