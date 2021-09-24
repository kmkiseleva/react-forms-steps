const dateFromStateConverter = (date) => {
  const result = new Date(date)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return result;
};

export default dateFromStateConverter;
