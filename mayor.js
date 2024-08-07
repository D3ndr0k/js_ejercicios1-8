const esMayor = function (a, b) {
  if (a > b) {
    return a + " es mayor";
  } else if (b > a) {
    return b + " es mayor";
  } else if ((a = b)) {
    return "son iguales";
  }
};

console.log(
  "Escribe console.log(esMayor(a,b)) cambiando a y b por números para ver cual es mayor"
);
