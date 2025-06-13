import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import ProjectBoard from '@/pages/ProjectBoard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { UserRoleProvider } from '@/context/UserRoleContext';
import Navbar from '@/components/Navbar';

const App = () => (
  <Router>
    <UserRoleProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/projects/:projectId"
          element={
            <ProtectedRoute>
              <ProjectBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserRoleProvider>
  </Router>
);

export default App;