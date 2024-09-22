'use client'
export default function EmailSubmitForm ({email,setEmail,handleEmailSubmit}) {
    return (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
        </label>
        <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
            required
        />
        </div>
        <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
        Send OTP
        </button>
    </form>
    )
}