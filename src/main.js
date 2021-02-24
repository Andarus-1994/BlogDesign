import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueKinesis from "vue-kinesis";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Moment from "moment";

library.add(faFacebook, faTwitter, faInstagram, faLinkedin);
createApp(App)
  .use(store)
  .use(router)
  .use(VueKinesis)
  .use(FontAwesomeIcon)
  .use(Moment)
  .mount("#app");
