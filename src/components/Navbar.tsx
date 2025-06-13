import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUserRole } from '@/context/UserRoleContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { role } = useUserRole();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold">TeamTasker</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Role: {role}</span>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;