import { reactive } from "vue";

const store = reactive({
    listCompanys: {
        amazon: '/land/img/amazon.svg',
        google: '/land/img/google.svg',
        lenovo: '/land/img/lenovo.svg',
        paypal: '/land/img/paypal.svg',
        shopify: '/land/img/shopify.svg',
        spotify: '/land/img/spotify.svg',
    },
    listRates: [
        'Full Access',
        'Enhanced Security',
        'Source Files',
        '1 Domain free',
        'Enhanced Security',
    ]


})

export default store