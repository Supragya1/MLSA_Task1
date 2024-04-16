/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import "./Portfolio.css";
/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Virtual Try on",
    description:
    `Developing a cutting-edge machine learning model aimed at enabling users to virtually try on clothes from e-commerce websites using their own images.
    The model segments the clothing from the e-commerce product image and applies it to the user's image, providing a real-time preview of how the clothes would look on them.
    Implementing an outfitting UNet to learn garment features and integrate them into the denoising UNet, enhancing method controllability with minimal information loss.
    Conducting extensive experiments on high-resolution datasets to validate method superiority over other VTON methods in both fidelity and controllability, showcasing its broad application prospects for virtual try-on.
    Technologies utilized: Python, PyTorch, ONNX, Conda, CUDA.
    `,  
    // url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Gram Jeevan Shakti",
    description:
      `Developed an Android application aimed at improving healthcare accessibility in both urban and rural areas of India.
      User Perspective:
      Implemented features to track user health metrics such as sugar levels, blood pressure, medication history, and upcoming medical appointments.
      Provided time alarms for medication intake, medication refillment reminders according to prescriptions, and facilitated sharing of health information with doctors.
      Maintained a record of prescriptions for easy reference.
      Integrated a deep learning model to analyze symptoms provided by user to get estimated disease prediction in backend, and suggest nearby specialized doctor based on that disease.
      Enabled users to schedule appointments with local doctors or access online consultations with specialists via video calls and messaging features.
      Rural India Perspective:
      Establishing a comprehensive platform for medical institutions to upload specialized courses tailored to enhance the skills of rural healthcare providers who are bridging the gap in areas with limited access to doctors, facilitating their training and certification process. This initiative ensures that rural healthcare providers meet the necessary standards before entering practice.
      Event notification feature to inform healthcare providers in rural areas about nearby medical events, including sessions with renowned doctors, medical camps, and other relevant sessions.`,
    // url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Action Recognition with Scalable Video Modeling (VideoMAE V2)",
    description:
      `Developing an action recognition system leveraging VideoMAE V2, a scalable video pre-training approach. It involves exploring deep learning techniques for video analysis and understanding.
      Researching validation of VideoMAE V2, a scalable self-supervised pre-trainer for video foundation models. A dual masking strategy for efficient pre-training, reducing computational costs while maintaining high performance. Demonstrated state-of-the-art results on Kinetics and Something-Something datasets, showcasing its potential as a general video representation learner. 
      Technologies used: TensorFlow, PyTorch, OpenCV, Python, FFmpeg.
      `,
    // url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Real-Time Violence Detection in Surveillance Video Streams",
    description:
      "Developed and implemented a machine learning model to analyze live video feeds from surveillance cameras to report instances of violence to the relevant authorities.Tech Stack – TensorFlow, OpenCV, Python, RTSP, CUDA",
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Real-Time College Cafe Management System",
    description:
      "Developed an application for college cafeterias where students can place their orders and the cafes receive the order in real time.Tech  Stack – React.js , Spring Boot and PostgreSQL",
    // url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Unreal Adventure",
    description:
    `Designed and developed a challenging 3D level-based runner game using Unreal Engine.
        Incorporated intricate puzzles and engaging gameplay mechanics to enhance player immersion and enjoyment.
        Created visually stunning environments and character animations to elevate the gaming experience.
        Demonstrated adeptness in leveraging Unreal Engine for 3D game development and implementing dynamic gaming experiences.`,
     // url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  }, 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{padding:"0rem"}}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "120%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", textAlign: "center",fontFamily:"sans-serif", fontWeight: "400", fontSize:"1.2rem" , textDecoration:"underline"}}>{project.title}</h3>
              </a>
              <p className="small" style={{fontFamily:"sans-serif", textAlign: "center", height: "170px", overflow:"auto"}}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
