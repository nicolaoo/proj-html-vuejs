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
        <div class="row-text-chart">

            <div class="text-document">

                <h3>
                    Build tools and extensive documention
                </h3>

                <p>
                    You can combine all the Landrik templates into a single one,
                    you can take a component from the Application theme and use it in the
                    Website.
                </p>

                <ul>
                    <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Digital Marketing Solution for Tomorrow</p>
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>our talented & experienced marketing agency</p>
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>create your own skikn to match your brand</p>
                    </li>
                </ul>

                <button>
                    read more
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div class="chart">
                <figure>
                    <img src="/land/img/1.png" alt="">
                </figure>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.row-text-chart {
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 50px 0;
}

.text-document {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;

    h3 {
        font-size: 30px;
        max-width: 350px;
        padding-bottom: 20px;
    }

    p {
        color: $text-grey;

    }

    ul {
        li {
            display: flex;
            gap: 12px;
            align-items: center;
            padding: 5px 0;

            p {
                text-transform: capitalize;
            }

            i {
                color: $text-purple;
            }
        }
    }

    button {
        padding: 8px 18px;
        color: white;
        font-weight: 600;
        background-color: $text-purple;
        border-radius: 5px;
        text-transform: capitalize;

        &:hover {
            opacity: 0.8;
        }

        i {
            font-size: 10px;
            text-align: center;
            padding-left: 6px;
        }
    }


}
</style>
