let weeks = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

capitalWeeks = weeks.filter((e, i, a) => {
  console.log(e.charAt(0).toUpperCase() + e.substring(1));
});
