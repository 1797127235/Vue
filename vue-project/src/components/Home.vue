<template>
  <div class="home">
    <div class="hero">
      <h1>🏠 首页</h1>
      <p>欢迎来到 Vue Router 演示项目</p>
    </div>
    <div class="content">
      <div class="card">
        <h2>什么是 Vue Router？</h2>
        <p>Vue Router 是 Vue.js 的官方路由管理器。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。</p>
      </div>
      <div class="features">
        <div class="feature-item">
          <span class="icon">🚀</span>
          <h3>动态路由匹配</h3>
          <p>灵活的路径参数</p>
        </div>
        <div class="feature-item">
          <span class="icon">🎯</span>
          <h3>嵌套路由</h3>
          <p>支持复杂的路由结构</p>
        </div>
        <div class="feature-item">
          <span class="icon">⚡</span>
          <h3>导航守卫</h3>
          <p>完整的导航控制</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 48px;
  margin: 0 0 20px 0;
}

.hero p {
  font-size: 20px;
  margin: 0;
  opacity: 0.9;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.card h2 {
  color: #667eea;
  margin-top: 0;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-item {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 48px;
  display: block;
  margin-bottom: 15px;
}

.feature-item h3 {
  color: #333;
  margin: 15px 0 10px 0;
}

.feature-item p {
  color: #666;
  margin: 0;
}
</style>
