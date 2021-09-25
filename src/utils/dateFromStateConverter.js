const dateFromStateConverter = (date) => {
  const result = new Date(date).toLocaleString().slice(0, 10);
  return result;
};

export default dateFromStateConverter;
