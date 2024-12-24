import './App.css';
import Footer from './Componants/Footer';
import Header from './Componants/Header';
import JobssInDetail from './Componants/JobssInDetail';
import Jobss from './Componants/Jobss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home';
import AboutUs from './Componants/AboutUs';
import ContactUs from './Componants/ContactUs';
// import Sidebar from './Componants/Sidebar';
import Internships from './Componants/Internships';
import Government from './Componants/Government';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes here */}
        {/* <Route path="/" element={<Jobss />} />
        <Route path="/jobpost" element={<Jobss />} />
        <Route path="/jobinDetails/:jobId" element={<JobssInDetail />} /> Dynamic route with jobId */}

        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Sidebar" element={<Sidebar />} /> */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Jobss" element={<Jobss />} />
        <Route path="/jobinDetails/:jobId" element={<JobssInDetail />} /> {/*Dynamic route with jobId */}
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Government" element={<Government />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
