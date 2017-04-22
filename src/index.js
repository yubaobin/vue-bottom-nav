import BottomNav from './bottom-nav'
import ItemNav from './item-nav'

const components = [
  BottomNav,
  ItemNav
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default install
