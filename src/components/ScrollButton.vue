<template>
  <div class="scroll-button">
    <slot
      class="scroll-content" 
      name="content"/>
    <ProgressBar 
      :color="progressColor"
      @progress="progress"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ProgressBar from '@/components/ProgressBar.vue';

@Component({
  components: {
    ProgressBar,
  },
})
export default class ScrollButton extends Vue {
  @Prop()
  progressColor!: string;

  progress(value: number) {
    this.$emit('progress', value);
  }
}
</script>

<style scoped lang="scss">
  .scroll-button {
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
