<template>
    <div class="calculator">
        <DisplayContent :value="displayValue"/>
        <ButtonContent label="AC" triple @onCalcButtonClick="clearMemory"/>
        <ButtonContent label="/" operation @onCalcButtonClick="setOperation"/>
        <ButtonContent label="7" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="8" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="9" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="*" operation @onCalcButtonClick="setOperation"/>
        <ButtonContent label="4" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="5" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="6" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="-" operation @onCalcButtonClick="setOperation"/>
        <ButtonContent label="1" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="2" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="3" @onCalcButtonClick="addDigito"/>
        <ButtonContent label="+" operation @onCalcButtonClick="setOperation"/>
        <ButtonContent label="0" double @onCalcButtonClick="addDigito"/>
        <ButtonContent label="." @onCalcButtonClick="addDigito"/>
        <ButtonContent label="=" operation @onCalcButtonClick="setOperation"/>
    </div>
</template>

<script>
    import ButtonContent from '../components/ButtonContent.vue'
    import DisplayContent from '../components/DisplayContent.vue'
    export default {
        data() {
            return {
                displayValue: 0,
                clearDisplay: false,
                operation: null,
                values: [0, 0],
                current: 0
            }
        },
        components: { ButtonContent, DisplayContent },
        methods: {
            clearMemory(){
                Object.assign(this.$data, this.$options.data())
            },
            setOperation(operation){
                if (this.current === 0) {
                    this.operation = operation
                    this.current = 1
                    this.clearDisplay = true
                } else {
                    const equals = operation === '='
                    const currentOperation = this.operation
                    try {
                        this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
                        if (isNaN(this.values[0] || !isFinite(this.values[0]))) {
                            this.clearMemory()
                            return
                        }

                    } catch (error) {
                        this.$emit('onError', error)
                    }
                    this.values[1] = 0

                    this.displayValue = this.values[0]
                    this.operation = equals ? null : operation
                    this.current = equals ? 0 : 1
                    this.clearDisplay = !equals
                }
            },
            addDigito(n){
                if (n == '.' && this.displayValue.includes('.')) return
                const clearDisplay = this.displayValue == '0' || this.clearDisplay
                const currentValue = clearDisplay ? "" : this.displayValue
                const displayValue = currentValue + n
                this.displayValue = displayValue
                this.clearDisplay = false

                if (n !== '.') {
                    const i = this.current
                    const newValue = parseFloat(displayValue)
                    this.values[i] = newValue 
                }
            }
        },
    };
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>