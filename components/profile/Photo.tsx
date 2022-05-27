import Image from 'next/image';

const Photo = ({ url }) => {
  return (
    <Image
      alt='Picture of the artist'
      src={url}
      height={300}
      width={300}
    />
  );
};

export default Photo;