
export default async function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 p-4">
      {/* Welcome Section */}
      <div className="text-center bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Panel</h1>
        <p className="text-lg mb-4">RPL Fast Track Management System</p>
        <p className="text-md text-gray-700">
          Manage your RPL applications and qualifications efficiently with our easy-to-use admin panel.
        </p>
      </div>
    </div>
  );
}



