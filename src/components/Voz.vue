<script setup>
import { onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  texto: {
    type: String,
    required: true
  }});

function converterTextoParaVoz(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

onMounted(() => {
  converterTextoParaVoz(props.texto);
});
</script>

