// useAuthentication.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if token is not present
    }
  }, [navigate]);

  return navigate;
};

export default useAuthentication;
