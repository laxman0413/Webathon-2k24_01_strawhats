
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Create_user from './components/Create_user';
import Profile from './components/Profile';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Home />,
    },
    {
      path:"/create-user",
      element:<Create_user />,
    },
    {
      path:"/profile",
      element:<Profile />,
    },
    {
      path:"/dashboard",
      element:<Dashboard />,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
