import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { config } from '@/lib/config';

type ImageProps = NextImageProps & {
  src: string;
};

/**
 * A custom Image component that handles GitHub Pages basePath for image sources
 */
export function Image({ src, ...props }: ImageProps) {
  // Ensure the src path is properly formatted with basePath
  const formattedSrc = src.startsWith('http') ? src : `${config.basePath}${src}`;
  return <NextImage src={formattedSrc} {...props} />;
} 