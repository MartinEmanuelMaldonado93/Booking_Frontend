import { SingleHotel } from "./BookingDojo";

/** Booking api */

// locations
export interface BookingLocation {
  latitude: number;
  type: string;
  cc1: string;
  timezone: string;
  region: string;
  dest_id: string;
  city_ufi: any;
  label: string;
  lc: string;
  dest_type: string;
  hotels: number;
  longitude: number;
  image_url: string;
  country: string;
  name: string;
  city_name: string;
  nr_hotels: number;
  rtl: number;
  b_max_los_data: BMaxLosData2;
}

export interface BMaxLosData2 {
  extended_los: number;
  has_extended_los: number;
  max_allowed_los: number;
  experiment: string;
  is_fullon: number;
  default_los: number;
}

// params of hotels req
export interface HotelParams {
  /**The number of items to ignore as offset for paging (fixed 30 items returned per page). You are interested in the optional parameter 'search_id' */
  offset: string;
  /**format is yyyy-MM-dd. Ex : 2022-08-14 */
  arrival_date: string;
  /**format is yyyy-MM-dd. Ex : 2022-08-14 */
  departure_date: string;
  /**The number of adults */
  guest_qty: string;
  /**
Value of dest_id or city_ufi field from locations/auto-complete API (Don't pass this if you use latlong as search_type) */
  dest_ids: string;
  room_qty: string;
  /**Value of dest_type returned by locations/auto-complete API */
  search_type: string;
  children_qty?: string;
  children_age?: string;
  search_id?: string;
  price_filter_currencycode?: string;
  order_by?:
    | "popularity"
    | "distance"
    | "class_descending"
    | "class_ascending"
    | "deals"
    | "review_score"
    | "price";
  languagecode?: string;
  travel_purpose?: "leisure" | "business";
}

// Response hotels req
export interface HotelsResponse {
  b_max_los_data: BMaxLosData2;
  search_radius: number;
  search_metadata: string;
  search_id: string;
  result: SingleHotel[];
  unfiltered_count: number;
  map_bounding_box: MapBoundingBox;
  total_count_with_filters: number;
  sorting: Sorting;
  copyright: any[];
  unfiltered_primary_count: number;
  ranking_version: number;
  recommended_filters: any[];
  count: number;
  primary_count: number;
  is_beach_ufi: number;
  sort: Sort[];
  extended_count: number;
  zero_results_message: ZeroResultsMessage;
  has_low_availability: string;
  applied_filters: any[];
  room_distribution: RoomDistribution[];
  page_loading_threshold: number;
}

export interface BMaxLosData2 {
  experiment: string;
  has_extended_los: number;
  default_los: number;
  is_fullon: number;
  max_allowed_los: number;
  extended_los: number;
}

export interface MapBoundingBox {
  sw_long: number;
  ne_long: number;
  ne_lat: number;
  sw_lat: number;
}

export interface Sorting {
  selected_identifier: string;
  options: Option[];
}

export interface Option {
  name: string;
  loading_message: string;
  identifier: string;
}

export interface Sort {
  id: string;
  name: string;
}

export interface ZeroResultsMessage {
  messages: string[];
  cta: Cta;
  title: string;
}

export interface Cta {
  text: string;
  action: string;
  action_context: any;
}

export interface RoomDistribution {
  adults: string;
  children: number[];
}
