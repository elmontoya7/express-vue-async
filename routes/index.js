var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let data = {};
    let vueOptions = {
        head: {
            title: 'Test Async'
        }
    }
    res.renderVue('main.vue', data, vueOptions);
})

module.exports = router;
