import styled from "styled-components";

const UniButton = (props) => {
  return <Button type={props.btnType}>{props.btnText}</Button>;
};

export default UniButton;

const Button = styled.button`
  background: var(--yellow);
  border: 1px solid var(--yellow);
  color: #000 ;
  padding: 12px ;
  font-weight: 400;
  border-radius: 3;
  font-size: 1em;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  transition: 0.5s all;
  width: 100%;
  text-transform: uppercase;
  &:hover{
    background: 0 0;
    border: 1px solid var(--black);
    color: #000!;
  }
`;
