import React from "react";
import { HeroImage } from "../../Components/HeroImage";
import { Card } from "../../Components/Card";
import { Img } from "../../Components/Image";
import { Text } from "../../Components/Text";
import { Label } from "../../Components/Label";
import profilePic from "../../assets/Profile.jpg";
import { education } from "../../data/educationData";

export const Home: React.FC = () => {
  return (
    <div>

      {/* 🔵 HERO SECTION */}
      <HeroImage
        backgroundImage="/banner.jpeg"
        title="Hi, I'm Rishitha 👋"
        subtitle="Software Developer • Designer • Learner"
        disabled={false}
      />

      {/* 🔵 ABOUT ME - Side by Side Layout */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        padding: "40px",
        maxWidth: "14 00px",
        margin: "0 auto"
      }}>

        {/* Profile Photo - LEFT */}
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <Img
              src={profilePic}
              alt="Rishitha"
              width="300px"
              height="300px"
              disabled={false}
            />
          </div>
        </div>

        {/* About Me Card - RIGHT */}
        <div style={{ flex: 1 }}>
          <Card
            backgroundColor="#ffffff"
            disabled={false}
          >
            <>
              <div style={{ fontSize: "28px", fontWeight: "bold" }}>
                <Label text="About Me" color="#007bff" />
              </div>
              <Text
                content="I Full Stack Web Development student with strong technical foundation in JavaScript, React, Java and database management,
                complemented by hands-on experience building real-world applications. Proven ability to deliver complete solutions from concept to
                deployment, including API integration, responsive web design and database architecture. Strong problem-solving skills demonstrated
                through implementing complex algorithms and troubleshooting application issues. Excellent communication and teamwork abilities
                developed through collaborative work environments. Eager to contribute technical skills while learning from experienced developers
                in a dynamic co-op setting."
                size="16px"
                color="#333"
              />
            </>
          </Card>
        </div>
      </div>

      {/* 🔵 EDUCATION */}
      <div style={{ margin: "60px 40px" }}>
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>
          <Label text="Education" color="#007bff" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "25px",
          }}
        >
          {education.map((edu, index) => (
            <Card
              key={index}
              backgroundColor="#ffffff"
              disabled={false}
            >
              <div
                onClick={() => window.open(edu.url, "_blank")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => { if ((e as React.KeyboardEvent).key === "Enter") window.open(edu.url, "_blank"); }}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Logo */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "15px"
                  }}>
                    <Img
                      src={edu.image}
                      alt={edu.school}
                      width="110px"
                      height="110px"
                    />
                  </div>

                  {/* Title */}
                  <Label
                    text={edu.school}
                    color="#222"
                  />

                  {/* Program */}
                  <Text
                    content={edu.program}
                    size="15px"
                    color="#555"
                  />

                  {/* Year */}
                  <Text
                    content={edu.year}
                    size="13px"
                    color="#777"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;