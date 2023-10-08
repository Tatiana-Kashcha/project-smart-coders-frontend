import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { globalTheme } from 'theme';

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
  line-height: 1;

  color: ${props => props.theme.colors.modalFormLabel};
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 12px 14px;

  font-family: ${globalTheme.fonts.fontsText};
  font-weight: 600;
  line-height: 1.25;

  border-radius: 8px;
  border: 1.5px solid;
  resize: none;

  color: ${props => props.theme.colors.secondText};
  background-color: ${props => props.theme.colors.forthBackground};
  border-color: ${props =>
    props.error
      ? `${globalTheme.colors.redError}`
      : props.theme.colors.textareaBorder};
`;

export const ErrorContainer = styled(ErrorMessage)`
  margin-top: 8px;

  font-family: ${globalTheme.fonts.fontsText};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;

  color: ${globalTheme.colors.redError};
`;

export const ReviewContainer = styled.div`
  margin-bottom: 14px;
`;

export const ContainerLabelAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const UpContainerButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  padding: 12px center;

  border-radius: 50px;
  border: none;
  cursor: pointer;

  color: ${props =>
    props['data-active']
      ? `${globalTheme.colors.white}`
      : `${globalTheme.colors.primary}`};
  background-color: ${props =>
    props['data-active']
      ? `${globalTheme.colors.primary}`
      : props.theme.colors.secondBackgroundButton};

  &:hover {
    color: ${globalTheme.colors.white};
    background-color: ${globalTheme.colors.primary};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  padding: 12px center;

  border-radius: 50px;
  border: none;
  cursor: pointer;

  background-color: ${globalTheme.colors.bgDelBtn};
  color: ${globalTheme.colors.mainRed};

  &:hover {
    color: ${globalTheme.colors.white};
    background: ${globalTheme.colors.mainRed};
    box-shadow: ${globalTheme.shadow.modalHoverShadow};
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

  font-family: ${globalTheme.fonts.fontsText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  color: ${globalTheme.colors.white};
  background-color: ${globalTheme.colors.secondary};
  // // color: ${props => props.theme.colors.secondText};
  // background-color: ${props => props.theme.colors.backgroundButton};

  &:hover {
    // color: ${globalTheme.colors.white};
    // background-color: ${globalTheme.colors.secondary};
    box-shadow: ${globalTheme.shadow.modalHoverShadow};
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 12px auto;

  font-family: ${globalTheme.fonts.fontsText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  color: ${props => props.theme.colors.secondText};
  background-color: ${props => props.theme.colors.backgroundButton};

  &:hover {
    color: ${globalTheme.colors.white};
    background-color: ${globalTheme.colors.secondary};
    box-shadow: ${globalTheme.shadow.modalHoverShadow};
  }
`;
