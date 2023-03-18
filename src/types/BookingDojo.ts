
/** bookingdojo */

export interface SingleHotel {
  currency_code: string;
  is_geo_rate: string;
  type: string;
  native_ads_tracking: string;
  review_nr: number;
  preferred: number;
  updated_checkout: any;
  city_name_en: string;
  preferred_plus: number;
  price_breakdown: PriceBreakdown;
  is_smart_deal: number;
  default_wishlist_name: string;
  matching_units_configuration: MatchingUnitsConfiguration;
  hotel_id: number;
  class: number;
  zip: string;
  wishlist_count: number;
  hotel_include_breakfast: number;
  timezone: string;
  accommodation_type: number;
  is_mobile_deal: number;
  address: string;
  main_photo_url: string;
  is_genius_deal: number;
  native_ad_id: string;
  bwallet: Bwallet;
  city_in_trans: string;
  native_ads_cpc: number;
  longitude: number;
  hotel_name: string;
  in_best_district: number;
  district: string;
  cc1: string;
  price_is_final: number;
  cc_required: number;
  url: string;
  hotel_name_trans: string;
  latitude: number;
  cant_book: number;
  review_score: number;
  ufi: number;
  is_city_center: number;
  genius_discount_percentage: number;
  checkin: Checkin;
  selected_review_topic: any;
  extended: number;
  accommodation_type_name: string;
  currencycode: string;
  updated_checkin: any;
  has_swimming_pool: number;
  id: string;
  default_language: string;
  distance_to_cc: string;
  block_ids: string[];
  checkout: Checkout;
  country_trans: string;
  districts: string;
  distance: string;
  city_trans: string;
  mobile_discount_percentage: number;
  countrycode: string;
  children_not_allowed: number;
  hotel_facilities: string;
  class_is_estimated: number;
  deals: Deals;
  is_no_prepayment_block: number;
  min_total_price: number;
  district_id: number;
  soldout: number;
  hotel_has_vb_boost: number;
  main_photo_id: number;
  address_trans: string;
  is_free_cancellable: number;
  badges: Badge[];
  has_free_parking: number;
  city: string;
  urgency_room_msg: string;
  review_score_word: string;
  review_recommendation: string;
}

export interface PriceBreakdown {
  all_inclusive_price: number;
  gross_price: string;
  sum_excluded_raw: string;
  currency: string;
  has_fine_print_charges: number;
  has_tax_exceptions: number;
  has_incalculable_charges: number;
}

export interface MatchingUnitsConfiguration {
  matching_units_common_config: MatchingUnitsCommonConfig;
}

export interface MatchingUnitsCommonConfig {
  localized_area: any;
  unit_type_id: number;
}

export interface Bwallet {
  hotel_eligibility: number;
}

export interface Checkin {
  until: string;
  from: string;
}

export interface Checkout {
  from: string;
  until: string;
}

export interface Deals {
  deals_available: DealsAvailable;
  deal_events_killswitch: number;
  deal_attributes: DealAttributes;
}

export interface DealsAvailable {}

export interface DealAttributes {}

export interface Badge {
  text: string;
  id: string;
  badge_variant: string;
}
