<script setup>
import { ref } from 'vue'
import thumb from '@/assets/thumb.png'
import mqm from '@/assets/mqm.png'
import black from '@/assets/black.png'
import pic from '@/assets/pic.png'
const images = [
  { src: black, alt: 'black' },
  { src: mqm, alt: 'mqm' },
  { src: thumb, alt: 'thumb' },
  { src: pic, alt: 'pic' }
]
let currentIndex = ref(0)

// 切换到上一张
function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

// 切换到下一张
function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

</script>

<template>
  <div class="carousel">
    <!-- 左箭头 -->
    <a class="arrow left" @click="prev">&lt;</a>

    <!-- 当前图片 -->
    <img
      :src="images[currentIndex].src"
      :alt="images[currentIndex].alt"
      class="thumb"
    />

    <!-- 右箭头 -->
    <a class="arrow right" @click="next">&gt;</a>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  z-index: 1; /* 图片层级较低 */
}

.thumb:hover {
  transform: scale(1.03);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.3em 0.5em;
  border-radius: 50%;
  text-decoration: none;
  user-select: none;
  transition: background 0.2s ease;
  z-index: 2; 
  cursor: pointer;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.6);
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
</style>
