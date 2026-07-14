'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
    console.log('Register:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 border border-[var(--n-200)]">
      <h1 className="text-heading text-center mb-8">Create Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-small font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword" className="block text-small font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="btn btn-filled w-full"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-small text-[var(--n-500)]">
          Already have an account?{' '}
          <Link href="/login" className="text-[var(--accent)] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}