import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="footer-logo">
          <center>
            <img className="w-[150px]" src="./assets/logo.png" />
          </center>
        </div>
        <div className="social mt-6 pb-4">
          <ul className="flex justify-center gap-6 ">
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="footer-menu py-4">
          <ul className="flex justify-center gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>|</li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>|</li>
            <li>
              <a href="#form">Contact</a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="copyright pt-4 text-center">
          <p>© {new Date().getFullYear()} DPRExpert</p>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: #181818;
  padding: 80px 15px;
  margin-top: 0px;
  color: var(--white);
  hr {
    border-color: var(--gray2) !important;
  }
  .social ul li a {
    font-size: var(--font-size-4);
  }
  .copyright {
    color: var(--gray2);
  }

  @media (min-width: 768px) {
    padding: 80px 70px 30px;
  }
`;
