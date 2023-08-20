import React, { useState } from "react";
import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

const StyledDiv = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    background-color: rgb(255, 185, 127);
    border-color: red;
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [goalValue, setGoalValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleGoalChange = (event) => {
    const targetValue = event.target.value;
    if (targetValue.trim().length > 0) setIsValid(true);
    setGoalValue(targetValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (goalValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(goalValue);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledDiv className={!isValid && "invalid"}>
        {/* <StyledDiv invalid={!isValid}> */}
        {/* <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}> */}
        <label>Course Goal</label>
        <input type="text" onChange={handleGoalChange} />
        {/* </div> */}
      </StyledDiv>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
