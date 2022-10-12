import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error.jsx";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Professionals from "./Pages/Professionals.jsx";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route index element={<Home />} />
                      <Route path='/login' element={<Login></Login>}></Route>
                      <Route path='/professionals' element={<Professionals/>}></Route>
                      <Route path='*' element={<Error />} />
                  </Routes>
              </Layout>
          </BrowserRouter>
      </div>
  );
}

export default App;
