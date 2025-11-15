<template>
  <div class="find">
    <h1>🔍 发现</h1>
    <div class="search-section">
      <input 
        type="text" 
        v-model="searchText" 
        placeholder="搜索你感兴趣的内容..."
        class="search-input"
      />
      <button @click="handleSearch" class="search-btn">搜索</button>
    </div>

    <div class="content-grid">
      <div class="content-card" v-for="item in items" :key="item.id">
        <div class="card-icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <button class="learn-more">了解更多 →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')

const items = ref([
  { id: 1, icon: '📱', title: '移动开发', description: '学习移动应用开发技术' },
  { id: 2, icon: '💻', title: 'Web开发', description: '掌握前端和后端技术' },
  { id: 3, icon: '🤖', title: '人工智能', description: '探索AI和机器学习' },
  { id: 4, icon: '☁️', title: '云计算', description: '了解云服务和架构' },
  { id: 5, icon: '🔒', title: '网络安全', description: '保护数据和系统安全' },
  { id: 6, icon: '📊', title: '数据分析', description: '挖掘数据价值' }
])

const handleSearch = () => {
  console.log('搜索:', searchText.value)
}
</script>

<style scoped>
.find {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.find h1 {
  text-align: center;
  color: #667eea;
  font-size: 42px;
  margin-bottom: 40px;
}

.search-section {
  display: flex;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto 50px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #667eea;
}

.search-btn {
  padding: 15px 30px;
  font-size: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.search-btn:hover {
  transform: scale(1.05);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.content-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.content-card h3 {
  color: #333;
  margin: 15px 0 10px 0;
}

.content-card p {
  color: #666;
  margin-bottom: 20px;
}

.learn-more {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more:hover {
  background: #667eea;
  color: white;
}
</style>
