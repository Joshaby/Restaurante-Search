import styledComponents from 'styled-components';

export const Container = styledComponents.div`
  background-color: ${(props) => props.theme.colors.primary};
`;
