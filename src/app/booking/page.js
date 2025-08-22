export default function BookingForm() {
  return (
    <div className="mt-10 flex flex-col items-center bg-gradient-to-r bg-gradient-to-r from-gray-300 to-teal-200 ">
      <h1 className="text-5xl font-bold mb-10 text-center text-white hover:text-teal-400 drop-shadow-md">
        Request a Quote
      </h1>

      <form
        className="w-full max-w-2xl bg-black/30 p-8 rounded-lg shadow-md space-y-6"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        {/*Web3Forms Config */}
        <input type="hidden" name="access_key" value="a6d325b5-11bf-4f73-b55a-10f3d9738f87" />
        <input type="hidden" name="subject" value="New Cleaning Service Quote Request" />
        <input type="hidden" name="redirect" value={`${process.env.NEXT_PUBLIC_SITE_URL}/success`} />
        <input type="hidden" name="from_name" value="Cleaning Service Website" />

        {/*Honeypot for spam protection (Web3Forms) */}
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

        <div className="flex flex-col">
          <label className="mb-2">Name</label>
          <input
            name="name"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="text"
            placeholder="Enter First and Last Name"
            required>
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Address</label>
          <input
            name="address"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="text"
            placeholder="Enter Entire Street Address"
            required>
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">City</label>
          <input
            name="city"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="text"
            placeholder="Address Line 2">
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Phone Number</label>
          <input
            name="phone-number"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="tel"
            placeholder="(123) 456-7890"
            required>
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Email</label>
          <input
            name="email"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="email"
            placeholder="your-email@example.com"
            required>
          </input>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Size of Location</label>
          <input
            name="location-size"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            type="text"
            placeholder="Beds/Baths , Square Footage (if known)"
            required>
          </input>
        </div>
        <label><u>Intensity</u></label>
        <div className="flex flex-col">
          <label className="flex items-center space-x-2">
            <input
              className="accent-teal-600"
              type="radio"
              name="intensity"
              value="deep-cleaning"
              required>
            </input>
            <span>Deep Cleaning</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              className="accent-teal-600"
              type="radio"
              name="intensity"
              value="maintenance"
              required>
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
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            rows="4"
            columns="50"
            placeholder="Anything else you think we should know?">
          </textarea>
        </div>

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-md shadow transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
