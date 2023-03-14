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
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Full Access
                        </li>
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Enhanced Security
                        </li>
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Source Files
                        </li>
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            1 Domain free
                        </li>
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Enhanced Security
                        </li>
                    </ul>
                    <button class="btn-buy">
                        Buy Now
                    </button>
                </div>
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
    grid-template-columns: repeat(4, 1fr);
}

.card {
    border: 2px solid $sfondo-bg;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px $text-grey;

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
    padding: 8px 70px;
    margin: 12px 0;
    background-color: $text-purple;
    color: white;
    border-radius: 6px;
}
</style>