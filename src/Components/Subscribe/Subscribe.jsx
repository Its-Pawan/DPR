import styled from "styled-components";

const Subscribe = () => {
  return (
    <Subs>
      <div className="container">
        <h5>Subscribe</h5>
        <p>Get weekly top new jobs delivered to your inbox</p>

        <form className="form-subscribe" action="">
          <div className="input-group">
            <input
              type="text"
              name="subscribe"
              placeholder="Your eamil address"
            />
            <button  type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </Subs>
  );
};

export default Subscribe;

const Subs = styled.div`
  background: var(--yellow);
  padding: 100px 15px;
  h5 {
    font-size: var(--font-size-1);
    color: var(--white);
    font-weight: 300;
    text-align: center;
  }
  p {
    font-size: var(--font-size-5);
    font-weight: 500;
    color: var(--white);
    text-align: center;
  }
  .form-subscribe {
    max-width: 600px;
    margin: 0 auto;
    .input-group {
        margin-top: 2rem;
      position: relative;
      display: table;
      border-collapse: separate;
      width: 100%;
      height: 45px;
      border-radius: 20px;
      overflow: hidden;
      input {
        height: 100%;
        width: 70%;
        padding-left: 20px;
        font-size: 18px;
        &:focus{
            outline: none;
        }
      }
      button{
        background: var(--gray);
        color: var(--white);
        width: 30%;
        height: 100%;
        font-size: 18px
      }
    }
  }
  @media (min-width: 768px) {
    padding: 100px;
  }
`;
