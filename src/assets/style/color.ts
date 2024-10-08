import { Settings } from "@/components/popups/components/Settings/index";
import { injectStyle } from "@/utils/vueMethod";
import { watch } from "vue";

const publicCss = {
  "border-radius": "3px",
  "n-spin-background-color": "#535353",
};
injectStyle(publicCss);

const light = {
  "active-hover": "rgba(24, 160, 88, 0.1)",
  "background-color": "rgb(255, 255, 255)",
  "border-color": "#efeff5",
  "box-shadow": "rgba(0, 0, 0, 0.1)",

  "text-color": "rgb(51, 54, 57)",
  "text-color-focus": "rgb(0, 0, 0)",

  "button-bg-focus": "rgba(0, 0, 0, 0.1)",
};

const dark = {
  "active-hover": "rgba(99, 226, 183, 0.15)",
  "background-color": "rgb(16, 16, 20)",
  "border-color": "#ffffff17",
  "box-shadow": "rgba(255, 255, 255, 0.1)",

  "text-color": "rgba(255, 255, 255, 0.82)",
  "text-color-focus": "#ffffff",

  "button-bg-focus": "rgba(255, 255, 255, 0.1)",
};

watch(
  () => Settings.value.theme,
  (theme) => {
    injectStyle(theme === "light" ? light : dark);
  },
  {
    immediate: true,
  }
);
