const booking = {
  MAIN: 'hotels',
};

export const SWRCacheKey = {
  Hotels: () => `${booking.MAIN}`,
  Locations: () => `Locations`,
};
