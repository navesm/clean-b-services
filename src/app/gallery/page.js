import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="flex flex-col items-center gap-10 mt-20 bg-teal-200">
      <h1 className="text-6xl text-stone-600 drop-shadow-md">
        Gallery
      </h1>
      <Image src="/shower-glass.png" height={400} width={400} alt="Shower glass" />
      <Image src="/floor-trim.png" height={400} width={400} alt="Floor trim" />
      <Image src="/clean-tub.png" height={400} width={400} alt="Bath tub" />
    </div>
  );
}