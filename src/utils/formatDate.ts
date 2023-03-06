export function formatDate(Dates: Date | undefined) {
  if (!Dates) return;

  const date = new Date(Dates);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
