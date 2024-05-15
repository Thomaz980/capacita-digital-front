// ------------------ FUNÇÃO FALA -------------------- //

export function converterTextoParaVoz(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}




