// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    theme_id: "",
    name: "",
    email: "",
    image: "",
    bio: "",
    theme: null,
    colors: null,
    allLinks: null,
    isMobile: false,
    updatedLinkId: 0,
    addLinkOverlay: false,
    isPreviewOverlay: false,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {},
  persist: true,
});
