import { useRef, useState } from 'react';

export const ImageLoader = (): JSX.Element => {
  const [imgLoading, setImageLoading] = useState(true);
  const ref = useRef(new Date());

  return (
    <>
      <div className={imgLoading ? 'image-placeholder' : 'hidden'} />
      <img
        className={imgLoading ? 'hidden' : ''}
        alt="random"
        src={`https://picsum.photos/100?t=${ref.current}`}
        onLoad={() => setImageLoading(false)}
      />
    </>
  );
};
