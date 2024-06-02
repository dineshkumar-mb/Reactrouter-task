import Home from "../components/home.jsx";
import Fsd from "../components/fsd.jsx";
import Ds from '../components/ds.jsx';
import Cyber from "../components/cyber.jsx";
import Career from "../components/career.jsx";

export const Approutes = [
  {
    path: "/",
        element: <Home />,
  },
  {
    path: "/fsd",
    element: <Fsd />,
  },
  {
    path: "/ds",
    element: <Ds />,
  },
  {
    path: "/cyber",
    element: <Cyber />,
  },
  {
    path: "/career",
    element: <Career />,
  },
];

export default Approutes