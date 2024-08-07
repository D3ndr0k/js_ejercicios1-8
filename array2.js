const array2 = function (a = []) {
  for (let i = 0; i < 10; i++) {
    if (i != 4) {
      console.log(a[i]);
    } else {
      console.log();
    }
  }
};

console.log(
  "Escribe array2([a,b,c,d,e,f,g,h,i,j]) , cambia todas las letras por números,verás todos menos en 5°"
);
