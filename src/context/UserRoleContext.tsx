import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { jwtDecode } from 'jwt-decode';

interface UserRoleContextType {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
}

interface JwtPayload {
  role?: string;
  // add other fields if needed
}

const UserRoleContext = createContext<UserRoleContextType>({
  role: '',
  setRole: () => {},
});

export const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token); 
        setRole(decoded.role || '');
      } catch {
        setRole('');
      }
    }
  }, []);

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => useContext(UserRoleContext);
