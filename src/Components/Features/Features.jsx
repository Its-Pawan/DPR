import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import FeatureData from "../../FeatureData";

const Features = () => {
  return (
    <Feature className="feature pt-24 md:px-24 md:py-24">
      <div className="container">
        <h3>DPREXPERT</h3>
        <h4>ON-DEMAND AI MANAGER</h4>
        <p>
          An all-in-one application that gives you access to project planning
          services. It helps in managing on-role and off-role staff, equipment,
          material, sub-contractor, imprest, and vendor. Additionally, it
          assists you with the day-to-day and project progress reporting.
        </p>

        <div className="feature-cards grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 ">
          {FeatureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </Feature>
  );
};

export default Features;

const Feature = styled.section`
  background: url(./assets/road-bg.png) top center no-repeat, #f7f7f7;
  background-size: cover;
  img {
    width: 60px;
  }
  h3 {
    font-size: var(--font-size-3);
    color: var(--black);
    font-weight: 600;
    text-align: center;
  }
  h4 {
    font-size: var(--font-size-2);
    text-align: center;
    font-weight: 100;
    color: var(--black);
    line-height: 1.1;
  }
  p {
    font-size: var(--font-size-5);
    color: var(--black);
    padding: 10px 0;
    font-weight: 300;
    text-align: center;
  }

  .feature-cards {
    p {
      padding: 10px 0;
      text-align: start;
    }
  }

  @media (min-width: 768px) {
    h4 {
      font-size: var(--font-size-1);
      line-height: 1.5;
    }
    P {
      /* padding: 0 200px; */
    }
    .feature-cards {
      p {
        padding: 0;
      }
    }
  }
`;
