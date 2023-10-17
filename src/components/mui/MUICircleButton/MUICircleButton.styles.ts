import styled from '@emotion/styled';

export const CircleButton = styled.button`
  position: relative;
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 52px;
  border: 1px solid #cdd1d3;
  cursor: pointer;
  ${(props) =>
    props.disabled
      ? {
          backgroundColor: '#f5f7f7',
        }
      : {
          '&:hover': {
            backgroundColor: '#f5f7f7',
          },
          '&:active': {
            backgroundColor: '#fcfcfc',
            boxShadow: '0px 0px 0px 4px rgba(19, 98, 226, 0.25)',
          },
        }}
`;
