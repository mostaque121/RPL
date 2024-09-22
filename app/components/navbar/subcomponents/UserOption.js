'use client'
export default function UserOption ({handleLogout,user}) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md md:max-w-lg mx-auto ">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">User Profile</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-medium text-gray-700">
                <strong>Name:</strong> {user.name || 'N/A'}
              </p>
              <p className="font-medium text-gray-700">
                <strong>Email:</strong> {user.email || 'N/A'}
              </p>
              <p className="font-medium text-gray-700">
                <strong>Logged In By:</strong> {user.signInProvider || 'N/A'}
              </p>
            </div>
  
            <button
              onClick={handleLogout}
              className="w-full py-2 px-5 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Logout
            </button>
          </div>
      </div>
    )
}