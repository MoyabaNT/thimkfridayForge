import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutUS from "./Components/AboutUS";
import OurServices from "./Components/OurServices";
import Contacts from "./Components/Contacts";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";
import BBBEE from "./Components/subpages/BBBEE";
import SkillsDev from "./Components/subpages/SkillsDev";
import HumanRsc from "./Components/subpages/HumanRsc";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index="/HomePage" element={<HomePage />} />
    <Route path="/HomePage" element={<HomePage />} />
    <Route path='/AboutUS' element={<AboutUS />} />
    <Route path='/OurServices' element={<OurServices />} />
    <Route path='/Contacts' element={<Contacts />} />
    <Route path='/Resources' element={<Resources />} />
    <Route path='/Footer' element={<Footer />} />
    <Route path='/SkillsDev' element={<SkillsDev />} />
    <Route path='/BBBEE' element={<BBBEE />} />
    <Route path='/HumanRsc' element={<HumanRsc />} />
    
    
    </>
  )
)

function App() {
  return (
<>
<div>
<RouterProvider  router = {router}/>
  </div>
</>
  );
}

export default App;
