<template>
    <div>{{props.id}} {{props.text}} {{props.header}}</div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['item']);
</script>

<style>

</style>