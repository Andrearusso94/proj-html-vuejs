import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faGripLines, faFacebookF, faTwitter, faYoutube, faInstagram)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)

    .mount('#app')