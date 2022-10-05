import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error.jsx";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
