import { useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { Nav } from '../../components';
import { PATH } from '../../constants';

export const NotFound = () => {
  const urlNotFound = useMatch(PATH.NOT_FOUND);
  const navigate = useNavigate();

  useEffect(() => {
    if (!urlNotFound) {
      navigate(PATH.NOT_FOUND);
    }
  }, [navigate, urlNotFound]);

  return (
    <div>
      <h1>404 - страница не найдена</h1>
      <Nav />
    </div>
  );
};
