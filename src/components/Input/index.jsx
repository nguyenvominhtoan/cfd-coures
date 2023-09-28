import React from "react";

export const Input = ({
  label,
  required,
  value,
  onChange,
  type = "text",
  error,
  renderInput = undefined,
  ...inputProps
}) => {
  return (
    <div>
      {" "}
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.(inputProps) || (
        <input
          value={value}
          onChange={onChange}
          type={type}
          {...inputProps}
          className={`form__input ${!!error ? "formerror" : ""}`}
        />
      )}
      <p className="error">{error || ""}</p>
    </div>
  );
};
export default Input;
