import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
      setIsTablet(window.innerWidth > 425 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate EmailJS loading for demonstration
    const timer = setTimeout(() => {
      setEmailjsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!emailjsLoaded) {
      alert("EmailJS is still loading. Please try again in a moment.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Message failed to send. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    contactContainer: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "100%",
      textAlign: "left",
      paddingBottom: "4rem",
    },
    contactHeading: {
      position: "relative",
      display: "inline-block",
      margin: "3rem 0 4rem 10rem",
      ...(isTablet && {
        margin: "4rem 0 3rem 4rem",
      }),
      ...(isMobile && {
        margin: "3rem 0 2rem 2rem",
      }),
    },
    contactHeadingH1: {
      position: "relative",
      maxWidth: "12rem",
      color: "rgb(18, 30, 39)",
      fontWeight: "570",
      fontSize: "2.5rem",
      margin: "0 0 2rem 0",
      zIndex: 2,
      ...(isTablet && {
        maxWidth: "14rem",
        fontSize: "2.3rem",
        marginBottom: "2.2rem",
      }),
      ...(isMobile && {
        fontSize: "2rem",
      }),
    },
    contactHeadingAfter: {
      position: "absolute",
      backgroundColor: "#ed6955",
      width: "100%",
      height: "1.2rem",
      left: 0,
      bottom: "0.8em",
      zIndex: 1,
      ...(isTablet && {
        bottom: "42px",
      }),
    },
    contactWrapper: {
      display: "flex",
      marginBottom: "4.2rem",
      ...(isTablet && {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }),
    },
    contactContent: {
      maxWidth: "800px",
      textAlign: "left",
      marginLeft: "10rem",
      ...(isTablet && {
        maxWidth: "80%",
        marginLeft: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }),
      ...(isMobile && {
        marginLeft: "2rem",
      }),
    },
    contactTitle: {
      color: "rgb(18, 30, 39)",
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1.6rem",
      ...(isTablet && {
        fontSize: "2.3rem",
        marginBottom: "2.2rem",
      }),
    },
    contactDescription: {
      fontSize: "1.2rem",
      color: "rgb(18, 30, 39)",
      marginBottom: "2.5rem",
      fontWeight: "340",
      lineHeight: "1.6",
      ...(isTablet && {
        fontSize: "1.3rem",
      }),
      ...(isMobile && {
        fontSize: "1.7rem",
      }),
    },
    formContainer: {
      background: "#f8f9fa",
      padding: "30px",
      borderRadius: "12px",
      border: "1px solid #e9ecef",
      marginBottom: "3rem",
      width: "100%",
      maxWidth: "600px",
      ...(isTablet && {
        padding: "25px",
      }),
      ...(isMobile && {
        padding: "20px",
      }),
    },
    formDiv: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    inputField: {
      padding: "15px",
      fontSize: "1.1rem",
      border: "2px solid #e9ecef",
      borderRadius: "8px",
      backgroundColor: "white",
      color: "rgb(18, 30, 39)",
      fontFamily: "inherit",
      transition: "border-color 0.3s ease",
      outline: "none",
      ...(isTablet && {
        fontSize: "1.2rem",
        padding: "16px",
      }),
      ...(isMobile && {
        fontSize: "1.3rem",
        padding: "18px",
      }),
    },
    messageField: {
      padding: "15px",
      fontSize: "1.1rem",
      border: "2px solid #e9ecef",
      borderRadius: "8px",
      backgroundColor: "white",
      color: "rgb(18, 30, 39)",
      fontFamily: "inherit",
      transition: "border-color 0.3s ease",
      outline: "none",
      minHeight: "120px",
      resize: "vertical",
      ...(isTablet && {
        fontSize: "1.2rem",
        padding: "16px",
      }),
      ...(isMobile && {
        fontSize: "1.3rem",
        padding: "18px",
      }),
    },
    submitButton: {
      backgroundColor: isSubmitting ? "#666" : "rgb(18, 30, 39)",
      color: "white",
      border: `2px solid ${isSubmitting ? "#666" : "rgb(18, 30, 39)"}`,
      padding: "8px 30px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "8px",
      cursor: isSubmitting ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      alignSelf: "flex-start",
      minWidth: "140px",
      ...(isTablet && {
        fontSize: "1.2rem",
        padding: "16px 32px",
      }),
      ...(isMobile && {
        fontSize: "1.3rem",
        padding: "18px 36px",
        alignSelf: "stretch",
      }),
    },
    socialSection: {
      marginTop: "3rem",
    },
    socialTitle: {
      color: "rgb(18, 30, 39)",
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
      padding: 0,
      margin: 0,
      ...(isMobile && {
        flexWrap: "wrap",
        gap: "15px",
      }),
    },
    socialIconItem: {
      display: "flex",
    },
    socialIconLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      backgroundColor: "rgb(18, 30, 39)",
      color: "white",
      borderRadius: "50%",
      textDecoration: "none",
      transition: "all 0.3s ease",
      fontSize: "1.3rem",
      ...(isTablet && {
        width: "55px",
        height: "55px",
        fontSize: "1.4rem",
      }),
      ...(isMobile && {
        width: "60px",
        height: "60px",
        fontSize: "1.5rem",
      }),
    },
    contactInfo: {
      background: "#e8f4f8",
      padding: "25px",
      borderRadius: "12px",
      borderLeft: "4px solid #3498db",
      marginTop: "2rem",
      ...(isTablet && {
        padding: "20px",
      }),
      ...(isMobile && {
        padding: "18px",
      }),
    },
    contactInfoText: {
      fontSize: "1.1rem",
      color: "rgb(18, 30, 39)",
      lineHeight: "1.6",
      margin: "0",
      fontWeight: "340",
      ...(isTablet && {
        fontSize: "1.2rem",
      }),
      ...(isMobile && {
        fontSize: "1.4rem",
      }),
    },
    loadingIndicator: {
      fontSize: "0.9rem",
      color: emailjsLoaded ? "#28a745" : "#ffc107",
      marginTop: "10px",
      fontWeight: "500",
    },
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#ed6955";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#e9ecef";
  };

  const handleButtonHover = (e) => {
    if (!isSubmitting) {
      e.target.style.backgroundColor = "#2c3e50";
    }
  };

  const handleButtonLeave = (e) => {
    if (!isSubmitting) {
      e.target.style.backgroundColor = "rgb(18, 30, 39)";
    }
  };

  const handleSocialHover = (e) => {
    e.target.style.backgroundColor = "#ed6955";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleSocialLeave = (e) => {
    e.target.style.backgroundColor = "rgb(18, 30, 39)";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <div style={styles.contactContainer} id="contact">
      <div style={styles.contactHeading}>
        <h1 style={styles.contactHeadingH1}>Contact</h1>
        <div style={styles.contactHeadingAfter}></div>
      </div>

      <div style={styles.contactWrapper}>
        <div style={styles.contactContent}>
          <h2 style={styles.contactTitle}>Send me a Message!</h2>

          <p style={styles.contactDescription}>
            Please fill out the form below to discuss any work opportunities.{" "}
            <br /> I would love to hear from you and explore how we can work
            together.
          </p>

          <div style={styles.formContainer}>
            <div style={styles.formDiv}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.inputField}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.inputField}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.messageField}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
              <button
                type="submit"
                onClick={sendEmail}
                style={styles.submitButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                disabled={!emailjsLoaded || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>

          <div style={styles.socialSection}>
            <h3 style={styles.socialTitle}>Connect with me</h3>
            <ul style={styles.socialIcons}>
              <li style={styles.socialIconItem}>
                <a
                  href="https://www.linkedin.com/in/thalitha-sambo-50919011b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  style={styles.socialIconLink}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li style={styles.socialIconItem}>
                <a
                  href="https://wa.me/27720191566"
                  style={styles.socialIconLink}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li style={styles.socialIconItem}>
                <a
                  href="https://github.com/ThalithaThomas"
                  style={styles.socialIconLink}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <FaGithub />
                </a>
              </li>
              <li style={styles.socialIconItem}>
                <a
                  href="mailto:thalithaasambo@gmail.com"
                  style={styles.socialIconLink}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.contactInfo}>
            <p style={styles.contactInfoText}>
              <strong>Quick Response:</strong> I typically respond to messages
              within 24 hours. For urgent inquiries, feel free to reach out via
              WhatsApp or email directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
