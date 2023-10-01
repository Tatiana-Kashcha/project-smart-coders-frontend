import styled from 'styled-components';

export const TaskBtn = styled.button`
  color: ${props => props.theme.colors.primary_text_mode};
  /* background-color: period_type_btn_not_active; */
  background-color: ${props => props.theme.colors.period_type_btn_not_active};
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 2px;
  padding: 10px 103.5px;
  font-weight: bold;
  font-size: 14px;
`;
export const PlusIcon = styled.svg`
  fill: ${props => props.theme.colors.black};
  width: 24px;
  height: 24px;
`;
// ще не все тут
