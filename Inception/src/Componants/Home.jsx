import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
    return (
        <>
            <div
                style={{
                    paddingTop: "10rem", // Adjust for fixed header
                    backgroundColor: "#f8f9fa", // Light background
                    minHeight: "100vh", // Full-screen height
                }}
            >
                <div
                    className="container text-center d-flex flex-column align-items-center justify-content-center"
                    style={{ height: "100%" }}
                >
                    {/* Hero Section */}
                    <div
                        className="hero-section bg-light shadow-lg rounded p-5"
                        style={{
                            background: "#fff",
                            borderRadius: "15px",
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h1 className="display-4 text-primary mb-4 text-center">
                            Welcome to <span className="text-info">JobPortal</span>
                        </h1>
                        <p className="lead text-muted mb-4 text-center">
                            Find your dream job today! Browse thousands of job listings across industries and locations.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Link
                                to={`/Jobss`}
                                className="btn btn-primary btn-lg rounded-pill px-5"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                Explore Jobs
                            </Link>
                            <Link
                                to={`/Internships`}
                                className="btn btn-primary btn-lg rounded-pill px-5"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                Internships
                            </Link>
                            <Link
                                to={`/Government`}
                                className="btn btn-primary btn-lg rounded-pill px-5"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                Government Jobs
                            </Link>
                        </div>
                    </div>


                    {/* Features Section */}
                    <div className="row mt-5 w-100 text-center">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-3 border-info">
                                <i className="bi bi-briefcase-fill text-info fs-1 mb-3"></i>
                                <h5 className="card-title text-primary">Wide Job Listings</h5>
                                <p className="card-text text-muted">
                                    Discover thousands of job opportunities tailored to your skills.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-3 border-primary">
                                <i className="bi bi-people-fill text-primary fs-1 mb-3"></i>
                                <h5 className="card-title text-info">Trusted Companies</h5>
                                <p className="card-text text-muted">
                                    Work with reputable companies and build your career.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-3 border-success">
                                <i className="bi bi-bar-chart-fill text-success fs-1 mb-3"></i>
                                <h5 className="card-title text-success">Career Growth</h5>
                                <p className="card-text text-muted">
                                    Join jobs that offer excellent career growth opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
