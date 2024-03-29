import React from "react";
import jere from "../assets/jere.jpeg";
import walter from "../assets/walter.jpeg";
import abdullah from "../assets/abdullah.jpg";
import benjamin from "../assets/benjamin.jpeg";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
          <li data-target="#myCarousel" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="profilePicture" alt="jere" src={jere} />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="quotes">
                  <strong>Jere Saarelma</strong>
                  <br />
                  {t("about.section.jere")}
                </h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="profilePicture" alt="walter" src={walter} />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="quotes">
                  <strong>Walter Ruoppa</strong>
                  <br />
                  {t("about.section.walter")}
                </h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="profilePicture" alt="Abdullah" src={abdullah} />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="quotes">
                  <strong>
                    Abdullah <br />
                    Hinnawi <br />
                  </strong>
                  {t("about.section.abdullah")}
                </h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="profilePicture" src={benjamin} alt="Benjamin" />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="quotes">
                  <strong>Benjamin Bowo</strong>
                  <br />
                  {t("about.section.benjamin")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
