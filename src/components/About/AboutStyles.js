import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const SelfImage = styled.img`
  width: 300px;
  height: 375px;
  border-radius: 50%;
  border: black solid 3px;
  margin-right: 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 250px;
    height: 325px;
    margin-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 225px;
    height: 275px;
    margin-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.xsm} {
    width: 175px;
    height: 225px;
  }
`;
