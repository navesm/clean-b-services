import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-teal-200">
      <header className="fixed top-0 right-0 p-4">
        <ol
          className="flex flex-row space-x-4"
        >
          <a className="">
            Home
          </a>
          <li>
            About
          </li>
          <li>
            Services
          </li>
          <li>
            Contact
          </li>
        </ol>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <h1 className="text-blue-700 text-6xl">Clean B</h1>
        <h2 className="text-green-700 text-4xl">Cleaning Service LLC.</h2> */}
        <Image
          src='/cleanbcleaningservicellc/CBCS-logo.jpg'
          height="450"
          width="400"
          alt="Clean B Cleaning Service LLC Logo"
          className="mb-20 rounded-full justify-center"
        >
        </Image>
        <div>
          <Image
            className="rotate-270 gap-y-50 mt-30 "
            src='/cleanbcleaningservicellc/clean-b-shot1.png'
            height='1384'
            width='775'
            alt="Clean B residential and commercial services"
          >
          </Image>
        </div>

        <div className="mt-40">
          <h1 className=" text-blue-700 text-6xl">Gallery</h1>
          <Image
            src="/shower-glass.png"
            height="400"
            width="400"
            alt="Shower glass before and after"
          >
          </Image>
          <Image
            src="/floor-trim.png"
            height="400"
            width="400"
            alt="Floor trim before and after"
          >
          </Image>
          <Image
            src="/clean-tub.png"
            height="400"
            width="400"
            alt="Bath tub before and after"
          >

          </Image>
        </div>

        <div className="mt-40">
          <h1 className="text-blue-700 text-6xl">Reviews</h1>
        </div>

        <div className="mt-40">
          <h1 className="text-blue-700 text-6xl">Book With Me</h1>
          <form>
            <div className="mb-r">
              <label>Name</label>
              <input
                className="shadow appearance-none border rounded w-full"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
          </form>
        </div>


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
