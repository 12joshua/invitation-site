function EventInvitationWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 text-white font-sans">

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 max-w-3xl w-full">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 h-28 object-contain rounded-full border-4 border-white shadow-lg"
            />
          </div>

          <p className="uppercase tracking-[0.4em] text-sm text-green-200 mb-4">
            You’re Invited
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Grand Celebration Event
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join us for an unforgettable evening filled with music, fun,
            networking, and amazing memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <h3 className="text-sm uppercase text-green-200 mb-1">
                Date
              </h3>
              <p className="text-xl font-bold">June 15, 2026</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <h3 className="text-sm uppercase text-green-200 mb-1">
                Time
              </h3>
              <p className="text-xl font-bold">6:00 PM</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <h3 className="text-sm uppercase text-green-200 mb-1">
                Location
              </h3>
              <p className="text-xl font-bold">Addis Ababa</p>
            </div>

          </div>

          <button className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            RSVP NOW
          </button>

        </div>

      </section>

    </div>
  );
}

export default EventInvitationWebsite;