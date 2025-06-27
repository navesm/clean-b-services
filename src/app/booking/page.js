export default function BookingForm() {
  return (
    <div className="mt-10 flex flex-col items-center text-white bg-gradient-to-r from-white-100 via-purple-400 to-teal-200 ">
      <h1 className="text-5xl font-bold mb-10 text-center text-bone-500 drop-shadow-md">
        Request a Quote
      </h1>

      <form className="w-full max-w-2xl bg-black/30 p-8 rounded-lg shadow-md space-y-6">
        <div className="flex flex-col">
          <label className="mb-2">Name</label>
          <input
            className="ml-10"
            type="text"
            placeholder="Enter First and Last Name">
          </input>
        </div>

      </form>
    </div>
  );
}
