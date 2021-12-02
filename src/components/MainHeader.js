import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div id="header-main-page" className="shadow-box">
      <Navbar expand="lg" id="header-main-page" className="shadow-box">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="logo-img-text">ТОРГОВЫЙ ЦЕНТР</div>
            <div className="logo-img-text-title">БЕЛГЕФЕСТ</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="О нас" id="about-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  О нас
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/#vacancy">
                  Вакансии
                </NavDropdown.Item>
                <NavDropdown.Item href="#contacts">Контакты</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Магазины" id="shops-nav-dropdown">
                <NavDropdown.Item as={Link} to="/belmoris">
                  Мясной магазин ОАО 'Беловежский'
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ConstructionMaterials">
                  Строительные материалы
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ConstructionMaterials">
                  Электроинструмент
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ConstructionMaterials">
                  Сантехника
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/electronics">
                  Магазин 'Техника'
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobilcom">
                  Мобильные телефоны
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Красота и здоровье"
                id="beauty-heals-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/ultraSoundDiagnostic">
                  Кабинет УЗИ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dentistry">
                  Стоматологический кабинет
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/barbershop">
                  Парикмахерская 'Валенсия'
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lashmaker">
                  Наращивание ресниц
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/eyebrow">
                  Моделирование бровей
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Мастерские по ремонту"
                id="workshop-nav-dropdown"
              >
                <NavDropdown.Item href="#tv-repair">
                  Ремонт телевизоров
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobilcom">
                  Ремонт мобильных телефонов
                </NavDropdown.Item>
                <NavDropdown.Item href="#contacts">Контакты</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/tenants">
                Арендаторам
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainHeader;
