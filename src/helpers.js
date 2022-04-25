// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
//Persist state in session
export const persistState = stateName => {
  const sessionSave = window.sessionStorage.getItem(stateName);
  return sessionSave && JSON.parse(sessionSave);
} 

export const convertDate = date => {
  const newdate = new Date (date);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[newdate.getMonth()];
  const format = newdate.getDate() + "th " + month + " " + newdate.getFullYear();
  return format
}
