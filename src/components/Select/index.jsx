import React from "react";

// const options = [
//   {
//     value: "",
//     label: "--",
//   },
//   {
//     value: "-",
//     label: "res",
//   },
//   {
//     value: "-",
//     label: "react",
//   },
// ];
const Select = ({
  options,
  value,
  label,
  required,
  error,
  onChange,
  ...selectProps
}) => {
  return (
    <>
      {" "}
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      <select
        className={`select form__input ${!!error ? "formerror" : ""}`}
        value={value}
        onChange={onChange}
        {...selectProps}
      >
        {options?.length > 0 &&
          options.map((options) => (
            <option key={options.value} value={options.value}>
              {options.label}
            </option>
          ))}
      </select>
      <p className="error">{error || ""}</p>
    </>
  );
};

export default Select;
