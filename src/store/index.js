import { createStore } from "vuex";

import setAdmin from "./modules/setAdmin";

// Load Vuex

export default createStore({
  modules: {
    setAdmin,
  },
});
