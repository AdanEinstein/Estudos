<template>
    <div>
        <h1>Calculatora</h1>
        <CalculatorContent />
    </div>
</template>

<script>
    import CalculatorContent from './main/CalculatorContent.vue'
    export default {
        components: { CalculatorContent }
    };
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/Roboto-Thin.ttf");
}
* {
    font-family: "RobotoMono";
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206));
}
</style>