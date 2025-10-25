import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  effect = 'blur',
  placeholderSrc = '/images/placeholder.jpg',
  ...props 
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect={effect}
      placeholderSrc={placeholderSrc}
      threshold={100}
      delayMethod="throttle"
      delayTime={200}
      {...props}
    />
  );
};

export default OptimizedImage;
