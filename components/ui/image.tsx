import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { config } from '@/lib/config';

type ImageProps = NextImageProps & {
  src: string;
};

/**
 * A custom Image component that handles GitHub Pages basePath for image sources
 */
export function Image({ src, ...props }: ImageProps) {
  // Handle both absolute URLs and relative paths
  const formattedSrc = src.startsWith('http') 
    ? src 
    : src.startsWith('/') 
      ? `${config.basePath}${src}`
      : `${config.basePath}/${src}`;
      
  return <NextImage src={formattedSrc} {...props} />;
} 