import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AppWrapper({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handlePopState = (event) => {
            event.preventDefault();
            navigate(location.pathname, { replace: true });
        };

        window.history.pushState(null, '', window.location.pathname);

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [location, navigate]);

    return children;
}

export default AppWrapper;