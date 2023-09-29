<template>
  <CaseStudySection>
    <BlablacarSectionContent>
      <h3 class="blablacar-title">{{ $t('blablacar-ux-research-title') }}</h3>
      <div>
        <h4 class="blablacar-subtitle">{{ $t('blablacar-empathy-title') }}</h4>
        <p class="blablacar-border">
          {{ $t('blablacar-empathy-description') }}
        </p>
      </div>
      <div>
        <h4 class="blablacar-subtitle">
          {{ $t('blablacar-problem-statement-title') }}
        </h4>
        <p class="blablacar-border">
          {{ $t('blablacar-problem-statement-description') }}
        </p>
      </div>
      <div>
        <h4 class="blablacar-subtitle">
          {{ $t('surveys') }}
        </h4>
        <div class="graphics-container">
          <div class="graphics">
            <div class="graphic">
              <Graphic1 class="graphic-image" />
              <p class="legend">{{ $t('graphic-1-description') }}</p>
            </div>
            <div class="graphic">
              <Graphic2 class="graphic-image" />
              <p class="legend">{{ $t('graphic-2-description') }}</p>
            </div>
          </div>
          <WomanSearching class="illustration" />
        </div>
      </div>
      <div class="sub-section">
        <h4 class="blablacar-subtitle">
          {{ $t('blablacar-competitive-analysis-title') }}
        </h4>
        <CompetitiveAnalysis class="competitive-analysis-img" />
      </div>
      <div>
        <h4 class="blablacar-subtitle">
          {{ $t('blablacar-user-persona-title') }}
        </h4>
        <div class="userpersona-content">
          <UserPersona class="user-persona-image" />
          <div class="blablacar-border description-container">
            <p class="description">
              {{ $t('blablacar-user-persona-description') }}
            </p>
            <p class="quote">"{{ $t('blablacar-user-persona-quote') }}"</p>
          </div>
        </div>
      </div>
    </BlablacarSectionContent>
  </CaseStudySection>
</template>

<script setup>
import UserPersona from '@/assets/svg/blablacar/userpersona.svg'
import CompetitiveAnalysis from '@/assets/svg/blablacar/competitors.svg'
import Graphic1 from '@/assets/svg/blablacar/grafica1.svg'
import Graphic2 from '@/assets/svg/blablacar/grafica2.svg'
import WomanSearching from '@/assets/svg/blablacar/mujer.svg'
</script>

<style lang="scss" scoped>
.competitive-analysis-img {
  width: 70vw;
  height: auto;
  padding: 48px 0;
}
.illustration {
  width: 100%;
  height: auto;
}
.userpersona-content {
  display: grid;
  grid-template-columns: max-content 1fr;
  box-sizing: border-box;
  align-items: center;
  row-gap: 32px;
  justify-items: center;
  .description-container {
    height: 100%;
    padding: 0;
    display: grid;
    grid-template-rows: max-content max-content;
    justify-items: center;
    align-content: center;
    align-items: center;
  }
  .description {
    padding: 32px;
    font-size: 18px;
    color: $blablacar-text;
  }
  .quote {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    padding: 24px;
    font-size: 24px;
    color: $blablacar-blue;
    font-weight: bolder;
  }
  .user-persona-image {
    width: auto;
    height: 300px;
  }
}
.blablacar-border {
  border: 2px dashed $blablacar-blue;
  padding: 40px;
  border-radius: 24px;
  font-weight: 400;
  color: $blablacar-blue;
}
.graphics-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 48px 50px;
  justify-items: flex-end;
  align-items: center;
  .illustration {
    width: 60%;
  }
  .graphics {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
    .graphic {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
      align-items: center;
      .graphic-image {
        width: 100%;
        height: auto;
      }
      .legend {
        background-color: $blablacar-grey;
        border-radius: 24px;
        padding: 16px;
        height: max-content;
        font-size: 18px;
        box-shadow: 0px 6px 10px 0px #091e4226;
      }
    }
  }
}
@media (max-width: 900px) {
  .competitive-analysis-img {
    width: 100%;
  }
  .userpersona-content {
    grid-template-columns: 1fr;
    .quote {
      width: 80%;
    }
  }
  .graphics-container {
    grid-template-columns: 1fr;
    padding: 0;
    row-gap: 32px;
    .illustration {
      justify-self: center;
    }
  }
}
</style>
