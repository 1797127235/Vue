<script setup>
    import BitCard from './components/bit-card.vue'
    import { ref, onMounted } from 'vue'

    const drive = ref(null)
    onMounted(() => {
      drive.value.scrollIntoView({ behavior: 'smooth' });
    });

</script>

<template>
  <div class="container">
    <div class="bit-header">
      <div class="main">
        <h1 class="logo">🎓 比特学院</h1>
        <nav class="nav">
          <a href="#c">C语言</a>
          <a href="#ds">数据结构</a>
          <a href="#java">Java</a>
        </nav>
      </div>
    </div>

    <div class="bit-body">
      <div class="main">
        <div class="bit-c" id="c">
          <div class="section-header">
            <h2>💻 C语言课程</h2>
            <span class="count">8 门课程</span>
          </div>
          <div class="courseList">
            <bit-card
              bgColor="powderblue"
              v-for="n in 8"
              :key="n"
            />
          </div>
        </div>

        <div class="bit-ds" id="ds">
          <div class="section-header">
            <h2>🌲 数据结构课程</h2>
            <span class="count">8 门课程</span>
          </div>
          <div class="courseList">
            <bit-card
              bgColor="palevioletred"
              v-for="n in 8"
              :key="n"
            />
          </div>
        </div>

        <div class="bit-java " id="java">
          <div class="section-header" ref ="drive">
            <h2>☕ Java课程</h2>
            <span class="count">8 门课程</span>
          </div>
          <div class="courseList">
            <bit-card
              bgColor="purple"
              v-for="n in 8"
              :key="n"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bit-footer">
      <div class="main">
        <div class="footer-content">
          <div class="footer-section">
            <h4>关于我们</h4>
            <p>比特学院致力于提供优质的编程教育</p>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <p>邮箱: contact@bit.edu</p>
            <p>电话: 400-123-4567</p>
          </div>
          <div class="footer-section">
            <h4>关注我们</h4>
            <p>微信 | 微博 | B站</p>
          </div>
        </div>
        <div class="copyright">
          © 2025 比特学院. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* 头部样式 */
.bit-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.bit-header .main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* 主体样式 */
.bit-body {
  padding: 40px 20px;
}

.bit-body .main {
  max-width: 1200px;
  margin: 0 auto;
}

.bit-c, .bit-ds, .bit-java {
  margin-bottom: 60px;
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.bit-c:hover, .bit-ds:hover, .bit-java:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #f0f0f0;
}

.section-header h2 {
  font-size: 28px;
  color: #333;
  font-weight: 600;
}

.count {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.courseList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 20px;
  justify-items: center;
}

/* 底部样式 */
.bit-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #fff;
  padding: 40px 20px 20px;
  margin-top: 60px;
}

.bit-footer .main {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 600;
}

.footer-section p {
  color: #bdc3c7;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.6;
}

.copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .bit-header .main {
    flex-direction: column;
    gap: 15px;
  }

  .nav {
    gap: 15px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .courseList {
    grid-template-columns: 1fr;
  }
}
</style>