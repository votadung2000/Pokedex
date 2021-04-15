export const limitedString = (str = "", limited = 15) => {
  return str.substr(0, limited) + '...';
}