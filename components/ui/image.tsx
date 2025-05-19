import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
}

/**
 * A custom Image component that handles GitHub Pages basePath for image sources
 */
export function Image({ src, ...props }: ImageProps) {
  // Since we're now manually adding basePath in the component usage,
  // we don't need to add it again here to avoid double paths
  return <NextImage src={src} {...props} />;
} 