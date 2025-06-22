function cambiarImagen(imagenClickeada) {
  const visor = document.getElementById("imagen-principal");
  visor.src = imagenClickeada.src.replace('100x120', '400x500');
}
