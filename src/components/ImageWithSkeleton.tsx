import { Skeleton, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, height, width }: { src: string, alt: string, height: string, width: string; }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton fadeDuration={2} speed={5} height={height} width={width} isLoaded={isLoaded}>
      <Image onLoad={() => setIsLoaded(true)} height={height} width={width} src={src} alt={alt} />
    </Skeleton>
  );
};

export default ImageWithSkeleton;