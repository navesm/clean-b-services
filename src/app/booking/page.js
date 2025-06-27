export const dynamic = 'force-static';
export const runtime = "edge";

export default function BookingForm() {
  return (
    <div className="mt-10 flex flex-col items-center bg-gradient-to-r from-white-100 via-purple-200 to-teal-200 ">
      <h1 className="text-5xl font-bold mb-10 text-center text-stone-600 drop-shadow-md">
        Request a Quote
      </h1>

      <form
        className="w-full max-w-2xl bg-black/30 p-8 rounded-lg shadow-md space-y-6"
        name="booking"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="booking" />
        <div className="flex flex-col">
          <label className="mb-2">Name</label>
          <input
            name="name"
            className="px-4 py-2 rounded"
            type="text"
            placeholder="Enter First and Last Name">
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Address</label>
          <input
            name="address"
            className="px-4 py-2 rounded"
            type="text"
            placeholder="Enter Entire Street Address">
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">City</label>
          <input
            name="city"
            className="px-4 py-2 rounded"
            type="text"
            placeholder="Address Line 2">
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Phone Number</label>
          <input
            name="phone-number"
            className="px-4 py-2 rounded"
            type="tel"
            placeholder="(123) 456-7890">
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Size of Location</label>
          <input
            name="location-size"
            className="px-4 py-2 rounded"
            type="text"
            placeholder="Beds/Baths , Square Footage (if known)">
          </input>
        </div>
        <label><u>Intensity</u></label>
        <div className="flex flex-col">
          <label className="flex items-center space-x-2">
            <input
              className="accent-teal-600"
              type="radio"
              name="intensity"
              value="deep-cleaning">
            </input>
            <span>Deep Cleaning</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              className="accent-teal-600"
              type="radio"
              name="intensity"
              value="maintenance">
            </input>
            <span>Maintenance</span>
          </label>
        </div>
        <label><u>Frequency</u></label>
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input type="radio" className="accent-teal-600" name="frequency" value="one-time" />
            <span>One-Time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" className="accent-teal-600" name="frequency" value="weekly" />
            <span>Weekly</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" className="accent-teal-600" name="frequency" value="bi-weekly" />
            <span>Bi-Weekly</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" className="accent-teal-600" name="frequency" value="monthly" />
            <span>Monthly</span>
          </label>
        </div>
        <div className="flex flex-col pt-6">
          <label className="mb-2">Additional Information</label>
          <textarea
            name="additional-info"
            className="px-4 py-2 rounded"
            rows="4"
            columns="50"
            placeholder="Anything else you think we should know?">
          </textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
