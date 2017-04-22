import BottomNav from './bottom-nav.vue'
import ItemNav from './item-nav.vue'

const components = [
  BottomNav,
  ItemNav
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default install
