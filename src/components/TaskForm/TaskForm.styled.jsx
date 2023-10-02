import styled from 'styled-components';
import { ReactComponent as EditTask } from '../../icons/pencil.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { globalTheme } from 'theme';

export const IconEdit = styled(EditTask)`
  width: 100%;
  height: 100%;
  color: ${globalTheme.colors.white};
`;
export const IconPlus = styled(Plus)`
  width: 100%;
  height: 100%;
  color: ${globalTheme.colors.white};
`;


export const Form = styled.form`


font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${globalTheme.colors.secondText};
  text-align: left;

  @media (min-width: 768px) {
    /* padding: 40px 28px; */
    /* width: 396px; */
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
    // margin-bottom: 8px;
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

export const Input = styled.input`
  height: 42px;
  margin-bottom: 8px;
  padding: 14px;
  width: 100%;
  outline: none;
  background-color: #F6F6F6;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-family: 'Inter';
  color: ${globalTheme.colors.secondText};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    height: 46px;

  }

  &::placeholder {
    
    color: ${globalTheme.colors.secondText};
  }
`;

export const Errors = styled.span`
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
`

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
  margin-bottom: 32px;
  

  
`;

export const RadioButtonLabel = styled.label`
  padding-left: 20px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${globalTheme.colors.secondText};
  cursor: pointer;
  

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;
  border: none;
  

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: -17px;

    border-radius: 50%;
    height: 10px;
    width: 10px;
    border: 1px solid var(--btn-text-color);
    
    ${({ value }) => {
      switch (value) {
        case 'Low':
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
        case 'Medium':
          return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
        case 'High':
          return 'background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)';
        default:
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
      }
    }}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
     outline: 2px solid;
  }
`;