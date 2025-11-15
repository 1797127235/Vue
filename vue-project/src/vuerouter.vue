<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-brand">
        <h1>🚀 Vue Router 演示</h1>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">
          <span class="icon">🏠</span>
          <span>首页</span>
        </router-link>

        <router-link to="/about" class="nav-link">
          <span class="icon">📚</span>
          <span>关于</span>
        </router-link>

        <router-link to="/find" class="nav-link">
          <span class="icon">🔍</span>
          <span>发现</span>

        </router-link>
        <router-link to="/my" class="nav-link">
          <span class="icon">👤</span>
          <span>我的</span>
          
        </router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view></router-view>
    </main>


  </div>
</template>


<script setup>
  
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 30px;
}

.nav-brand h1 {
  color: white;
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-link .icon {
  font-size: 20px;
}

.main-content {
  flex: 1;
  padding: 20px;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app-footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

.app-footer p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px;
  }

  .nav-brand h1 {
    font-size: 20px;
  }

  .nav-links {
    gap: 8px;
  }

  .nav-link {
    padding: 10px 16px;
    font-size: 14px;
  }

  .nav-link .icon {
    font-size: 18px;
  }
}
</style>
