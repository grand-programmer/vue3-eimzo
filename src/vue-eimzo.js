import './eimzo/e-imzo-client.js'
import './eimzo/e-imzo.js'
import EIMZO from './eimzo/EIMZO'


/**
 * @param Vue
 */

export default {
    install(app) {
        app.config.globalProperties.$eimzo = new EIMZO();
    }
};

