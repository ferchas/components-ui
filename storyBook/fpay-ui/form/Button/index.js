import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const buttonSizes = {
  small: css`
    ${({ theme }) => theme.textTypes["Body-2-w400"]}
    padding: 3px 14px 4px;
    line-height: 21px;
  `,
  medium: css`
    ${({ theme }) => theme.textTypes["Body-2-w400"]}
    padding: 7px 14px 8px;
    line-height: 21px;
  `,
  large: css`
    ${({ theme }) => theme.textTypes["Subtitle-1-w400"]}
    padding: 15px 14px 16px;
    line-height: 21px;
  `,
};

const button_color = ({ theme, color, outlined }) => {
  const buttonColor = theme.colors[color]
    ? theme.colors[color]
    : theme.colors.gbrand500;
  const background = outlined ? "white" : buttonColor;
  const text = outlined ? buttonColor : "white";
  return css`
    background-color: ${background};
    color: ${text};
    border: 2px solid ${buttonColor};
    :disabled {
      background-color: ${outlined ? "white" : theme.colors.gray400};
      color: ${outlined ? theme.colors.gray500 : theme.colors.gray600};
      border: 2px solid ${theme.colors.gray400};
    }
  `;
};

const button_size = ({ theme, size }) => {
  if (buttonSizes[size]) return buttonSizes[size];
  return css`
    ${buttonSizes.large}
    ${theme.breakpoint("md")} {
      ${buttonSizes.medium}
    }
  `;
};

const Button = styled.button`
  border: 2px solid gray;
  border-radius: 4px;
  cursor: pointer;
  ${button_size}
  text-align: center;
  ${button_color}
`;

export default Button;

Button.propTypes = {
  /**
   * Color del branding para usar de background
   */
  color: PropTypes.string,
  /**
   * Si el botón es sólido o delineado
   */
  outlined: PropTypes.bool,
  /**
   * Forzado de tamaño del botón
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Texto del botón
   */
  children: PropTypes.string.isRequired,
  /**
   * Función a ejecutar al clickear al botón
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "gbrand500",
  outlined: false,
  size: undefined,
  children: "",
  onClick: undefined,
};
