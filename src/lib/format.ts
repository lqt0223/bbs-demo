import dayjs from "dayjs";

export function toDate(ts: Date) {
  return dayjs(ts).format('YYYY-MM-DD HH:mm:ss') 
}
