// const rule = {
//   emai: [{ required: true, message: "vui long nhap" }],
// };

export const validate = (rules, values) => {
  let errorObj = {};

  for (const errorKey in rules) {
    for (const rule of rules[errorKey]) {
      if (rule.required) {
        if (!!!values[errorKey]?.trim()) {
          errorObj[errorKey] = rule.message || "Vui lòng nhập";
          break;
        }
      }
      if (rule?.regex instanceof RegExp) {
        if (!rule.regex.test(values[errorKey])) {
          errorObj[errorKey] = rule.message || "Vui lòng nhập đúng định dạng";
          break;
        }
      }
    }
  }
  return errorObj;
};
