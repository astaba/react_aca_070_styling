import React, { useState } from "react";
// import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     color: ${(props) => (!props.invalid ? "inherit" : "red")};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (!props.invalid ? "#ccc" : "red")};
//     background-color: ${(props) => (!props.invalid ? "tranparent" : "rgb(255, 185, 127)")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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
      {/* <FormControl className={!isValid && "invalid"}> */}
      {/* <FormControl invalid={!isValid}> */}
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={handleGoalChange} />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
