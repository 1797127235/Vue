<template>
  <div class="my">
    <div class="profile-header">
      <div class="avatar">👤</div>
      <h2>{{ username }}</h2>
      <p class="email">{{ email }}</p>
    </div>

    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">{{ stats.posts }}</div>
        <div class="stat-label">文章</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.followers }}</div>
        <div class="stat-label">粉丝</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.following }}</div>
        <div class="stat-label">关注</div>
      </div>
    </div>

    <div class="menu-list">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <span class="menu-icon">{{ item.icon }}</span>
        <span class="menu-text">{{ item.text }}</span>
        <span class="menu-arrow">→</span>
      </div>
    </div>

    <button class="logout-btn" @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('Vue 用户')
const email = ref('user@example.com')

const stats = ref({
  posts: 24,
  followers: 1234,
  following: 567
})

const menuItems = ref([
  { id: 1, icon: '⚙️', text: '设置' },
  { id: 2, icon: '📝', text: '我的文章' },
  { id: 3, icon: '❤️', text: '收藏' },
  { id: 4, icon: '📋', text: '历史记录' },
  { id: 5, icon: '🔔', text: '通知' },
  { id: 6, icon: '💬', text: '消息' }
])

const handleLogout = () => {
  console.log('用户退出登录')
}
</script>

<style scoped>
.my {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  border-radius: 16px;
  color: white;
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin: 0 auto 20px;
  border: 4px solid white;
}

.profile-header h2 {
  margin: 10px 0;
  font-size: 28px;
}

.email {
  opacity: 0.9;
  margin: 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 5px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

.menu-list {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background: #f8f9fa;
}

.menu-icon {
  font-size: 24px;
  margin-right: 15px;
}

.menu-text {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.menu-arrow {
  color: #999;
  font-size: 18px;
}

.logout-btn {
  width: 100%;
  padding: 15px;
  background: white;
  border: 2px solid #ff6b6b;
  color: #ff6b6b;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: #ff6b6b;
  color: white;
}
</style>
