import dayjs from "dayjs";

export const formatDate = (date: dayjs.ConfigType) => {
  return dayjs(date).format("MMM DD, YYYY");
};
