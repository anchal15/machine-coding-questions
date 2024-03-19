export const createURL = (str) => {
  return str
    ?.replace(/^\s+|\s+$/g, "") // trim leading/trailing spaces
    ?.replace(/\s+/g, "-") // collapse whitespace and replace by "-"
    ?.toLowerCase();
};
