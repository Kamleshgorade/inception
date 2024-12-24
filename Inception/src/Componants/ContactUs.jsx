


function ContactUs() {


    return (
        <main
            className="d-flex flex-column align-items-center p-3"
            style={{
                marginTop: "6rem",
                background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
                minHeight: "100vh",
            }}
        >
            {/* Header Section */}
            <section
                className="text-center p-4 rounded"
                style={{
                    maxWidth: "800px",
                    background: "linear-gradient(to right, #4e79a7, #a0c4ff)",
                    color: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                }}
            >
                <h1 style={{ fontSize: "2.5rem" }}>Contact Us</h1>
                <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
                    We are here to help. Feel free to reach out to us anytime.
                </p>
            </section>

            {/* Contact Details Section */}
            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.5rem",
                    marginTop: "2rem",
                    padding: "1rem",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {[
                    { label: "Phone", value: "+91 8564856458" },
                    { label: "Address", value: "123 Main Street, New York, NY 10001" },
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#ffffff",
                            textAlign: "center",
                            padding: "1.5rem",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h3 style={{ color: "#4e79a7", fontSize: "1.5rem" }}>
                            {item.label}
                        </h3>
                        <p style={{ color: "#555", marginTop: "0.5rem", fontSize: "1rem" }}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </section>

            {/* Social Media Icons */}
            <section className="mt-4">
                <div
                    className="d-flex flex-wrap justify-content-center"
                    style={{ gap: "15px", padding: "1rem" }}
                >
                    {[
                        { icon: "facebook", color: "#1877F2", link: "https://www.facebook.com/yourPage" },
                        { icon: "twitter", color: "#1DA1F2", link: "https://www.twitter.com/yourProfile" },
                        { icon: "instagram", color: "#E4405F", link: "https://www.instagram.com/yourProfile" },
                        { icon: "youtube", color: "#FF0000", link: "https://www.youtube.com/yourChannel" },
                        { icon: "whatsapp", color: "#25D366", link: "https://wa.me/yourNumber" },
                        { icon: "telegram", color: "#0088cc", link: "https://t.me/yourUsername" },
                        { icon: "envelope-fill", color: "#76A644", link: "mailto:yourEmail@example.com" }, // Added email icon
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target={social.icon === "envelope-fill" ? "_self" : "_blank"} // Email opens in the same tab
                            rel={social.icon !== "envelope-fill" ? "noopener noreferrer" : undefined}
                            style={{
                                fontSize: "2.5rem",
                                color: social.color,
                                borderRadius: "50%",
                                background: "#f9f9f9",
                                padding: "0.8rem",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            <i className={`bi bi-${social.icon}`}></i>
                        </a>
                    ))}
                </div>


            </section>
        </main>
    );
}

export default ContactUs;
