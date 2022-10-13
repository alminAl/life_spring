import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookAppointment from './Components/BookAppointment/BookAppointment.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Profile from './Components/Dashboard/Profile.jsx';
import Error from './Components/Error/Error.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Professionals from './Pages/Professionals.jsx';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route index element={<Home />} />
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route
                            path='/professionals'
                            element={<Professionals />}></Route>
                        <Route path='*' element={<Error />} />
                        <Route
                            path='/bookAppointment/:professionalsId'
                            element={<BookAppointment />}
                        />

                        {/* dashboard */}
                        <Route path='life_spring_dashboard' element={<Dashboard/>}>
                            <Route path='profile' element={<Profile/>} />
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
