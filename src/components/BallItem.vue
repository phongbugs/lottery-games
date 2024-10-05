<template>
    <div :class="['ball', ballColor]">
        <span class="number">{{ ballNumber }}</span>
        <div class="chip">{{ chipNumber }}</div>
    </div>
   
</template>

<script>
//import WavingFlag from './BallItem.vue';
export default {
    name: 'BallItem',
    //components:{WavingFlag},
    props: {
        ballNumber: {
            type: Number,
            required: true
        },
        chipNumber: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true,
            validator: value => ['red', 'yellow'].includes(value)
        }
    },
    computed: {
        ballColor() {
            return this.color;
        }
    }
}
</script>

<style scoped>
.ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    font-weight: bold;
    position: relative;
}
@keyframes flagWave {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}

.chip {
    position: absolute;
    top: -5px;
    right: 0;
    background: red;
    color: #fff;
    padding: 3px 6px;
    border-radius: 25%;
    font-size: 9px;
    animation: flagWave 1s infinite;
}

.red {
    background: radial-gradient(circle, #ff6b6b, #c0392b);
}

.yellow {
    background: radial-gradient(circle, #fdde9b, #cd8f20);
}
</style>
