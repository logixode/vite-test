import InfiniteScroll from '../components/InfiniteScroll.vue'

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
// Get component instance

window.HelloWorld2 = (() => {
  const installable = InfiniteScroll;

  // Attach install function executed by Vue.use()
  installable.install = (app) => {
    app.component('CheckboxComponent', installable);
  };
  return installable;
})();