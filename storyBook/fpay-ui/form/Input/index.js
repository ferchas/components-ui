import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const InputContainer = styled.div(
  ({ theme }) => css`
    ${theme.textTypes["Body-2-w400"]}
    position: relative;
    display: flex;
    flex-direction: column;
  `
);

const thick_input = ({ theme }) => css`
  padding: 16px 13px;
  border: solid 2px;
  ${theme.breakpoint("md")} {
    padding: 12px 14px;
  }
`;

const error_input = ({ theme, error }) =>
  error &&
  css`
  ${thick_input}
  border-color: ${theme.colors.rbrand500};
  :focus, :hover:not(:focus):not(:disabled) {
    border-color: ${theme.colors.rbrand500};
  }
`;

const StyledInput = styled.input(
  ({ theme }) => css`
    padding: 17px 14px;
    border: solid 1px ${theme.colors.gray500};
    border-radius: 4px;
    ${theme.textTypes["Body-2-w400"]}
    :hover:not(:focus):not(:disabled) {
      border-color: ${theme.colors.gray600};
    }
    :focus {
      outline-width: 0;
      outline: none;
      ${thick_input}
      border-color: ${theme.colors.gbrand500};
    }
    :disabled {
      color: ${theme.colors.gray500};
      background-color: inherit;
    }
    ${theme.breakpoint("md")} {
      padding: 13px 15px;
    }
    ${error_input}
  `
);

const label_shrink = ({ theme, shrink }) =>
  css`
    ${!shrink
      ? css`
          transform: translate(11px, 18px) scale(1);
          ${theme.breakpoint("md")} {
            transform: translate(12px, 14px) scale(1);
          }
        `
      : css`
          transform: translate(9px, -12px) scale(0.9);
          background-color: white;
          ${theme.breakpoint("md")} {
            transform: translate(10px, -12px) scale(0.9);
          }
        `}
    padding: 0 4px;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  `;

const label_focused = ({ focused, theme }) =>
  focused &&
  css`
    color: ${theme.colors.gbrand500};
  `;

const label_disabled = ({ theme, disabled }) =>
  disabled &&
  css`
    color: ${theme.colors.gray500};
  `;

const label_error = ({ theme, error }) =>
  error &&
  css`
    color: ${theme.colors.rbrand500};
  `;

const Label = styled.label(
  ({ theme }) => css`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    ${theme.textTypes["Body-2-w400"]}
    color: ${theme.colors.gray700};
    ${label_shrink}
    ${label_disabled}
    ${label_focused}
    ${label_error}
  `
);

const caption_error = ({ theme, error }) =>
  error &&
  css`
    color: ${theme.colors.rbrand500};
  `;

const Caption = styled.span(
  ({ theme }) => css`
  margin-top: 10px;
  ${theme.textTypes["Caption-w400"]}
  color: ${theme.colors.gray600};
  ${caption_error}
`
);

const Input = ({
  id,
  className,
  onChange,
  value,
  label,
  disabled,
  error,
  caption,
  testId,
}) => {
  const [focus, setFocus] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (focus || value.length > 0) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [value, focus]);

  const _onFocus = () => {
    setFocus(true);
  };
  const _onBlur = () => {
    setFocus(false);
  };

  return (
    <InputContainer data-testid={testId} className={className}>
      <Label
        focused={focus}
        shrink={shrink}
        disabled={disabled}
        for={id}
        error={error}
      >
        {label}
      </Label>
      <StyledInput
        id={id}
        onFocus={_onFocus}
        onBlur={_onBlur}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
      />
      <Caption error={error}>{caption}</Caption>
    </InputContainer>
  );
};

export default Input;

Input.propTypes = {
  /**
   * id del input
   */
  id: PropTypes.string,
  /**
   * className del container del input
   */
  className: PropTypes.string,
  /**
   * onChange del input
   */
  onChange: PropTypes.func,
  /**
   * Valor del input
   */
  value: PropTypes.string,
  /**
   * Etiqueta del input
   */
  label: PropTypes.string,
  /**
   * Si el input está deshabilitado
   */
  disabled: PropTypes.bool,
  /**
   * Si se muestra el input con error
   */
  error: PropTypes.bool,
  /**
   * Subtexto del input
   */
  caption: PropTypes.string,
  /**
   * testId del container del input
   */
  testId: PropTypes.string,
};

Input.defaultProps = {
  onChange: undefined,
  value: "",
  label: "",
  disabled: false,
  error: false,
  caption: "",
};
