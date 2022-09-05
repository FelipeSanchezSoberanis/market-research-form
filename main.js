const { createApp, ref, reactive } = Vue;

const aspect = ref(null);
const otherExternal = ref(false);
const otherInternal = ref(false);
const otherLooking = ref(false);

createApp({
  data() {
    return {
      aspect,
      otherExternal,
      otherInternal,
      otherLooking,
    };
  },
}).mount("#app");
