export function formatDateToString(input) {
  const ymd = input.split("-");
  let formattedDate = `${parseInt(ymd[1])}/${parseInt(ymd[2])}/${parseInt(ymd[0]%2000)}`
  return formattedDate;
}