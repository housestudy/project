import { Routes, Route } from 'react-router-dom';
import Main from '../pages';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function DefaultRouter() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full min-w-[1340px] max-w-[1730px] px-20">
          <Navigation />

          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DefaultRouter;
