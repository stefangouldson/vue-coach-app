import { createStore } from 'vuex'
import coachesModule from './modules/coaches/index.js';
import requestModules from './modules/requests/index.js';
import authModel from './modules/auth/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModules,
        auth: authModel
    },

})

export default store