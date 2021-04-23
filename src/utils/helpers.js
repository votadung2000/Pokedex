export const limitedString = (str = "", limited = 15) => {
  return str.substr(0, limited) + '...';
}

export const linkImage = (i) => {
  const link = i.substring(4, i.length)
  return 'https' + link
}