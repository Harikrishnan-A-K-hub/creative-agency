'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log('Login:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 border border-[var(--n-200)]">
      <h1 className="text-heading text-center mb-8">Sign In</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-small font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-small font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="btn btn-filled w-full"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-small text-[var(--n-500)]">
          Don't have an account?{' '}
          <Link href="/register" className="text-[var(--accent)] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}