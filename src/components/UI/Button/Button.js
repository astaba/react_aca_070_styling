/**
 * styling with css-modules
 * In the prop: className={styles.button}
 * we are still writing the plain string of a css selector,
 * however the css-module system will spice it up so as to be
 * unique to that component like "Button_button__hashCode".
 */
import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;

/**
 * styling with styled-components
 */
// import { styled } from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 680px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// export default Button;

/**
 * styling with plain css
 */
// import React from 'react';

// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button">
//       {props.children}
//     </button>
//   );
// };

// export default Button;