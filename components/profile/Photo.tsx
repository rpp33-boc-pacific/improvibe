import Image from 'next/image';

const Photo = ({ photoUrl }) => {
  return (
    <Image
      alt='Picture of the artist'
      src={photoUrl}
      height={300}
      width={300}
    />
  );
};

export default Photo;