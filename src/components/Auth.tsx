import React, { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-md mx-auto bg-black/30 rounded-xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {isLogin ? 'Welcome Back' : 'Join Wine Yard'}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}