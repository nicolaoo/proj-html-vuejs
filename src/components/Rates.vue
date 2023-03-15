<script >
import store from '../store'

export default {
    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <div class="container">
        <div class="row-title">
            <h3>
                Our rates for developer from landrik team

            </h3>
            <p>
                Start working with <a href="#">Landrik</a> that can provide everything you need
                to generate awareness, drive traffic,connect.
            </p>
        </div>
        <div class="row-rates">
            <div class="grid">
                <div class="card">
                    <button class="level-rates">
                        Basic
                    </button>
                    <div class="price">
                        <h4>
                            $9.00

                        </h4>
                        <p>

                            Per Month
                        </p>
                    </div>
                    <p>
                        All the basics for businesses that are just getting started.
                    </p>
                    <ul>
                        <li v-for="(el, i) in store.listRates" :key="i">
                            <i class="fa-regular fa-circle-check"></i>
                            {{ el }}
                        </li>
                    </ul>
                    <div class="content-btn">
                        <button class="btn-buy">
                            Buy Now
                        </button>
                        <p>
                            *No credit card required
                        </p>
                    </div>
                </div>

                <div class="card best-price">
                    <figure>
                        <img class="bg-price" src="/land/img/Vector2.svg" alt="">
                        <img class="text-price" src="/land/img/Frame1.png" alt="">
                    </figure>
                    <button class="level-rates">
                        Business
                    </button>
                    <div class="price">
                        <h4>
                            $39.00

                        </h4>
                        <p>

                            Per Month
                        </p>
                    </div>
                    <p>
                        All the basics for businesses that are just getting started.
                    </p>
                    <ul>
                        <li v-for="(el, i) in store.listRates" :key="i">
                            <i class="fa-regular fa-circle-check"></i>
                            {{ el }}
                        </li>
                    </ul>
                    <div class="content-btn">
                        <button class="btn-buy">
                            Buy Now
                        </button>
                        <p>
                            *No credit card required
                        </p>
                    </div>
                </div>

                <div class="card">
                    <button class="level-rates">
                        Enterprise
                    </button>
                    <div class="price">
                        <h4>
                            $79.00

                        </h4>
                        <p>

                            Per Month
                        </p>
                    </div>
                    <p>
                        All the basics for businesses that are just getting started.
                    </p>
                    <ul>
                        <li v-for="(el, i) in store.listRates" :key="i">
                            <i class="fa-regular fa-circle-check"></i>
                            {{ el }}
                        </li>
                    </ul>
                    <div class="content-btn">
                        <button class="btn-buy">
                            Buy Now
                        </button>
                        <p>
                            *No credit card required
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row-mail">
            <h3>
                Want to be among the first to find out?
            </h3>
            <p>
                Start working with <a href="#">Landrik</a> that can provide everything you need
                to generate awareness, drive traffic,connect.
            </p>
            <div class="mail-user">

                <input type="text" placeholder="Email Address">
                <button class="btn-buy">
                    Get Started
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.row-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h3 {
        font-weight: 800;
    }

    p {
        max-width: 600px;
        color: $text-grey;
        text-align: center;
        padding-bottom: 50px;

        a {
            color: $text-purple;
            font-weight: 800;
        }
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 900px;
    margin: 0 auto;
    gap: 20px;
}

.best-price {
    position: relative;

    .bg-price {
        position: absolute;
        right: -2px;
        top: -2px;
    }

    .text-price {
        position: absolute;
        right: 11px;
        top: 15px;
    }
}

.card {
    border: 2px solid $sfondo-bg;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 1px $text-grey;

    &:hover {
        padding: 20px;
        transition: 0.5s linear;
    }

    .level-rates {
        padding: 7px 15px;
        background-color: $bg-icon-head;
        color: $text-purple;
        border-radius: 25px;
        font-weight: 700;
    }

    .price {
        padding: 12px 0;

        h4 {
            font-size: 20px;
            font-weight: 800;
        }

        P {
            color: $text-grey;
            font-size: 11px;
            font-weight: 700;
            padding: 3px 0;
        }
    }

    p {
        color: $text-grey;
        font-size: 11px;
        font-weight: 700;
        padding: 5px 0;
        padding-bottom: 15px;
    }

    ul {

        padding-top: 15px;
        border-top: 1px solid $bg-icon-head;

        li {
            color: $text-grey;
            font-size: 11px;
            font-weight: 700;
            padding: 5px 0;


            i {
                color: $text-purple;
                padding-right: 5px;
                font-size: 15px;
                text-align: center;
            }
        }
    }


}

.btn-buy {
    padding: 8px;
    margin: 12px 0;
    background-color: $text-purple;
    color: white;
    border-radius: 6px;
    flex-grow: 1;
}

.content-btn {
    display: flex;
    justify-content: stretch;
    flex-direction: column;

}

.row-mail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0;

    h3 {
        font-weight: 800;
    }

    p {
        max-width: 600px;
        color: $text-grey;
        text-align: center;
        padding-bottom: 20px;

        a {
            color: $text-purple;
            font-weight: 800;
        }
    }
}

.mail-user {
    position: relative;

    button {
        padding: 10px 15px;
        background-color: #2f55d4;
        color: white;
        border-radius: 15px;
        position: absolute;
        right: 1px;
        top: -10px;
        bottom: -10px;
    }

    input {
        padding: 10px 300px 10px 10px;
        border: 1px solid $bg-icon-head;
        border-radius: 30px;
    }
}
</style>