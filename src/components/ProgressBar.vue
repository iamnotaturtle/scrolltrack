<template>
  <div ref="progress" class="progress-bar"/>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import * as ProgressBarJS from 'progressbar.js';

@Component
export default class ProgressBar extends Vue {
  @Prop({default: 'green'})
  color!: string;

  circle: any;

  created(): void {
    window.addEventListener('scroll', this.setProgress);
  }

  mounted(): void {
    this.circle = new ProgressBarJS.Circle(this.$refs.progress, {
      color: this.color,
      duration: 3000,
      easing: 'easeInOut',
    });
  }

  destroyed(): void {
    window.removeEventListener('scroll', this.setProgress);
  }

  progress(): any {
    let progress = 0;
    const h = document.documentElement;
    const body = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';

    if (h && body) {
      progress = (h[st] || body[st]) / ((h[sh] || body[sh]) - h.clientHeight);
    }

    return progress;
  }

  setProgress(): void {
    this.circle.set(this.progress());
    this.$emit('progress', this.progress());
  }
}

</script>

<style scoped>
  .progress-bar {
    position: absolute;
  }
</style>