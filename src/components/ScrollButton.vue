<template>
  <div class="scroll-button">
    <template v-if="showPercent">
      {{ percent | formatPercent }}
    </template>
    <div v-else>
      <slot v-if="percent >= .99" name="completed"/>
      <slot
        v-else
        class="scroll-content" 
        name="content"/>
    </div>
    <div class="progress-bar"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ProgressBar from 'progressbar.js';

@Component({
  filters: {
    formatPercent(value: number): string {
      return `${Math.round(value * 100)}%`;
    },
  },
})
export default class ScrollButton extends Vue {
  @Prop({default: 'green'})
  progressColor!: string;

  @Prop()
  showPercent!: boolean;

  circle: any;
  percent: number = 0;

  created(): void {
    window.addEventListener('scroll', this.setProgress);
  }

  mounted(): void {
    this.circle = new ProgressBar.Circle('.progress-bar', {
      color: this.progressColor,
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
    this.percent = this.progress();
    console.log('percent', this.percent)
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

  .progress-bar {
    position: absolute;
  }
</style>
