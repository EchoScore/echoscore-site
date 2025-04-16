export default function WaitlistPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f0f4f8] px-4 py-24">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#0087C7]">Join the EchoScore Waitlist</h1>
          <p className="text-gray-600 mb-6">
            Get early access before we launch publicly.
          </p>
          <form
            action="https://formspree.io/f/moqzqkzd"
            method="POST"
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0087C7]"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Drop handles or questions (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0087C7]"
            />
            <button
              type="submit"
              className="w-full bg-[#0087C7] text-white font-semibold py-3 rounded-md hover:bg-[#0072A3] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
  