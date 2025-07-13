import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import viz from "../assets/map.jpg";

// Enhanced ProjectButton Component
const ProjectBtn = ({ href, children, variant = "primary" }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "rgb(18, 30, 39)",
      color: "white",
      border: "2px solid rgb(18, 30, 39)",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "rgb(18, 30, 39)",
      border: "1px solid rgb(18, 30, 39)",
    },
    accent: {
      backgroundColor: "#ed6955",
      color: "white",
      border: "2px solid #ed6955",
    },
  };

  const baseButtonStyle = {
    padding: "9px 24px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
    minWidth: "160px",
    ...buttonStyles[variant],
  };

  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <div
        style={baseButtonStyle}
        onMouseEnter={(e) => {
          if (variant === "primary") {
            e.target.style.backgroundColor = "#2c3e50";
          } else if (variant === "secondary") {
            e.target.style.backgroundColor = "rgb(18, 30, 39)";
            e.target.style.color = "white";
          } else if (variant === "accent") {
            e.target.style.backgroundColor = "#d45742";
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor =
            buttonStyles[variant].backgroundColor;
          e.target.style.color = buttonStyles[variant].color;
        }}
      >
        {children}
      </div>
    </a>
  );
};

ProjectBtn.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "accent"]),
};

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
      setIsTablet(window.innerWidth > 425 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    projectContainer: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "100%",
      textAlign: "left",
    },
    projectHeading: {
      position: "relative",
      display: "inline-block",
      margin: "6rem 0 4rem 0",
      marginLeft: "10rem",
      ...(isTablet && {
        margin: "4rem 0 3rem 0",
        marginLeft: "4rem",
      }),
      ...(isMobile && {
        margin: "3rem 0 2rem 0",
        marginLeft: "2rem",
      }),
    },
    projectHeadingH1: {
      position: "relative",
      maxWidth: "10.6rem",
      color: "rgb(18, 30, 39)",
      fontWeight: "570",
      fontSize: "3rem",
      margin: "0 0 2rem 0",
      zIndex: 2,
      ...(isTablet && {
        maxWidth: "12rem",
        fontSize: "2.3rem",
        marginBottom: "2.2rem",
      }),
      ...(isMobile && {
        fontSize: "2rem",
      }),
    },
    projectHeadingAfter: {
      position: "absolute",
      backgroundColor: "#ed6955",
      width: "100%",
      height: "1.2rem",
      left: 0,
      bottom: "0.26em",
      zIndex: 1,
      ...(isTablet && {
        bottom: "42px",
      }),
    },
    projectWrapper: {
      display: "flex",
      marginBottom: "0rem",
      ...(isTablet && {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }),
    },
    projectContent: {
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
    projectTitle: {
      color: "rgb(18, 30, 39)",
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1.6rem",
      ...(isTablet && {
        fontSize: "2.3rem",
        marginBottom: "2.2rem",
      }),
    },
    projectSubtitle: {
      color: "rgb(18, 30, 39)",
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    projectDescription: {
      fontSize: "1.2rem",
      color: "rgb(18, 30, 39)",
      marginBottom: "1rem",
      fontWeight: "340",
      ...(isTablet && {
        fontSize: "1.3rem",
      }),
      ...(isMobile && {
        fontSize: "1.7rem",
      }),
    },
    projectSkills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "5px",
      justifyContent: "flex-start",
      margin: "1rem 0",
      ...(isTablet && {
        gap: "7px",
        width: "100%",
      }),
    },
    skillButton: {
      backgroundColor: "rgb(18, 30, 39)",
      margin: "2px",
      padding: "3px 12px",
      cursor: "pointer",
      color: "white",
      border: "none",
      transition: "background-color 0.2s ease",
      ...(isTablet && {
        padding: "5px 15px",
        fontSize: "1.2rem",
      }),
    },
    imageWrapper: {
      width: "700px",
      height: "auto",
      marginBottom: "2rem",
      marginLeft: "0rem",
      ...(isTablet && {
        width: "450px",
        height: "auto",
        margin: "3rem 0 3rem 0",
      }),
      ...(isMobile && {
        width: "350px",
        height: "auto",
        margin: "2rem 0 1rem 0",
      }),
    },
    projectImage: {
      width: "100%",
      height: "auto",
      borderRadius: "18px",
      objectFit: "contain",
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "15px",
      margin: "2rem 0",
    },
    metricCard: {
      textAlign: "center",
      padding: "15px",
      background: "#f8f9fa",
      borderRadius: "8px",
      border: "1px solid #e9ecef",
    },
    metricNumber: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#d54e3a",
      marginBottom: "5px",
    },
    metricLabel: {
      fontSize: "0.8rem",
      color: "#6c757d",
      fontWeight: "500",
    },
    visualizationSection: {
      background: "#f8f9fa",
      padding: "30px",
      margin: "30px 0 30px 0",
      borderRadius: "12px",
      border: "1px solid #e9ecef",
      maxWidth: "900px",
      ...(isTablet && {
        padding: "20px",
      }),
      ...(isMobile && {
        padding: "15px",
      }),
    },
    vizTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "rgb(18, 30, 39)",
      marginBottom: "20px",
      textAlign: "left",
    },
    insight: {
      background: "#e8f4f8",
      padding: "20px",
      borderRadius: "8px",
      borderLeft: "4px solid #3498db",
      marginTop: "20px",
    },
    insightText: {
      fontSize: "1rem",
      color: "rgb(18, 30, 39)",
      lineHeight: "1.6",
      margin: "0",
    },
    recommendations: {
      padding: "30px 0",
      margin: "30px 0 30px 0",
      maxWidth: "900px",
      ...(isTablet && {
        padding: "20px 0",
      }),
      ...(isMobile && {
        padding: "15px 0",
      }),
    },
    recommendationsTitle: {
      color: "rgb(18, 30, 39)",
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "2rem",
    },
    recommendationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginBottom: "3rem",
      ...(isMobile && {
        gridTemplateColumns: "1fr",
      }),
    },
    recommendationItem: {
      background: "#f8f9fa",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e9ecef",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
    },
    recommendationTitle: {
      fontWeight: "600",
      color: "rgb(18, 30, 39)",
      marginBottom: "12px",
      fontSize: "1.2rem",
    },
    recommendationText: {
      fontSize: "1.1rem",
      color: "rgb(18, 30, 39)",
      lineHeight: "1.6",
      fontWeight: "340",
      ...(isTablet && {
        fontSize: "1.2rem",
      }),
      ...(isMobile && {
        fontSize: "1.4rem",
      }),
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      width: "100%",
      marginTop: "3rem",
      flexWrap: "wrap",
      ...(isMobile && {
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }),
    },
  };

  return (
    <div style={styles.projectContainer}>
      <div style={styles.projectHeading}>
        <h1 style={styles.projectHeadingH1}>Project</h1>
        <div style={styles.projectHeadingAfter}></div>
      </div>

      <div style={styles.projectWrapper}>
        <div style={styles.projectContent}>
          <h1 style={styles.projectTitle}>Cyclistic Bike Share Analysis</h1>

          <div style={styles.projectSkills}>
            <button style={styles.skillButton}>SQL</button>
            <button style={styles.skillButton}>Google BigQuery</button>
            <button style={styles.skillButton}>Tableau</button>
            <button style={styles.skillButton}>Python</button>
            <button style={styles.skillButton}>Data Visualization</button>
          </div>

          <p style={styles.projectDescription}>
            Analyzed 5.6M+ bike share trips across 12 months to identify
            behavioral differences between casual riders and annual members.
            Developed data-driven marketing strategies to convert casual riders
            into members, focusing on seasonal patterns, geographic clustering,
            and usage behaviors.
          </p>

          <div style={styles.metricsGrid}>
            <div style={styles.metricCard}>
              <div style={styles.metricNumber}>5.6M+</div>
              <div style={styles.metricLabel}>Trips Analyzed</div>
            </div>
            <div style={styles.metricCard}>
              <div style={styles.metricNumber}>692</div>
              <div style={styles.metricLabel}>Stations</div>
            </div>
            <div style={styles.metricCard}>
              <div style={styles.metricNumber}>92%</div>
              <div style={styles.metricLabel}>Longer Trips</div>
            </div>
            <div style={styles.metricCard}>
              <div style={styles.metricNumber}>70%</div>
              <div style={styles.metricLabel}>Data Retention</div>
            </div>
          </div>

          <div style={styles.visualizationSection}>
            <h3 style={styles.vizTitle}>Data Visualization & Insights</h3>
            <div style={styles.imageWrapper}>
              <img
                src={viz}
                alt="Cyclistic Project Visualization"
                style={styles.projectImage}
              />
            </div>
            <div style={styles.insight}>
              <div style={styles.insightText}>
                <div style={{ marginBottom: "8px" }}>
                  • <strong>Members:</strong> Concentrated around business
                  districts and residential areas
                </div>
                <div style={{ marginBottom: "8px" }}>
                  • <strong>Casual Riders:</strong> Concentrated around tourist
                  attractions, parks, and recreational areas
                </div>
                <div>
                  • <strong>Insight:</strong> Usage patterns reflect different
                  trip purposes
                </div>
              </div>
            </div>
          </div>

          <div style={styles.recommendations}>
            <h3 style={styles.recommendationsTitle}>Key Recommendations</h3>
            <div style={styles.recommendationGrid}>
              <div style={styles.recommendationItem}>
                <div style={styles.recommendationTitle}>
                  Weekend Leisure Targeting
                </div>
                <div style={styles.recommendationText}>
                  Launch weekend-focused membership campaigns targeting
                  recreational users
                </div>
              </div>
              <div style={styles.recommendationItem}>
                <div style={styles.recommendationTitle}>
                  Seasonal Conversion
                </div>
                <div style={styles.recommendationText}>
                  Time promotions with summer peak usage periods for maximum
                  impact
                </div>
              </div>
              <div style={styles.recommendationItem}>
                <div style={styles.recommendationTitle}>
                  Geographic Targeting
                </div>
                <div style={styles.recommendationText}>
                  Deploy location-based marketing at high-traffic tourist
                  stations
                </div>
              </div>
              <div style={styles.recommendationItem}>
                <div style={styles.recommendationTitle}>
                  Duration-Based Incentives
                </div>
                <div style={styles.recommendationText}>
                  Create membership tiers optimized for longer recreational
                  rides
                </div>
              </div>
            </div>

            <div style={styles.buttonWrapper}>
              <ProjectBtn
                href="https://github.com/ThalithaThomas/Cyclistic_Bikeshare_Case_Study.git"
                variant="accent"
              >
                View Analysis
              </ProjectBtn>

              <ProjectBtn
                href="https://public.tableau.com/views/cyclisticbikeshareanalysis_17520817422090/cyclistic_bikeshare_dashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                variant="primary"
              >
                View Dashboard
              </ProjectBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
