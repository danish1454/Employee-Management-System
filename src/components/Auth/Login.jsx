import React, {useState} from "react";


const Login = () => {
    const submitHandler = (e) => {
      e.preventDefault();
      console.log("Form submitted");

      setEmail('');
      setpassword('')
    }
    
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={(e) => {
            submitHandler(e);
        }}  
             className="space-y-5">
            <div>
                <label htmlFor="email" className="block text-sm text-white mb-1">
                  Email
                </label>
                <input required
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value)
                    }}
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm text-white mb-1">
                    Password
                    </label>
                    <input required
                    value={password}
                    onChange={(e) =>{
                        setpassword(e.target.value)
                    }}
                    id="password"
                    type="password"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your password"
                    />
                </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-300 mt-6 text-center">
          Don’t have an account? <a href="#" className="text-cyan-400 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
