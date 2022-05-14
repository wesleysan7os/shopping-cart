import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;