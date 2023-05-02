import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { useState } from "react";

const portfolioItems = {
  name: "Benevity Causmic",
  screenshots: [
    "/media/benevity/bs1.png",
    "/media/benevity/bs2.png",
    "/media/benevity/bs3.png",
    "/media/benevity/bs4.png",
  ],

  descriptions: [
    "Application homepage, which prompts the user to specify the parameters for their report, upload a CSV file of the charity causes they would like to look up, and enter their email to get the report straight to their inbox.",
    "If the user wants to look up information for a single cause, they can do so on this page.",
    "The results page, which displays the information for the single cause user specified. ",
    "Application use statistics, which allows users to find their previous requests and download them again, in case they deleted the email with the report.",
  ],
};

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row className="mt-5">
        <h2>My work</h2>

        {show ? (
          <ScreenshotCarousel
            item={portfolioItems}
            show={show}
            handleClose={handleClose}
          />
        ) : (
          <></>
        )}

        <Col xs={12} md={4}>
          <ProjectCard
            title={"Benevity Causmic"}
            description={
              <>
                <p>
                  A full-stack web application that allows users to compile data
                  on charity causes and recieve a link to the report via email.
                </p>

                <p>
                  This project was completed during an internship term with
                  Benevity, and I was responsible for the workflow which allows
                  users to get a live preview of information on individual
                  causes. The source code for this project is not available, but
                  you can see more screenshots by clicking the button below.
                </p>
              </>
            }
            features={[
              "Async API Calls",
              "Email Integration",
              "GUI",
              "Batch Processing",
              "CI/CD",
              "Unit Testing",
              "Admin Dashboard",
              "App health monitoring",
              "Storage management",
            ]}
            technologies={["Java ☕", "Vue.js 🖖", "AWS ☁️", "Docker 🐳"]}
            imageUrl={"/media/b1.jpg"}
            onClick={handleShow}
          ></ProjectCard>
          <ProjectCard
            title={"Flix"}
            description={
              <>
                <p>
                  A full-stack application that allows users to search their
                  local movie theatres and purchase tickets for their favourite
                  movies.
                </p>
                <p>
                  This project was built as part of a group for a Systems
                  Analysis and Software Engineering Design, and I was
                  responsible for the seat selection and purchasing workflows,
                  as well as data validation and error handling.
                </p>
              </>
            }
            features={[
              "MVC",
              "CRUD Operations",
              "Input Validation",
              "GUI",
              "Admin Panel",
            ]}
            technologies={["Java ☕", "React ⚛️", "MySQL 🐬"]}
            imageUrl={"/media/flix.png"}
            projectUrl="https://github.com/KBaldwin2/ENSF614Project"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"Fiberr"}
            description={
              <>
                <p>
                  This app allows a user to enter their health goals, then scan
                  any item in store and quickly check if it aligns with their
                  objectives.
                </p>
                <p>
                  This project was built in 48 hours as part of Hack the Change
                  2022, and I was responsible for the UI design and prototyping.
                </p>
              </>
            }
            features={[
              "Live Barcode Scanner",
              "OpenFoodData API integration",
              "Nutition Facts Display",
              "Healthy food recommendations",
            ]}
            technologies={[
              "React Native 📱",
              "Python 🐍",
              "Flask 🧪",
              "OpenCV 📷",
            ]}
            imageUrl={"/media/fiberr.png"}
            projectUrl="https://github.com/VladT7/HtCH22"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"Course Cart"}
            description={
              <div>
                <p>
                  A full-stack application that allows multiple students to
                  register for university courses, based on their schedule and
                  pre-requisites.
                </p>
                <p>
                  This project was built for the Advanced Architecture and
                  Software Design course at the University of Calgary, and I was
                  responsible for backend implementation of CRUD database
                  operations, data architecture and validation, as well as error
                  handling.
                </p>
              </div>
            }
            features={["MVC", "CRUD Operations", "Input Validation"]}
            technologies={["Java ☕", "React ⚛️", "MySQL 🐬"]}
            imageUrl={"/media/courseCart.png"}
            projectUrl="https://github.com/VladT7/ENSF607project"
          ></ProjectCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
