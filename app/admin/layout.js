// app/admin/layout.js (Custom layout for admin pages)
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';
import AdminNavbar from "./components/navbar/Navbar";
import AdminSidebar from "./components/sidebar/AdminSidebar";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signup');
  }
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />
      <div className="flex overflow-y-auto flex-1">
        <div className="relative">
        <div className="absolute z-50 top-0 bottom-0">
          <AdminSidebar />
        </div>
        </div>

        <main className="flex-1 ml-20 bg-light-gray overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
