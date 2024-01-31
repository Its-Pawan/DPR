import styled from "styled-components";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <FeatureBox className="flex flex-col items-start">
      <div className="features-icon">
        <img src={icon} alt={`Icon for ${title}`} />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </FeatureBox>
  );
};

export default FeatureCard;

const FeatureBox = styled.div`
  box-shadow: 1px 1px 5px #00000024;
  background: var(--white);
  padding: 40px 15px;
  border-radius: 5px;
  transition: all 0.5s;
  height: 380px;
  position: relative;
  margin-bottom: 3rem;
  .features-icon {
    width: 80px;
    height: 80px;
    background: var(--yellow);
    position: absolute;
    top: -55px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    transition: 0.5s all;
    img {
      filter: brightness(0) invert(1);
    }
  }
  h5 {
    font-size: var(--font-size-5);
    font-weight: 600;
    color: var(--black);
    line-height: 1.5;
    margin-bottom: 15px;
  }
  p {
    font-size: var(--font-size-5);
    font-weight: 300;
    color: #232222;
    text-align: left;
    padding: 10px 0;
  }
  @media (min-width: 768px) {
    p {
      padding: 0;
    }
  }
`;
