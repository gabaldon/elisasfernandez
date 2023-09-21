<template>
  <div class="photos-container">
    <PhotoGrid :images="formatedImages" />
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, onBeforeUnmount } from 'vue'
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const images = ref([
  {
    name: '/v1694527754/roju_1_lkasxh.jpg',
    title: 'ROJU, SONIDO MUCHACHO',
    show: false,
  },
  {
    name: '/v1695130790/manolo1_etlree.jpg',
    title: 'MANOLO CARO, ICON EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527753/madre_2_n9y752.jpg',
    title: 'ANTONIA',
    show: false,
  },
  {
    name: '/v1694527756/FLACA_MECHERO_abmrzx.jpg',
    title: 'FLACA',
    show: false,
  },
  {
    name: '/v1694527749/badgyal_candy_8_wartpy.jpg',
    title: 'BAD GYAL, TENTACIONES EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527752/dave_eggers_1_cghtpu.jpg',
    title: 'DAVE EGGERS, ICON EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527753/maria_gafas_xofkef.jpg',
    title: 'MARÍA',
    show: false,
  },
  {
    name: '/v1695130796/rodrigo2_jfqjiv.jpg',
    title: 'RODRIGO CUEVAS, ICON EL PAIS',
    show: false,
  },
  {
    name: '/v1694527758/portada_sa2pem.jpg',
    title: 'ONTO THE EARTH',
    show: false,
  },
  {
    name: '/v1694527756/ARUFE_AN%CC%83O_NUEVO_ntuxto.jpg',
    title: 'ARUFE',
    show: false,
  },
  {
    name: '/v1694527753/SR_PERFIL_zlhj2j.jpg',
    title: 'SOFIA',
    show: false,
  },
  {
    name: '/v1694527749/edificio_1_bzq6qq.jpg',
    title: 'MADRID',
    show: false,
  },
  {
    name: '/v1694527750/ny_2_vfphsh.jpg',
    title: 'NEW YORK',
    show: false,
  },
  {
    name: '/v1694527750/nairobi_3_vzuilc.jpg',
    title: 'NAIROBI, RETINA X MASTERCARD',
    horizontal: true,
    show: false,
  },
  {
    name: '/v1694527751/montana_5_lb2quj.jpg',
    title: 'AZERBAIJAN',
    show: false,
  },
  {
    name: '/v1694527749/hochiminh_6_qqbmo2.jpg',
    title: 'HO CHI MINH',
    horizontal: true,
    show: false,
  },
  {
    name: '/v1694527754/osama_w7hvaa.jpg',
    title: 'OSAMA Y ENRIQUE, ICON EL PAIS',
    show: false,
  },
  {
    name: '/v1695130797/clara_xzwrqz.jpg',
    title: 'CLARA LAGO, TAPAS MAGAZINE',
    show: false,
  },
  {
    name: '/v1694527754/dora_rwmzqs.jpg',
    title: 'DORA',
    show: false,
  },
  {
    name: '/v1695130788/kokoshca_xt8fy0.jpg',
    title: 'KOKOSHCA, SONIDO MUCHACHO',
    horizontal: true,
    show: false,
  },
  {
    name: '/v1695130796/german_cuhxzx.jpg',
    title: 'GERMÁN ALCARAZU, ICON EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527750/Retina_10_uxb17h.jpg',
    title: 'ADEYEMI AJAO, RETINA EL PÁIS',
    show: false,
  },
  {
    name: '/v1694527754/ALASKA_RETINA_fdzzvc.jpg',
    title: 'ALASKA, RETINA EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527755/INGRID_t8f7vq.jpg',
    title: 'INGRID GARCÍA-JONSSON, RETINA EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527757/Palomo_Spain_Naranja_4_jblvb9.jpg',
    title: 'PALOMO SPAIN, ICON EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527749/coche_3_wlzx47.jpg',
    title: 'MARÍA',
    horizontal: true,
    show: false,
  },
  {
    name: '/v1694527755/megansito_ki391y.jpg',
    title: 'MEGANSITO EL GUAPO',
    show: false,
  },
  {
    name: '/v1694527750/joon_color_11_hxfepo.jpg',
    title: 'J-ZOON',
    show: false,
  },
  {
    name: '/v1694527752/MariaKfisherman_1_mrt4l6.jpg',
    title: 'MARIA KE FISHERMAN, TENTACIONES EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527750/yung_beef_2_hhldai.jpg',
    title: 'YUNG BEEF, TENTACIONES EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527749/retina_product_vcuels.jpg',
    title: 'FORMAS CON ALMA, RETINA EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527751/Sita_abellan_5_y73lcy.jpg',
    title: 'SITA ABELLÁN, TENTACIONES EL PAÍS',
    show: false,
  },
  {
    name: '/v1694527758/Palomo_Spain_BN_3_aeekvh.jpg',
    title: 'PALOMO SPAIN, ICON EL PAÍS',
    horizontal: true,
    show: false,
  },
  {
    name: '/v1695130794/eva_soriano_tapas_tbcf48.jpg',
    title: 'EVA SORIANO, TAPAS MAGAZINE',
    show: false,
  },
  {
    name: '/v1694527752/elena_li_chen_o7hhpm.jpg',
    title: 'ELENA LI CHEN, UNOMODELS',
    show: false,
  },
  {
    name: '/v1694527757/mama_patos_p0iwli.jpg',
    title: 'MAMÁ',
    show: false,
  },
  {
    name: '/v1694527756/maria_agua_kioxkn.jpg',
    title: 'MARÍA',
    show: false,
  },
  {
    name: '/v1694527758/yawners_front_zkczaw.jpg',
    title: 'YAWNERS',
    horizontal: true,
    show: false,
  },
])
function handleScroll() {
  images.value = images.value.map((img) => {
    return {
      ...img,
      show: false,
    }
  })
}
const formatedImages = computed(() => {
  return images.value.map((image) => {
    return {
      src: image.name,
      horizontal: image.horizontal ? image.horizontal : null,
      text: {
        title: image.title,
        show: image.show,
      },
    }
  })
})
</script>
