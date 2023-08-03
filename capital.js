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

//function

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalizeString("jAYAKANTH"));


