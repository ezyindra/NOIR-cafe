import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gold mx-auto ${align !== 'center' && 'mx-0'}`} />
      <p className="mt-6 text-text-muted max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
