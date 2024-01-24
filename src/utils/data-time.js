export const formatDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
