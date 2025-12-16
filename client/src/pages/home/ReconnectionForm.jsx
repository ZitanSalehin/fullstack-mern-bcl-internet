export default function ReconnectionForm() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Send Us Your Questiosn
      </h2>

      <form className="flex flex-col gap-6">
        <div>
          <label className="block text-gray-500 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400 
              focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-500 font-semibold mb-1">
            Contact Number
          </label>
          <input
            type="text"
            placeholder="01XXXXXXXXX"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400 
              focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-500 font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400 
              focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
          />
        </div>

        {/* Current Address */}
        <div>
          <label className="block text-gray-500 font-semibold mb-1">
            Current Address
          </label>
          <textarea
            placeholder="Current Address"
            rows={2}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400
              focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
          ></textarea>
        </div>

        {/* Messages */}
        <div>
          <label className="block text-gray-500 font-semibold mb-1">
            Message
          </label>
          <textarea
            placeholder="Write Your Issue"
            rows={2}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400
              focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="px-5 py-2 text-md text-slate-700 rounded-4xl font-semibold hover:bg-blue-700 hover:text-white border border-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
