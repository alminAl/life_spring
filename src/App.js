import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookAppointment from './Components/BookAppointment/BookAppointment.jsx';
import CourseDetails from './Components/Dashboard/CourseDetails.jsx';
import Courses from './Components/Dashboard/Courses.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Profile from './Components/Dashboard/Profile.jsx';
import Error from './Components/Error/Error.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Professionals from './Pages/Professionals.jsx';
import Signup from './Pages/Signup.jsx';

function App() {
    const { user } = useAuthContext();
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/login'
                            element={
                                !user ? <Login /> : <Navigate to='/dashboard/profile' />
                            }></Route>
                        <Route
                            path='/signup'
                            element={
                                !user ? <Signup /> : <Navigate to='/dashboard/profile' />
                            }></Route>
                        <Route
                            path='/professionals'
                            element={
                                user ? (
                                    <Professionals />
                                ) : (
                                    <Navigate to='/login' />
                                )
                            }></Route>

                        <Route
                            path='/professionals/bookAppointment/:professionalsId'
                            element={
                                user ? (
                                    <BookAppointment />
                                ) : (
                                    <Navigate to='/login' />
                                )
                            }
                        />

                        {/* dashboard */}
                        <Route
                            path='dashboard'
                            element={
                                user ? <Dashboard /> : <Navigate to='/login' />
                            }>
                            <Route path='profile' element={user ? <Profile /> : <Navigate to='/login' />} />
                            <Route path='courses' element={user ? <Courses /> : <Navigate to='/login' />} />
                            <Route
                                path='courses/:id'
                                element={user ? <CourseDetails /> : <Navigate to='/login' />}
                            />
                        </Route>
                        <Route path='*' element={<Error />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
