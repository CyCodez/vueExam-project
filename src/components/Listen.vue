<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
    x.value = event.pageX
    y.value = event.pageY
}

onMounted(() => window.addEventListener('click', update))
onUnmounted(() => window.removeEventListener('click', update))
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
