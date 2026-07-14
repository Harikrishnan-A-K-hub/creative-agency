import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  children: React.ReactNode;
  as?: 'a' | 'button';
  href?: string;
}

export default function Button({ 
  variant = 'filled', 
  children, 
  className = '',
  as = 'button',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = 'btn';
  const variantStyles = variant === 'filled' ? 'btn-filled' : 'btn-outlined';
  
  if (as === 'a' && href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}