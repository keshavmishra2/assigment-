import './App.css';
import PostData from './conponents/postdata/postdata';
import Nav from "./conponents/Navelement/navelement"
import {Routes, Route} from "react-router-dom";
function App() {
  return (
  <PostData/>
  // <Nav/>
  // <Routes>
  // <Route path="/" element={<Nav/>}></Route>
  // <Route path="/PostData" element={<PostData/>}></Route>
  // </Routes>
  );
}

export default App;
