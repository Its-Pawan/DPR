import { useState } from "react";
import styled from "styled-components";
import UniButton from "../UniButton/UniButton";

const Banner = () => {
  const [labelPosition, setLabelPosition] = useState({});

  const toggleLabelPosition = (fieldName, value) => {
    setLabelPosition((prev) => ({
      ...prev,
      // [fieldName]: !prev[fieldName],
      [fieldName]: value,
    }));
  };
  const focusInput = (fieldName) => {
    document.getElementById(fieldName).focus();
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "number") {
      setPhone(value);
    } else if (name === "description") {
      setDescription(value);
    }

    if (value !== "") {
      toggleLabelPosition(name, true);
    } else {
      toggleLabelPosition(name, false);
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Your form submission logic goes here
  };
  return (
    <Header>
      <div className="container w-full">
        <div className="banner-content flex w-full flex-col md:flex-row justify-between">
          <div className="banner-content flex flex-col md:justify-center  gap-4 md:gap-6  w-full md:w-[50%]   md:pb-0">
              <p>Everything at your fingertips</p>
              <h1>
                Perfect Application for <br /> more than just fun
              </h1>
              <h2>
                Fossil fuel prices are on the rise and likely to increase in
                proportion with inflation over coming years, track and earn
                more.
              </h2>
          </div>

          <div className="md:w-[35%] md:flex justify-end">
            <div className="banner-form w-full ">
              <h3>Fill the Form</h3>
              <form
                action=""
                className="relative pt-8 md:pt-4 form "
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <label
                    htmlFor="fullName"
                    className={`label ${
                      labelPosition.fullName ? "floating-label" : ""
                    }`}
                    onClick={() => focusInput("fullName")}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    // required
                    onChange={handleInputChange}
                    onFocus={() => toggleLabelPosition("fullName", true)}
                    onBlur={() =>
                      toggleLabelPosition("fullName", fullName !== "")
                    }
                  />
                  {formSubmitted && fullName === "" && (
                    <span className="required-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-row">
                  <label
                    htmlFor="email"
                    className={`label ${
                      labelPosition.email ? "floating-label" : ""
                    }`}
                    onClick={() => focusInput("email")}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // required
                    onFocus={() => toggleLabelPosition("email", true)}
                    onBlur={() => toggleLabelPosition("email", email !== "")}
                    onChange={handleInputChange}
                  />
                  {formSubmitted && email === "" && (
                    <span className="required-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-row">
                  <label
                    htmlFor="number"
                    className={`label ${
                      labelPosition.number ? "floating-label" : ""
                    }`}
                    onClick={() => focusInput("number")}
                  >
                    Phone No
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    onFocus={() => toggleLabelPosition("number", true)}
                    onBlur={() => toggleLabelPosition("number", number !== "")}
                    onChange={handleInputChange}
                  />
                  {formSubmitted && phone === "" && (
                    <span className="required-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-row">
                  <label
                    htmlFor="description"
                    className={`label ${
                      labelPosition.description ? "floating-label" : ""
                    }`}
                    onClick={() => focusInput("description")}
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    onFocus={() => toggleLabelPosition("description", true)}
                    onBlur={() =>
                      toggleLabelPosition("description", description !== "")
                    }
                    onChange={handleInputChange}
                  ></textarea>
                  {formSubmitted && description === "" && (
                    <span className="required-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="submit-btn">
                  <UniButton btnType="submit" btnText="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Banner;

const Header = styled.section`
  width: 100%;
  background: var(--bg-gradient);
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--white);
  .banner-content {
    p {
      font-size: var(--font-size-3);
      font-weight: 600;
      color: var(--white);
    }
    h1 {
      font-size: var(--font-size-2);
      font-weight: 100;
      color: var(--white);
      line-height: 0.95;
      margin-left: -3px;
    }
    h2 {
      font-size: var(--font-size-4);
      font-weight: 300;
      color: var(--white);
      line-height: 1.5;
    }
  }
  .banner-form {
    background-color: var(--white);
    width: 100%;
    padding: 2.2rem;
    border-radius: 10px;
    margin-top: 3rem;
    h3 {
      font-size: var(--font-size-3);
      font-weight: 600;
      text-align: center;
      color: var(--black);
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .form-row {
        height: 50px;
        color: var(--black);
        /* border: 2px solid black; */
        border-radius: 5px;
        position: relative;
        .label {
          color: var(--gray);
          position: absolute;
          top: 50%;
          left: 10px;
          background-color: var(--white);
          transform: translateY(-50%);
          display: inline-block;
          padding: 0 0.1rem;
          line-height: 1;
          cursor: text;
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 2;
          color: var(--gray2);
          font-weight: 400;
          font-size: var(--font-size-4);
        }

        input,
        textarea {
          border: 1px solid var(--gray2);
          padding-left: 10px;
          width: 100%;
          height: 100%;
          font-size: var(--font-size-4);
          outline: none;
          border-radius: 5px;
          transition: border-color var(--smooth-1);

          &:focus {
            border-color: var(--black);
          }
        }
        textarea {
          resize: none;
        }
        .floating-label {
          font-size: var(--font-size-4);
          color: inherit;
          top: -5%;
          /* transform: translateY(-155%); */
          color: var(--black);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .form{
      gap: 30px !important;
    }
  }
`;
