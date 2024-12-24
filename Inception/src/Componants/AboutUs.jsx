

function AboutUs() {
    return (
        <main style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
            {/* Hero Section */}
            <section
                style={{
                    textAlign: "center",
                    background: "linear-gradient(to right, #4e79a7, #4e79a7)",
                    color: "#fff",
                    padding: "3rem 1rem",
                    marginTop: "6rem",
                }}
            >
                <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Welcome to JobPortal</h1>
                <p style={{ marginTop: "1rem" }}>Your gateway to exciting career opportunities</p>
            </section>

            {/* Mission and Vision Section */}
            <section
                style={{
                    textAlign: "center",
                    padding: "2rem 1rem",
                    backgroundColor: "#f4f8fc",
                }}
            >
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#4e79a7" }}>
                    Our Mission
                </h2>
                <p style={{ marginBottom: "2rem", color: "#333" }}>
                    To bridge the gap between talented professionals and top organizations
                    worldwide, fostering growth and innovation.
                </p>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#4e79a7" }}>
                    Our Vision
                </h2>
                <p style={{ color: "#333" }}>
                    Empowering individuals by offering the tools and opportunities to excel in
                    their careers.
                </p>
            </section>

            {/* Features Section */}
            <section
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    padding: "2rem 1rem",
                    gap: "1rem",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        flex: "1 1 calc(33.33% - 1rem)",
                        textAlign: "center",
                        background: "#f9f9f9",
                        padding: "1rem",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h3 style={{ fontSize: "1.5rem", margin: "0", color: "#4e79a7" }}>
                        AI Job Matching
                    </h3>
                    <p style={{ marginTop: "0.5rem", color: "#555" }}>
                        Connect with jobs tailored to your profile.
                    </p>
                </div>
                <div
                    style={{
                        flex: "1 1 calc(33.33% - 1rem)",
                        textAlign: "center",
                        background: "#f9f9f9",
                        padding: "1rem",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h3 style={{ fontSize: "1.5rem", margin: "0", color: "#4e79a7" }}>
                        Resume Builder
                    </h3>
                    <p style={{ marginTop: "0.5rem", color: "#555" }}>
                        Create a professional resume with ease.
                    </p>
                </div>
                <div
                    style={{
                        flex: "1 1 calc(33.33% - 1rem)",
                        textAlign: "center",
                        background: "#f9f9f9",
                        padding: "1rem",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h3 style={{ fontSize: "1.5rem", margin: "0", color: "#4e79a7" }}>
                        Trusted Employers
                    </h3>
                    <p style={{ marginTop: "0.5rem", color: "#555" }}>
                        Find opportunities from verified companies.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                style={{
                    textAlign: "center",
                    padding: "2rem 1rem",
                    backgroundColor: "#f4f8fc",
                }}
            >
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#4e79a7" }}>
                    What Our Users Say
                </h2>
                <div
                    style={{
                        maxWidth: "500px",
                        margin: "1rem auto",
                        fontStyle: "italic",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "1rem",
                        color: "#333",
                    }}
                >
                    <p>"This platform helped me land my dream job!"</p>
                    <footer style={{ textAlign: "right", fontWeight: "bold" }}>
                        - Jane Doe
                    </footer>
                </div>
                <div
                    style={{
                        maxWidth: "500px",
                        margin: "1rem auto",
                        fontStyle: "italic",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "1rem",
                        color: "#333",
                    }}
                >
                    <p>"A game-changer for job seekers and recruiters alike."</p>
                    <footer style={{ textAlign: "right", fontWeight: "bold" }}>
                        - John Smith
                    </footer>
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                style={{
                    textAlign: "center",
                    background: "#4e79a7",
                    color: "#fff",
                    padding: "2rem 1rem",
                }}
            >
                <h2>Ready to Start Your Journey?</h2>
                <p style={{ marginBottom: "1rem" }}>
                    Sign up today and take the first step towards your dream job.
                </p>
                <button
                    style={{
                        background: "#a0c4ff",
                        color: "#fff",
                        border: "none",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem",
                    }}
                >
                    Join Now
                </button>
            </section>
        </main>
    );
}

export default AboutUs;
