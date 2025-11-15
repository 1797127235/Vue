<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: 'powderblue'
  }
})

// 简单的颜色加深函数
const darkenColor = (color) => {
  const colors = {
    'powderblue': '#87CEEB',
    'palevioletred': '#DB7093',
    'purple': '#800080'
  }
  return colors[color] || color
}
</script>

<template>
  <div class="bit-card">
    <div 
      class="img" 
      :style="{ background: `linear-gradient(135deg, ${props.bgColor} 0%, ${darkenColor(props.bgColor)} 100%)` }">
      <div class="overlay">
        <span class="badge">热门</span>
      </div>
    </div>
    <div class="desc">
      <h3>Vue3 实战开发教程</h3>
      <p class="teacher">👨‍🏫 主讲人：张老师</p>
      <div class="meta">
        <span class="students">👥 1234人学习</span>
        <span class="duration">⏱️ 10小时</span>
      </div>
      <p class="exercise">立即练习 →</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bit-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 285px;
  margin-bottom: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    
    .img {
      transform: scale(1.1);
    }

    .exercise {
      color: #667eea;
      transform: translateX(5px);
    }
  }

  .img {
    height: 180px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s ease;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 50%);
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 15px;
    }

    .badge {
      background: rgba(255, 107, 107, 0.9);
      color: #fff;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      backdrop-filter: blur(5px);
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;

    h3 {
      font-size: 16px;
      color: #333;
      font-weight: 600;
      margin: 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .teacher {
      font-size: 14px;
      color: #666;
      margin: 0;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #999;
      padding: 10px 0;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
    }

    p.exercise {
      font-size: 14px;
      text-align: right;
      color: #764ba2;
      margin: 5px 0 0 0;
      font-weight: 600;
      transition: all 0.3s ease;
    }
  }
}
</style>
