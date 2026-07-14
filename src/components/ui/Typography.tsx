import React from 'react';

type TypographyVariant = 'display' | 'heading' | 'subheading' | 'body' | 'small';
type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps {
  variant: TypographyVariant;
  as?: TypographyElement;
  children: React.ReactNode;
  className?: string;
}

const variantToElement: Record<TypographyVariant, TypographyElement> = {
  display: 'h1',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  small: 'p',
};

const variantToClass: Record<TypographyVariant, string> = {
  display: 'text-display',
  heading: 'text-heading',
  subheading: 'text-subheading',
  body: 'text-body',
  small: 'text-small',
};

export default function Typography({ 
  variant, 
  as, 
  children, 
  className = '' 
}: TypographyProps) {
  const Component = as || variantToElement[variant];
  const variantClass = variantToClass[variant];
  
  return (
    <Component className={`${variantClass} ${className}`}>
      {children}
    </Component>
  );
}