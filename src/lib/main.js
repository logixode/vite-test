// import Foo from '../components/HelloWorld.vue'

// // Default export is installable instance of component.
// // IIFE injects install function into component, allowing component
// // to be registered via Vue.use() as well as Vue.component(),
// // Get component instance

// export default /*#__PURE__*/(() => {
//   const installable = Foo;

//   // Attach install function executed by Vue.use()
//   installable.install = (app) => {
//     app.component('CheckboxComponent', installable);
//   };
//   return installable;
// })();

import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue'
import InfiniteScroll from '../components/InfiniteScroll.vue'

let components = { InfiniteScroll }
Object.keys(components).forEach((key) => {
  window[key] = (() => {
    const installable = components[key];

    // Attach install function executed by Vue.use()
    installable.install = (app) => {
      app.component(components[key], installable);
    };
    return installable;
  })();
})