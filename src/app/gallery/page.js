import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="flex flex-col items-center gap-10 mt-20 bg-gradient-to-r from-stone-300 via-purple-100 to-teal-200">
      <h1 className="text-6xl text-stone-600 drop-shadow-md">
        Gallery
      </h1>
      <Image src="/shower-glass.png" height={400} width={400} alt="Shower glass" />
      <Image src="/floor-trim.png" height={400} width={400} alt="Floor trim" />
      <Image src="/clean-tub.png" height={400} width={400} alt="Bath tub" />

      <div clasName="grid grid-cols-2 gap-10 mt-20 ">
        <Image src="/cleanbcleaningservicellc/s1.jpg" height={400} width={400} alt="Before shower glass door" />
        <Image src="/cleanbcleaningservicellc/s2.jpg" height={400} width={400} alt="after shower glass door" />
        <Image src="/cleanbcleaningservicellc/s3.jpg" height={400} width={400} alt="Before toilet corner" />
        <Image src="/cleanbcleaningservicellc/s4.jpg" height={400} width={400} alt="after toilet corner" />
        <Image src="/cleanbcleaningservicellc/s6.jpg" height={400} width={400} alt="Before hall wall" />
        <Image src="/cleanbcleaningservicellc/s7.jpg" height={400} width={400} alt="after hall wall" />
        <Image src="/cleanbcleaningservicellc/s8.jpg" height={400} width={400} alt="Before stairs" />
        <Image src="/cleanbcleaningservicellc/s9.jpg" height={400} width={400} alt="after stairs" />
        <Image src="/cleanbcleaningservicellc/s10.jpg" height={400} width={400} alt="Before tub faucet" />
        <Image src="/cleanbcleaningservicellc/s11.jpg" height={400} width={400} alt="after tub faucet" />
        <Image src="/cleanbcleaningservicellc/s12.jpg" height={400} width={400} alt="Before sink" />
        <Image src="/cleanbcleaningservicellc/s13.jpg" height={400} width={400} alt="after sink" />
        <Image src="/cleanbcleaningservicellc/s14.jpg" height={400} width={400} alt="before oven" />
        <Image src="/cleanbcleaningservicellc/s15.jpg" height={400} width={400} alt="after oven" />
      </div>
    </div>
  );
}