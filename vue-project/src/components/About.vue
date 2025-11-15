<template>
  <div class="about">
    <h1>📚 关于我们</h1>
    <div class="about-content">
      <div class="info-card">
        <h2>项目简介</h2>
        <p>这是一个 Vue Router 演示项目，展示了如何在 Vue 3 应用中使用路由功能。</p>
      </div>
      
      <div class="info-card">
        <h2>技术栈</h2>
        <ul>
          <li>✅ Vue 3</li>
          <li>✅ Vue Router 4</li>
          <li>✅ Vite</li>
          <li>✅ Composition API</li>
        </ul>
      </div>

      <div class="info-card">
        <h2>联系方式</h2>
        <p>📧 邮箱: contact@example.com</p>
        <p>📱 电话: 123-456-7890</p>
        <p>🌐 网址: www.example.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.about h1 {
  text-align: center;
  color: #667eea;
  font-size: 42px;
  margin-bottom: 40px;
}

.about-content {
  display: grid;
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.info-card h2 {
  color: #333;
  margin-top: 0;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.info-card p {
  color: #666;
  line-height: 1.6;
  margin: 10px 0;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  padding: 10px 0;
  color: #555;
  font-size: 16px;
}
</style>
