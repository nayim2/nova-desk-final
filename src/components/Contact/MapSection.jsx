export default function MapSection() {
  return (
    <section className="w-full h-[60vh] lg:min-h-[740px] lg:h-auto xl:h-[60vh] px-4 py-6 md:py-24">
      <div className="max-w-[1440px] h-full mx-auto">
        <iframe
          className="w-full h-full rounded-2xl shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13152780838!2d80.04352144413834!3d13.047473102027064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1757668143403!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Chennai Location Map"
        />
      </div>
    </section>
  );
}
