export const getParkName = (parkList, parkSlug) => {
  const park = parkList.find(p => p.slug === parkSlug)
  return park.name
}
