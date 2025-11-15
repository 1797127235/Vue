<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0f9be4b071da45d9a0c2.jpg',
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0fa3e4b071da45d9a0c3.jpg',
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa10ace4b071da45d9a0c4.jpg'
]

const activeIndex = ref(0)
const autoPlayTimer = ref(null)
const isAutoPlay = ref(true)
const autoPlayInterval = ref(2000) // 2秒切换一次

// 上一张
const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
  resetAutoPlay()
}

// 下一张
const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % images.length
  resetAutoPlay()
}

// 点击指示器
const goToSlide = (index) => {
  activeIndex.value = index
  resetAutoPlay()
}

// 自动播放
const startAutoPlay = () => {
  if (autoPlayTimer.value) {
    clearInterval(autoPlayTimer.value)
  }
  if (isAutoPlay.value) {
    autoPlayTimer.value = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % images.length
    }, autoPlayInterval.value)
  }
}

// 重置自动播放（用户交互后）
const resetAutoPlay = () => {
  clearInterval(autoPlayTimer.value)
  startAutoPlay()
}

// 停止播放
const stopAutoPlay = () => {
  clearInterval(autoPlayTimer.value)
}

// 组件挂载时启动自动播放
onMounted(() => {
  startAutoPlay()
})

// 组件卸载时停止自动播放
onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="banner-wrapper">
    <div 
      class="banner"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay">
      <ul class="banner-list">
        <li 
          v-for="(image, index) in images" 
          :key="index"
          class="banner-item"
          :class="{ active: index === activeIndex }">
          <img :src="image" :alt="`轮播图 ${index + 1}`" />
        </li>
      </ul>

      <div class="indicator">
        <span 
          v-for="(image, index) in images" 
          :key="index"
          class="dot"
          :class="{ active: index === activeIndex }"
          @click="goToSlide(index)">
        </span>
      </div>

      <div class="ctrl">
        <button class="btn prev" @click="prevSlide" title="上一张">
          <span>❮</span>
        </button>
        <button class="btn next" @click="nextSlide" title="下一张">
          <span>❯</span>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

.banner-wrapper {
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.banner {
  position: relative;
  width: 1200px;
  height: 337px;
  margin: 150px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.banner-list {
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.banner-list li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.2s;
}

.banner-list li.active {
  opacity: 1;
}

.banner-list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 指示器 */
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  z-index: 10;
}

.indicator span {
  width: 30px;
  height: 2px;
  margin: 0 5px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.4s ease;
  border-radius: 1px;
}

.indicator span:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.indicator span.active {
  background: #fff;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

/* 控制按钮 */
.ctrl {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-50%);
  z-index: 8;
  box-sizing: border-box;
}

.btn {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.btn:active {
  transform: scale(0.95);
}

.btn span {
  display: block;
  line-height: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    width: 100%;
    height: 250px;
    margin: 50px auto;
  }

  .btn {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .ctrl {
    padding: 0 10px;
  }

  .indicator span {
    width: 20px;
    height: 2px;
  }
}

/* 自动播放信息 */
.auto-play-info {
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.playing {
  display: flex;
  align-items: center;
  gap: 5px;
}

.playing::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #28a745;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
