<template>
  <div
    class="hero-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div class="hero-grid" />
    <div class="hero-blob hero-blob-1" />
    <div class="hero-blob hero-blob-2" />
    <div class="hero-blob hero-blob-3" />
  </div>
</template>

<style scoped>
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in oklab, var(--ui-primary) 12%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklab, var(--ui-primary) 12%, transparent) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
}

.hero-blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  opacity: 0.35;
  background: var(--ui-primary);
  animation: float 14s ease-in-out infinite;
}

.hero-blob-1 {
  width: 28rem;
  height: 28rem;
  top: -8rem;
  left: 10%;
}
.hero-blob-2 {
  width: 22rem;
  height: 22rem;
  top: 4rem;
  right: 8%;
  animation-delay: -5s;
  opacity: 0.25;
}
.hero-blob-3 {
  width: 18rem;
  height: 18rem;
  bottom: -6rem;
  left: 45%;
  animation-delay: -9s;
  opacity: 0.2;
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(30px, -40px, 0) scale(1.15);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-blob {
    animation: none;
  }
}
</style>
