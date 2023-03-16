<script>
import store from '../store'
import Features from './Features.vue'
import ChartDocument from './ChartDocument.vue'
import Rates from './Rates.vue'

export default {
    data() {
        return {
            store
        }
    }, components: {
        Features,
        ChartDocument,
        Rates,
    }
}

</script>

<template>
    <section class="development">

        <div class="bg-grey-dev">
            <button>
                <a href="#">
                    <i class="chevron-btn fa-solid fa-chevron-up"></i>
                </a>
            </button>
            <div class="container">
                <div class="develop-doc">
                    <div class="document">
                        <button class="dev-btn">
                            Development
                        </button>
                        <h1>A Complete Developer Toolste</h1>
                        <p>
                            Launch your campaign and benefit from our expertise on designing
                            and managing conversion centered bootstrap4 html page.

                        </p>
                        <span>
                            <button class="btn start-btn">
                                Get Sarted
                            </button>
                            <button class="btn doc-btn">
                                Documentation
                            </button>
                        </span>
                        <p>Current Version: v2.6.0</p>
                    </div>
                    <figure>
                        <img src="/land/img/about.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
        <div class="dev-company">
            <div class="container">
                <div class="companys">
                    <figure v-for="(company, i) in store.listCompanys" :key="i">
                        <img :src="company" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>

    <section class="features">
        <Features />
    </section>

    <section class="chart-document">
        <ChartDocument />
    </section>

    <section class="rates-developer">
        <Rates />
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.rates-developer {
    padding: 50px 0;
}

.chevron-btn {
    padding: 10px;
    position: fixed;
    bottom: 20px;
    right: 35px;
    background-color: $text-purple;
    aspect-ratio: 1/1;
    line-height: 12px;
    color: white;
    border-radius: 5px;
}

.bg-grey-dev {
    background-color: $sfondo-bg;
}

.dev-company {
    border-top: 1px solid rgb(226, 226, 226);
    background-image: url('/land/img/Vector1.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.companys {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;


    img {
        padding: 40px;

        &:hover {
            background-color: $text-purple;
            opacity: 0.2;
        }
    }
}

.develop-doc {
    display: flex;
    align-items: center;
    padding: 50px 0;
    gap: 100px;



    figure {
        flex-basis: 50%;
    }

    .document {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        h1 {
            font-size: 40px;
        }

        p {
            color: $text-grey;
            font-size: 14px;
            font-weight: 600;
        }

        .dev-btn {
            border-radius: 8px;
            padding: 2px 5px;
            background-color: $bg-icon-head;
            color: $text-bg-purple;
            font-weight: 600;
            font-size: 10px;
        }

        .btn {
            border-radius: 5px;
            padding: 10px 20px;
            font-weight: 500;
        }

        .start-btn {
            background-color: $text-purple;
            color: white;

            &:hover {
                opacity: 0.8;
            }
        }

        .doc-btn {
            background-color: white;
            color: $text-purple;
            border: 1px solid $text-purple;
            margin-left: 15px;

            &:hover {
                background-color: $text-purple;
                color: white;
                opacity: 0.8;
            }
        }
    }
}
</style>