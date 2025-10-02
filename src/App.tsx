import { useRoutes } from 'react-router-dom';
import routes from './router';
import protectedRoutes from './router/protectedRoutes';
import { getTokens } from './shared/helpers/authHelpers';

function App() {
  const finalRoutes =
    getTokens()?.accessToken !== null ? routes : protectedRoutes;
  const content = useRoutes([...finalRoutes]);
  return content;
}

export default App;
