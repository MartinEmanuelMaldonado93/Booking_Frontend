import type { Range } from "react-date-range/index";

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
/** Return difference or 0 if any of the parameters don't have */
export default function getDifferenceOfDays(date1: Date, date2: Date) {
  const dateTwo = date2.getTime();
  const dateOne = date1.getTime();

  const timeDiff = Math.abs(dateTwo - dateOne);
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
}
