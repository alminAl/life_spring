import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './Pages/Error.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import Profile from './Pages/dashboard/Profile.jsx';
import ProfessionalsPage from './Pages/ProfessionalsPage.jsx';
import Courses from './Pages/dashboard/Courses.jsx';
import CourseDetails from './Pages/dashboard/CourseDetails';
import BookAppointment from './Components/BookAppointment/BookAppointment.jsx';
import PsychiatristDashboard from './Pages/dashboard/PsychiatristDashboard.jsx';
function App() {
    const { user } = useAuthContext();
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/professionals'
                            element={<ProfessionalsPage />}
                        />
                        <Route
                            path='/professionals/bookAppointment/:professionalsId'
                            element={<BookAppointment />}
                        />

                        <Route
                            path='/login'
                            element={!user ? <Login /> : <Navigate to='/' />}
                        />
                        <Route
                            path='/signup'
                            element={!user ? <Signup /> : <Navigate to='/' />}
                        />

                        <Route
                            path='dashboard'
                            element={
                                user ? <Dashboard /> : <Navigate to='/login' />
                            }>
                            <Route path='profile' element={<Profile />} />
                            <Route
                                path='courses'
                                element={
                                    user ? (
                                        <Courses />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />
                            <Route
                                path='courses/:id'
                                element={
                                    user ? (
                                        <CourseDetails />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />

                            <Route
                                path='psychiatristDashboard'
                                element={
                                    user ? (
                                        <PsychiatristDashboard />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />
                        </Route>

                        {/* <Route
                            path='/professionals'
                            element={
                                user ? (
                                    <Professionals />
                                ) : (
                                    <Navigate to='/login' />
                                )
                            }
                        /> */}

                        {/* <Route
                            path='/professionals/bookAppointment/:professionalsId'
                            element={
                                user ? (
                                    <BookAppointment />
                                ) : (
                                    <Navigate to='/login' />
                                )
                            }
                        /> */}

                        <Route path='*' element={<Error />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
