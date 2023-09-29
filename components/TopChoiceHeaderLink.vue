<template>
  <div class="section">
    <ProjectCard
      :mockup-position="'right'"
      :show-prototype="false"
      :primary-btn-text="$t('go-to-behance')"
      :title="'topchoice-title'"
      :bg-color="'#029BC7'"
      :behance-link="'https://www.behance.net/gallery/173941357/TOP-CHOICE-UXUI-CASE-STUDY'"
      :case-study-link="'/topchoice'"
      :prototype-link="'/topchoice/prototype'"
      :description="'top-choice-description'"
      :text-color="'white'"
      :mockup="'/v1694509566/topchoice-mockup_ykcnhn.png'"
    />
    <NextProjectBtn
      class="next-project"
      :type="'secondary'"
      :url="'/schoolpay'"
    />
  </div>
</template>

<style lang="scss" scoped>
.section {
  background: $blue;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  column-gap: 100px;
  min-height: 90vh;
  row-gap: 0px;
  .next-project {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .section {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .section {
    grid-template-columns: 1fr;
  }
}
</style>
