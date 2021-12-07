// import logo from './logo.svg';
import './App.css';
import Aos  from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/landing/landing';
import {BrowserRouter as Router,useRoutes,} from "react-router-dom"
//import ClientBlog from './pages/blog/client/mainpage'



Aos.init();


const MyLandingPage =()=>{
    return <LandingPage/>
};


const MyApp = ()=>{
  let routes = useRoutes([
    { path: "/", element: <MyLandingPage/> },
    // { path: "/blog", element: <ClientBlog /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
   <Router>
     <MyApp />
   </Router>
  );
}

export default App;
