'use client'
import toast from 'react-hot-toast';
export default function AdminPage() {
  const notify = () => toast.success('This is a success toast!');
    return (
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
        <button onClick={notify}>Show Toast</button>
      </div>
    );
  }
  