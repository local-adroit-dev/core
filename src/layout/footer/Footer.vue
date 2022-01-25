<template>
  <!--begin::Footer-->
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between"
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-1">{{ getCurrentYear }}&copy;</span>
        <a
          href="https://keenthemes.com/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Keenthemes</a
        >
      </div>
      <!--end::Copyright-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KTFooter",
  setup() {
    const getCurrentYear = computed(() => {
      return new Date().getFullYear();
    });
    return {
      footerWidthFluid,
      getCurrentYear,
    };
  },
});
</script>
