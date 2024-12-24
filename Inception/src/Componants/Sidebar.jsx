// import { useState } from "react";
// import { Link } from "react-router-dom";


// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsOpen(!isOpen);

//     return (
//         <div>
//             {/* Sidebar */}
//             <div
//                 className={` ${isOpen ? "open" : "closed"} bg-light shadow`}
//                 style={{ marginTop: "5rem" }}
//             >
//                 <div className="p-3">

//                     <ul className="list-unstyled">
//                         <li className="mb-3">
//                             <Link to="/Home" className="text-decoration-none text-dark">
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="mb-3">
//                             <Link to="/Jobss" className="text-decoration-none text-dark">
//                                 Jobs
//                             </Link>
//                         </li>
//                         <li className="mb-3">
//                             <Link to="/Internships" className="text-decoration-none text-dark">
//                                 Internships
//                             </Link>
//                         </li>
//                         <li className="mb-3">
//                             <Link to="/Government" className="text-decoration-none text-dark">
//                                 Government
//                             </Link>
//                         </li>
//                         <li className="mb-3">
//                             <Link to="/AboutUs" className="text-decoration-none text-dark">
//                                 Amount
//                             </Link>
//                         </li>
//                         <li className="mb-3">
//                             <Link to="/ContactUs" className="text-decoration-none text-dark">
//                                 Contact
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Toggle Button */}
//             <button
//                 className="btn"
//                 style={{ top: "6rem", left: isOpen ? "260px" : "20px", zIndex: 1100 }}
//                 onClick={toggleSidebar}
//             >
//                 {isOpen ? "Close" : "Open"}
//             </button>
//         </div>
//     );
// };

// export default Sidebar;
