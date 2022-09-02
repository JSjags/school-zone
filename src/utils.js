export const getTheme = (val) => {
  if (val === undefined) return "Light";
  if (Object.keys(val).length === 0) return "Light";

  return val.trim();
};
