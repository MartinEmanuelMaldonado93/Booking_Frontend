import { SearchedDestination } from '@context';
import { formatDate } from '@utils';

/** params fetch to use with apidojo from state of context*/
export default function createParamsHotelsSWR(state: SearchedDestination) {
  return {
    offset: 10 + '',
    arrival_date: formatDate(state.dates[0].startDate) || '2023-4-03',
    departure_date: formatDate(state.dates[0].endDate) || '2023-4-13',
    guest_qty: String(state.options.adult),
    dest_ids: String(state.destination_id),
    room_qty: String(state.options.room),
    search_type: String(state.type),
  };
}
