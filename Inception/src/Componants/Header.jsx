
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isToggled, setIsToggled] = useState(false);

    // Handler to toggle side menu
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const linkStyle = {
        border: "1px solid #bbb",
        borderRadius: "8px",
        background: "#f9f9f9",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "1.2rem",
        fontWeight: "bold",
        transition: "transform 0.2s ease",
        textAlign: "center",
    };


    return (
        <>
            <nav
                className="navbar fixed-top"
                style={{
                    backgroundColor: "#87CEEB",
                    height: "5rem",
                }}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Logo or Title */}
                    <Link
                        className="navbar-brand fw-bold text-white"
                        style={{ fontSize: "2rem" }}
                        to="/"
                    >
                        JobPortal
                    </Link>



                    {/* Toggle Button (Visible on All Screen Sizes) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleToggle}
                        style={{
                            background: "transparent",
                            border: "none",
                            padding: "0.5rem",
                        }}
                    >
                        {/* Three-Line Icon */}
                        <div
                            style={{
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                margin: "5px 0",
                            }}
                        ></div>
                        <div
                            style={{
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                margin: "5px 0",
                            }}
                        ></div>
                        <div
                            style={{
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                margin: "5px 0",
                            }}
                        ></div>
                    </button>
                </div>
            </nav>

            {/* Side Menu */}
            <div
                className={`position-fixed top-0 ${isToggled ? "start-0" : "start-100"} vh-100`}
                style={{
                    width: "50%",
                    background: "linear-gradient(135deg, #ffffff, #eaeaea)",
                    color: "#333",
                    transition: "transform 0.3s ease",
                    zIndex: 1050,
                    boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <button
                    onClick={handleToggle}
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "none",
                        border: "none",
                        color: "#333",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                >
                    &times;
                </button>
                <div className="p-4 text-center">
                    <h2 style={{ borderBottom: "2px solid #bbb", paddingBottom: "0.5rem" }}>
                        Explore More
                    </h2>
                    <div className="mt-4">
                        <Link
                            to="/"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            Home
                        </Link>
                        <Link
                            to="/Jobss"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            Jobs
                        </Link>
                        <Link
                            to="/Internships"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            Internships
                        </Link>
                        <Link
                            to="/Government"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            Government Jobs
                        </Link>
                        <Link
                            to="/AboutUs"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            About Us
                        </Link>
                        <Link
                            to="/ContactUs"
                            className="d-block my-3 p-2 text-dark text-decoration-none"
                            style={linkStyle}
                            onClick={handleToggle} // Close the sidebar when clicked
                        >
                            Contact Us
                        </Link>



                    </div>

                </div>
            </div>



            {/* Backdrop */}
            {isToggled && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1040,
                    }}
                    onClick={handleToggle}
                ></div>
            )}
        </>
    );
}

export default Header;
