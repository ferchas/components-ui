import styled from "styled-components";
import imgLogo from './fpay-logo-white.svg';

const Logo = () => (
  styled.img` 
  width: 100%
  `
);

export default Logo.bind({src:{imgLogo}, alt:'fpay'});
