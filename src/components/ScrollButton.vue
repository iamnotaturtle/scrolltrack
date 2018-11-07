<template>
  <div class="scroll-button" @click="clicked()">
    <div class="percentage"/>
    <slot class="scroll-content" name="content"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ScrollButton extends Vue {

  clicked(): void {
    this.$emit('clicked!');
  }
}
</script>

<style scoped lang="scss">
.scroll-button {
  background: #97c83e;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 35px;
  font-weight: bold;
  color: white;
}

.percentage {
	overflow: hidden;
	position: absolute;
	top: -1em; 
  right: 50%; 
  bottom: 50%; 
  left: -1em;
	transform-origin: 100% 100%;
	transform: rotate(45deg) skewX(30deg);
}

.percentage:before {
	box-sizing: border-box;
	display: block;
	border: solid 1em navy;
	width: 200%; 
  height: 200%;
	border-radius: 50%;
	transform: skewX(-30deg);
	content: '';
}
</style>
