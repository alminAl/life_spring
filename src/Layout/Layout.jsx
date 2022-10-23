import Footers from '../Components/DefaultPage/Footers.jsx';
import NavBar from '../Components/DefaultPage/NavBar.jsx';
import ScrollTop from '../Components/DefaultPage/ScrollTop.jsx';

const Layout = ({ children }) => {

    return (
        <div className='min-h-screen'>
            <NavBar />
            <main className='px-3.5 md:px-7 lg:px-14 xl:px-24 bg-white' >
                {children}
            </main>
            <div className="sticky top-[100vh]">
                <Footers />
            </div>

            <ScrollTop />
        </div>
    );
};

export default Layout;
