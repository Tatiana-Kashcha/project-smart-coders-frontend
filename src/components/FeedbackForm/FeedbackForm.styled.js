import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StarContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 12px 14px;

  font-family: var(--fonts-text);
  font-weight: 600;
  line-height: 1.25;

  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.thirdBackground};

  border-radius: 8px;
  border: 1.5px solid;
  // overflow: hidden;
  resize: none;

  border-color: ${props => (props.error ? 'red' : 'transparent')};
`;

export const ErrorContainer = styled(ErrorMessage)`
  color: var(--red-error);
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  margin-top: 8px;
`;

export const ReviewContainer = styled.div`
  margin-bottom: 14px;
`;

export const ContainerLabelAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UpContainerButton = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 12px center;

  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.backgroundButton};
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: var(--primary);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  width: 30px;
  height: 30px;

  padding: 12px center;
  background-color: rgba(234, 61, 101, 0.2);
  color: var(--main-red);
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background: rgba(234, 61, 101, 0.5);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const DownContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.theme.colors.backgroundButton};
  color: ${props => props.theme.colors.primaryText};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &:hover {
    background-color: var(--secondary);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 12px auto;
  background-color: ${props => props.theme.colors.buttonNotActive};
  color: ${props => props.theme.colors.secondText};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &:hover {
    background-color: var(--secondary);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;
