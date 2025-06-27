
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 bg-teal-200">
      <Image
        src="/cleanbcleaningservicellc/CBCS-logo.jpg"
        height={450}
        width={400}
        alt="Clean B Cleaning Service LLC Logo"
        className="rounded-full mb-20 justify-center"
      />
      <span></span>

    </div>
  );
}