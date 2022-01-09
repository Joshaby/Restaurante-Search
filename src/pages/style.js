import styledComponents from 'styled-components';

export const Container = styledComponents.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFF;
  padding: 24px;
`;

export const Icon = styledComponents.img`
  padding-bottom: 20px;
`;

export const Wrapper = styledComponents.div`
  display: flex;
  flex-direction: row;
`;

export const Map = styledComponents.div`
  background-color: red;
  width: 500px;
`;
