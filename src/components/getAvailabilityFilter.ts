export function getAvailabilityFilter(
  arr: any[],
  amount: string,
  secondAmout?: string
) {
  if (secondAmout) {
    const resultFilter = arr.map(
      (property: any) => property[amount][secondAmout]
    );
    return Array.from(new Set(resultFilter)).sort();
  }
  const resultFilter = arr.map((property: any) => property[amount] + '');
  return Array.from(new Set(resultFilter)).sort();
}
