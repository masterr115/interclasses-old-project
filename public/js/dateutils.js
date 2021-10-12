var months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
var dayofWeek = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
  ,
];

function getDayOfWeek(d) {
  return dayofWeek[d - 1];
}

function getMonth(d) {
  return months[d - 1];
}

module.exports = { getDayOfWeek, getMonth };
