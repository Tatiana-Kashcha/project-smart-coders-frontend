// import styled from 'styled-components';
// import { Form, Field, ErrorMessage } from 'formik';

// export const FormWrapper = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const StarContainer = styled.div`
//   position: relative;
// `;

// export const Star = styled.div`
//   width: 500px;
//   > * {
//     float: right;
//   }
// `;

// export const RatingLabel = styled.label`
//   height: 50px;
//   width: 50px;
//   position: relative;
//   cursor: pointer;
//   padding: 0 10px;

//   @for $i from 5 through 1 {
//     &:nth-of-type(#{$i}):after {
//       animation-delay: ${props => props.index * 0.1}s;
//     }
//   }

//   &:after {
//     transition: all 1s ease-out;
//     position: absolute;
//     content: '☆';
//     color: orange;
//     font-size: 65px;
// `;

// export const RatingInput = styled(Field)`
//   display: none;

//   &:checked {
//     + ${RatingLabel}:after, ~ ${RatingLabel}:after {
//       content: '★';

//       color: gold;
//       text-shadow: 0 0 10px gold;
//     }
//   }
// `;

// export const CommentInput = styled(Field)`
//   width: 350px;
//   padding: 22px 36px;
//   color: #000000;
//   background: #efefef;
//   border-radius: 18px;
//   border: 1px solid #efefef;
// `;

// export const ErrorContainer = styled(ErrorMessage)`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin-top: 12px;
//   font-size: 24px;
//   font-weight: 500;
// `;

// export const Button = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #0074d9;
//   color: #fff;
//   border: none;
//   border-radius: 18px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
