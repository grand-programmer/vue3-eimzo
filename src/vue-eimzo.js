import EIMZO from './eimzo/EIMZO'
import './eimzo/e-imzo.js'
import './eimzo/e-imzo-client.js'


/**
 * @param Vue
 */

export default {
    install(app) {
        app.config.globalProperties.$eimzo = new EIMZO();
    }
};

