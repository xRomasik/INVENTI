import { useState } from 'react';

export const ImageLoader = (): JSX.Element => {
  const [imgLoading, setImageLoading] = useState(true);

  return (
    <>
      <div className={imgLoading ? 'image-placeholder' : 'hidden'} />
      <img
        className={imgLoading ? 'hidden' : ''}
        alt="random"
        src="https://picsum.photos/100"
        onLoad={() => setImageLoading(false)}
      />
    </>
  );
};
