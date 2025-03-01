AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horasEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horasEmMs) / minutosEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutosEmMs) / 1000
  );

  if (diasAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Evento expirado! 😥";
  } else {
    document.getElementById(
      "contador"
    ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
  }
}, 1000);
