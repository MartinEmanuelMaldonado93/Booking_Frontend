import { SearchedDestination } from "@context";
import type { Range } from "react-date-range/index";

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
/** Return difference or 0 if any of the parameters don't have */
export default function getDifferenceOfDays(state: SearchedDestination) {
  if (state.dates.length === 0) return undefined;

  let start = state.dates[0].startDate!;
  let end = state.dates[0].endDate!;

  const EndDay = end.getTime();
  const StartDay = start.getTime();

  const timeDiff = Math.abs(EndDay - StartDay);
  const totalDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return totalDays;
}
