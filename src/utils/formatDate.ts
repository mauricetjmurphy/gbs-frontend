import dayjs from "dayjs";

export const formatDate = (date: dayjs.ConfigType): string => {
  return dayjs(date).format("MMM DD, YYYY");
};
