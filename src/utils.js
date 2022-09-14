export const getTheme = (val) => {
  if (val === undefined) return "Light";

  if (Object.keys(val).length === 0) return "Light";

  if (val.trim().toLowerCase() === "auto") {
    const userPref = window.matchMedia("(prefers-color-scheme: light)");
    if (userPref.matches) return "Light";
    else {
      return "Dark";
    }
  }

  return val.trim();
};
