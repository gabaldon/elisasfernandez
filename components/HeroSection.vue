<template>
  <section class="hero">
    <div class="bouncingball"></div>
    <div class="hero-title">
      <h2>Hola! I’m Elisa</h2>
      <h3>I am a UI UX designer based in Madrid.</h3>
    </div>

    <div class="mywork-link">
      <h4>my work</h4>
      <img class="arrow" src="@/assets/img/arrow.gif" />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  background-color: white;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  text-align: center;
}

.hero-title {
  position: relative;
  z-index: 100;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
}
h2 {
  font-family: 'PPMori';
  margin: 0;
  font-size: 32px;
  font-weight: bold;
}

h3 {
  margin: 0;
  font-size: 24px;
  font-weight: lighter;
}
.mywork-link {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: max-content;
  position: relative;
  z-index: 200;
}

.arrow {
  height: 40px;
  width: 40px;
  margin-top: 8px;
}

.bouncingball {
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50%;
  border: solid 3px rgb(251, 251, 97);
  position: absolute;
  top: 60vh;
  right: 0px;
  transform-origin: 50% 50%;
  animation: bounce 10s linear infinite both;
}

@keyframes bounce {
  0% {
    transform: translate(0vw, -200px) scale(1);
  }
  10% {
    transform: translate(-10vw, -120px) scale(1);
  }
  20% {
    transform: translate(-20vw, -50px) scale(1.1);
  }

  30% {
    transform: translate(-30vw, -100px) scale(1);
  }

  40% {
    transform: translate(-40vw, -130px) scale(1);
  }
  50% {
    transform: translate(-50vw, -105px) scale(1);
  }

  60% {
    transform: translate(-60vw, -50px) scale(1.1);
  }

  70% {
    transform: translate(-70vw, -80px) scale(1);
  }

  80% {
    transform: translate(-80vw, -90px) scale(1);
  }
  90% {
    transform: translate(-90vw, -65px) scale(1);
  }
  100% {
    transform: translate(-100vw, -50px) scale(1.1);
  }
}
</style>
