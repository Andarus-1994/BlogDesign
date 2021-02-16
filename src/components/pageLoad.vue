<template>
  <div class="pageLoad">
    <span>↓</span>
    <span style="--delay: 0.1s">↓</span>
    <span style="--delay: 0.3s">↓</span>
    <span style="--delay: 0.4s">↓</span>
    <span style="--delay: 0.5s">↓</span>
  </div>
</template>

<script>
export default {
  name: "pageLoad",
};
</script>

<style>
.pageLoad {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: enter 1s alternate-reverse infinite;
}
@keyframes enter {
  0% {
    background: #6f83a7;
  }
  100% {
    background: #1e448b;
  }
}
@keyframes arrows {
  0%,
  100% {
    color: rgb(17, 16, 16);
    transform: translateY(0);
  }
  50% {
    color: #6f83a7;
    transform: translateY(20px);
  }
}

span {
  --delay: 0s;
  font-size: 1.5rem;
  animation: arrows 1s var(--delay) infinite ease-in;
}
</style>
