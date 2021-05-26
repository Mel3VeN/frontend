export function greeting() {
  const date = new Date();
  const time = date.getHours();
  let message = null;
  if (time > 4 && time < 12) {
    message = 'Guten Morgen,';
  } else if (time > 11 && time < 18) {
    message = 'Guten Tag,';
  } else {
    message = 'Guten Abend, ';
  }
  return message;
}
