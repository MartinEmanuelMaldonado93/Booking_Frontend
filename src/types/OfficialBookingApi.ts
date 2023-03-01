export interface HotelFinded {
  bwallet: Bwallet;
  address_trans: string;
  main_photo_id: number;
  ufi: number;
  cc_required: number;
  district_id: number;
  is_city_center: number;
  accommodation_type_name: string;
  is_smart_deal: number;
  price_breakdown: PriceBreakdown;
  currencycode: string;
  cc1: string;
  badges: Badge[];
  native_ad_id: string;
  timezone: string;
  type: string;
  id: string;
  city_trans: string;
  distance_to_cc_formatted: string;
  zip: string;
  districts: string;
  city_in_trans: string;
  review_recommendation: string;
  distance_to_cc: string;
  main_photo_url: string;
  hotel_has_vb_boost: number;
  countrycode: string;
  checkout: Checkout;
  is_mobile_deal: number;
  class_is_estimated: number;
  cant_book: number;
  is_wholesaler_candidate: number;
  mobile_discount_percentage: number;
  updated_checkin: any;
  country_trans: string;
  preferred: number;
  is_free_cancellable: number;
  class: number;
  district: string;
  longitude: number;
  updated_checkout: any;
  hotel_include_breakfast: number;
  block_ids: string[];
  hotel_name_trans: string;
  wishlist_count: number;
  url: string;
  hotel_facilities: string;
  is_geo_rate: string;
  currency_code: string;
  matching_units_configuration: MatchingUnitsConfiguration;
  native_ads_cpc: number;
  hotel_id: number;
  is_beach_front: number;
  city: string;
  review_score_word: string;
  default_language: string;
  soldout: number;
  is_genius_deal: number;
  accommodation_type: number;
  city_name_en: string;
  is_no_prepayment_block: number;
  children_not_allowed: number;
  composite_price_breakdown: CompositePriceBreakdown;
  distances: Distance[];
  selected_review_topic: any;
  unit_configuration_label: string;
  hotel_name: string;
  preferred_plus: number;
  address: string;
  review_nr: number;
  latitude: number;
  checkin: Checkin;
  review_score: number;
  in_best_district: number;
  distance: string;
  min_total_price: number;
  native_ads_tracking: string;
  genius_discount_percentage: number;
  extended: number;
  default_wishlist_name: string;
  price_is_final: number;
  max_photo_url: string;
  max_1440_photo_url: string;
}

interface Bwallet {
  hotel_eligibility: number;
}

interface PriceBreakdown {
  has_incalculable_charges: number;
  has_fine_print_charges: number;
  all_inclusive_price: number;
  sum_excluded_raw: string;
  has_tax_exceptions: number;
  currency: string;
  gross_price: number;
}

interface Badge {
  text: string;
  badge_variant: string;
  id: string;
}

interface Checkout {
  until: string;
  from: string;
}

interface MatchingUnitsConfiguration {
  matching_units_common_config: MatchingUnitsCommonConfig;
}

interface MatchingUnitsCommonConfig {
  unit_type_id: number;
  localized_area: any;
}

interface CompositePriceBreakdown {
  benefits: Benefit[];
  discounted_amount: DiscountedAmount;
  included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount;
  all_inclusive_amount: AllInclusiveAmount;
  product_price_breakdowns: ProductPriceBreakdown[];
  items: Item2[];
  gross_amount: GrossAmount2;
  strikethrough_amount_per_night: StrikethroughAmountPerNight2;
  net_amount: NetAmount2;
  excluded_amount: ExcludedAmount2;
  gross_amount_hotel_currency: GrossAmountHotelCurrency2;
  gross_amount_per_night: GrossAmountPerNight2;
  strikethrough_amount: StrikethroughAmount2;
}

interface Benefit {
  kind: string;
  badge_variant: string;
  name: string;
  identifier: string;
  details: string;
  icon: any;
}

interface DiscountedAmount {
  value: number;
  currency: string;
}

interface IncludedTaxesAndChargesAmount {
  value: number;
  currency: string;
}

interface AllInclusiveAmount {
  value: number;
  currency: string;
}

interface ProductPriceBreakdown {
  all_inclusive_amount: AllInclusiveAmount2;
  included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount2;
  discounted_amount: DiscountedAmount2;
  benefits: Benefit2[];
  items: Item[];
  gross_amount: GrossAmount;
  excluded_amount: ExcludedAmount;
  net_amount: NetAmount;
  strikethrough_amount_per_night: StrikethroughAmountPerNight;
  strikethrough_amount: StrikethroughAmount;
  gross_amount_per_night: GrossAmountPerNight;
  gross_amount_hotel_currency: GrossAmountHotelCurrency;
}

interface AllInclusiveAmount2 {
  value: number;
  currency: string;
}

interface IncludedTaxesAndChargesAmount2 {
  currency: string;
  value: number;
}

interface DiscountedAmount2 {
  value: number;
  currency: string;
}

interface Benefit2 {
  identifier: string;
  details: string;
  icon: any;
  badge_variant: string;
  name: string;
  kind: string;
}

interface Item {
  name: string;
  base: Base;
  item_amount: ItemAmount;
  details: string;
  kind: string;
  inclusion_type?: string;
  identifier?: string;
}

interface Base {
  kind: string;
  percentage?: number;
}

interface ItemAmount {
  value: number;
  currency: string;
}

interface GrossAmount {
  currency: string;
  value: number;
}

interface ExcludedAmount {
  value: number;
  currency: string;
}

interface NetAmount {
  value: number;
  currency: string;
}

interface StrikethroughAmountPerNight {
  value: number;
  currency: string;
}

interface StrikethroughAmount {
  currency: string;
  value: number;
}

interface GrossAmountPerNight {
  currency: string;
  value: number;
}

interface GrossAmountHotelCurrency {
  value: number;
  currency: string;
}

interface Item2 {
  name: string;
  base: Base2;
  details: string;
  item_amount: ItemAmount2;
  kind: string;
  inclusion_type?: string;
  identifier?: string;
}

interface Base2 {
  percentage?: number;
  kind: string;
}

interface ItemAmount2 {
  value: number;
  currency: string;
}

interface GrossAmount2 {
  currency: string;
  value: number;
}

interface StrikethroughAmountPerNight2 {
  currency: string;
  value: number;
}

interface NetAmount2 {
  currency: string;
  value: number;
}

interface ExcludedAmount2 {
  currency: string;
  value: number;
}

interface GrossAmountHotelCurrency2 {
  value: number;
  currency: string;
}

interface GrossAmountPerNight2 {
  value: number;
  currency: string;
}

interface StrikethroughAmount2 {
  value: number;
  currency: string;
}

interface Distance {
  icon_set: any;
  icon_name: string;
  text: string;
}

interface Checkin {
  until: string;
  from: string;
}
