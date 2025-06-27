import Image from "next/image";

export default function Reviews() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-stone-300 via-purple-100 to-teal-200">
      <h1 className="text-6xl text-stone-500 drop-shadow-md">
        Reviews
      </h1>
      <p className=" text-xl text-gray-700 ">See what customers have to say about <strong>Clean B Cleaning Service LLC</strong>!</p>
      <Image src="/cleanbcleaningservicellc/Review 1.png" height={500} width={600} alt="review 1" className="pt-12" />
      <Image src="/cleanbcleaningservicellc/review 2.png" height={500} width={600} alt="review 2" className="pt-12" />
      <Image src="/cleanbcleaningservicellc/review 3.png" height={500} width={600} alt="review 3" className="pt-12" />
      <Image src="/cleanbcleaningservicellc/review 4.png" height={500} width={600} alt="review 4" className="pt-12" />
      <Image src="/cleanbcleaningservicellc/review 5.png" height={500} width={600} alt="review 5" className="pt-12" />
    </div>
  );
}