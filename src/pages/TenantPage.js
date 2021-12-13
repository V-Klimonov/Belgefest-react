import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CarouselImg from "../components/CarouselImg";

const TenantPage = ({ pageData }) => {
  const changeTitle = () =>{
    document.title = pageData.title;
  }

  useEffect(() => {
    changeTitle();
  }, []);
  return (
    <div className="info-box-wrapper">
      <div className="container">
        <Link className="color-link" to="/">
          На главную
        </Link>
        <div className="info-box-inner">
          <CarouselImg pageData={pageData} />
          <div className="info-box-text">
            <h2 className="box-title-text">{pageData.fullTextTitle}</h2>
            <p className="paragraphInPage">{pageData.fullDescription}</p>
            <a className="phone-number" href={pageData.hrefPhoneNumMob}>
              {pageData.phoneNumMob}
            </a>
            <p> Мои работы:</p>

            <p>Режим работы:</p>
            <div className="working-hours">
              <img
                className="clock-img"
                src={process.env.PUBLIC_URL + "/img/clock.svg"}
                alt="clock"
              />
              <span> {pageData.workingHours}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPage;
