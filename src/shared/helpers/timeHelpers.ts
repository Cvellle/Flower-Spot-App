const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDate = (date: string) => {
  return (
    months[new Date(date).getUTCMonth()] +
    " " +
    new Date(date).getUTCDate() +
    ", " +
    new Date(date).getUTCFullYear()
  );
};
