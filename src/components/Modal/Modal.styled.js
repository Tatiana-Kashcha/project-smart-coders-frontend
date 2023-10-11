import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';
import { globalTheme } from 'theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1200;

  background-color: ${globalTheme.colors.backdrop};
`;

export const ModalField = styled.div`
  position: relative;
  width: 335px;
  min-height: 155px;
  padding: 20px;

  border-radius: 8px;

  background-color: ${props => props.theme.colors.modalWindow};

  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 35px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.primaryText};
`;
