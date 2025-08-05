
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 bg-gradient-to-r from-stone-300 to-teal-200">
      <Image
        src="/cleanbcleaningservicellc/CBCS-logo.jpg"
        height={450}
        width={400}
        alt="Clean B Cleaning Service LLC Logo"
        className="rounded-full mb-10 pt-10 justify-center"
      />
      <span></span>
      <section className="bg-white text-black py-16 px-8 rounded-xl">
        <div className="max-w-3xl mx-auto pl-12 sm space-y-6">
          <p>Briana Fritts is the owner and founder of <strong>Clean B Cleaning Serivce LLC</strong>,
            bringing over a decade of hands-on experience in the professional cleaning industry.
            Rooted in strong Southern values and a commitment to excellence, Briana built her business on principles of integrity, consistency,
            and client-centered service. As a mother and dedicated entrepreneur, she understands the importance of maintaining clean,
            comfortable environments both at home and in the workplace.
          </p>
          <p><strong>Clean B Cleaning Service LLC</strong> provides reliable, high-quality residential and commercial cleaning
            solutions across Caldwell, Catawba, Burke, and Alexander counties in North Carolina. Briana leads a small, carefully trained team
            that shares her high standards for professional cleanliness and attention to detail.</p>
          <p>Together, they specialize in deep cleaning, move-in/move-out services, and routine maintenance.
            With competitive pricing and a focus on trust, quality, and dependability, Clean B has earned a local reputation for
            delivering personalized, top-tier service.
          </p>
        </div>
      </section>
      <form name="booking" method="POST" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="booking" />
        <input type="text" name="name" />
        <input type="text" name="address" />
        <input type="text" name="city" />
        <input type="tel" name="phone-number" />
        <input type="text" name="location-size" />
        <input type="radio" name="intensity" value="deep-cleaning" />
        <input type="radio" name="intensity" value="maintenance" />
        <input type="radio" name="frequency" value="one-time" />
        <input type="radio" name="frequency" value="weekly" />
        <input type="radio" name="frequency" value="bi-weekly" />
        <input type="radio" name="frequency" value="monthly" />
        <textarea name="additional-info"></textarea>
      </form>
    </div >
  );
}