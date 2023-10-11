import styled from 'styled-components';
import { ReactComponent as EditTask } from '../../icons/pencil.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { globalTheme } from 'theme';
import { Form, ErrorMessage, Field } from 'formik';

export const IconEdit = styled(EditTask)`
  height: 100%;
  color: ${globalTheme.colors.white};
`;
export const IconPlus = styled(Plus)`
  height: 100%;
  color: ${globalTheme.colors.white};
`;

export const TaskForm = styled(Form)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${props => props.theme.colors.secondText};
  text-align: left;

  @media (min-width: 768px) {
    padding: 24px 0px;
    height: 360px;
  }
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${globalTheme.colors.secondText};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Span = styled.span`
  margin-top: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${globalTheme.colors.secondText};
`;

export const InputField = styled(Field)`
  height: 46px;
  margin-bottom: 8px;
  padding: 14px;
  width: 100%;
  outline: none;
  background-color: ${props => props.theme.colors.forthBackground};
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-family: 'Inter';
  color: ${props => props.theme.colors.primaryText};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    height: 46px;
  }

  &::placeholder {
    color: ${props => props.theme.colors.black};
  }
`;

export const Errors = styled(ErrorMessage)`
  min-height: 14px;
  margin-top: -6px;
  // margin-bottom: 2px;
  color: red;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const TextAdd = styled.span`
  color: white;
`;

export const Button = styled.button`
  flex-grow: 1;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background: ${globalTheme.colors.primary};
  box-shadow: ${globalTheme.shadow.boxShadow};
  border-radius: 8px;
  border: none;
  color: ${globalTheme.colors.white};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const ButtonCancel = styled.button`
  cursor: pointer;
  flex-grow: 0.73;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: #efefef;
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: ${globalTheme.colors.white};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.secondText};
`;

// export const RadioButtonLabel = styled.label`
//   padding-left: 20px;

//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 1.17;
//   color: ${globalTheme.colors.secondText};
//   cursor: pointer;

//   &:not(:last-child) {
//     margin-right: 16px;
//   }
// `;

// export const RadioButtonInput = styled(Field)`
//   appearance: none;
//   position: absolute;
//   height: 0;
//   width: 0;
//   border: none;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 2px;
//     left: -17px;

//     border-radius: 50%;
//     height: 10px;
//     width: 10px;
//     border: 1px solid var(--btn-text-color);

//     ${({ value }) => {
//       switch (value) {
//         case 'low':
//           return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
//         case 'medium':
//           return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
//         case 'high':
//           return 'background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)';
//         default:
//           return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
//       }
//     }}
//   }

//   &:checked::before {
//     content: '';
//     position: absolute;
//     height: 10px;
//     width: 10px;
//     outline: 2px solid;
//   }
// `;
export const RadioField = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  position: relative;
  padding-left: 20px;
  display: flex;
  align-items: center;
  margin-top: 16px;

  color: ${globalTheme.colors.secondText};
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 28px;
  }
`;

export const RadioSpan = styled.span`
  position: absolute;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'black';
    }
  }};

  ${RadioLabel}:nth-child(1) ${RadioField}:checked + & {
    outline: 1.2px solid #72c2f8;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(2) ${RadioField}:checked + & {
    outline: 1.2px solid #f3b249;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(3) ${RadioField}:checked + & {
    outline: 1.2px solid #ea3d65;
    outline-offset: 1px;
  }
`;
