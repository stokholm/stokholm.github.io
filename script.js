onload = function () {
  cityWeather();
}

function cityWeather() {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search.slice(1));
  let city = params.get('city');

  a = "http://servlet.dmi.dk/byvejr/servlet/byvejr_dag1?by=" + city + "&mode=long&eps=true";
  b = "http://servlet.dmi.dk/byvejr/servlet/byvejr?by=" + city + "&tabel=dag3_9&eps=true";
  c = "http://servlet.dmi.dk/byvejr/servlet/byvejr?by=" + city + "&tabel=dag10_15&eps=true";

  document.getElementById("a").src = a;
  document.getElementById("b").src = b;
  document.getElementById("c").src = c;
}
