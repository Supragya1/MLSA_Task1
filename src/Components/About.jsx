/**
 * About component
 *
 * Space for you to describe more about yourself.
 */
import React from "react";  
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";
const iframeSrc = "https://skybox.blockadelabs.com/e/adeb37bbc78f7911c95db964594556f2";
// const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey! I'm a 2nd-year BTech CS student at UPES Dehradun, passionate about coding, design, and development. As a budding Software Developer  and Design Enthusiast  ,I also enjoy speed cubing and fitness.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Full Stack Development",
  "3D Graphics with Three.js",
  "Game Development",
  "App development",
  "AI/ML",
  "Competitive Programming",
  "Graphic Designing",
  "UI/UX Designing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Design, Code, Compete: Crafting web, app, game wonders! 🚀💻🎨 I have experience with multiple programming languages & frameworks namely, C, Java, Python, Javascript, Bootstrap, React, Note.js, Express & Three.js.";

const About = () => {
  return (
    <section className="padding" id="about" style={{paddingBottom:"0rem"}}>
      <iframe
        src={iframeSrc}
        width="100%"
        height="1000"
        style={{ border: "0", marginTop: "-80px" }}
        allow="fullscreen"
        title="About Background"
      ></iframe>
      {/* div above content div to avoid iframe overlap */}
      <div
        style={{
          position: "absolute",
          top: "21px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "3.72rem",  
          borderRadius: "8px",
          // backgroundColor: "white",
          width: "50%",
          // padding: "4rem",
          margin: "2.4rem auto",
          textAlign: "center",
        }}
      ></div>
      {/* div behind content with hover effect */}
      <div
        className="middle-div"
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'}
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "4rem",
          borderRadius: "8px",
          width: "50%",
          margin: "3rem auto",
          textAlign: "center",
          transition: "background-color 0.3s ease",
        }}
      >
        <h2 style={{color:"black"}}>About Myself</h2>
        <p className="large" style={{ fontFamily: "Roboto",color: "black", fontWeight: "bold" }}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" , fontWeight:"normal" }}>{detailOrQuote}</p>
      </div>
      {/* div below content div to avoid iframe overlap */}
      <div
        style={{
          position: "absolute",
          bottom: "-105px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "4.3rem",
          borderRadius: "6px",
          // backgroundColor: "white",
          width: "49.9%",
          // padding: "4rem",
          margin: "2.4rem auto",
          textAlign: "center",
        }}
      ></div>
    </section>
  );
};

export default About;
