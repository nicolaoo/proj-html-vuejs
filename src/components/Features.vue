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
        <div class="key">
            <h3>Key Features</h3>
            <p>
                Start working with <a href="#">Landrik</a> that can provide everything you need
                to generate awareness, drive traffic,connect.
            </p>
            <div class="grid">

                <div class="card">
                    <span><i class="fa-solid fa-maximize"></i></span>
                    <h5>Scalable</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure enim consequatur fugiat exercitationem dicta illo
                        voluptatum harum perspiciatis velit rerum.

                    </p>
                    <a href="#">
                        Read More
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>

                <div class="card">
                    <span><i class="fa-solid fa-maximize"></i></span>
                    <h5>Scalable</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure enim consequatur fugiat exercitationem dicta illo
                        voluptatum harum perspiciatis velit rerum.

                    </p>
                    <a href="#">
                        Read More
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>

                <div class="card">
                    <span><i class="fa-solid fa-maximize"></i></span>
                    <h5>Scalable</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure enim consequatur fugiat exercitationem dicta illo
                        voluptatum harum perspiciatis velit rerum.

                    </p>
                    <a href="#">
                        Read More
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>

                <div class="card">
                    <span><i class="fa-solid fa-maximize"></i></span>
                    <h5>Scalable</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure enim consequatur fugiat exercitationem dicta illo
                        voluptatum harum perspiciatis velit rerum.

                    </p>
                    <a href="#">
                        Read More
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="quick-start">

        </div>

    </div>
</template>

<style lang="scss">
@use '../style/variables.scss' as *;

.key {
    display: flex;
    padding: 100px 0;
    flex-direction: column;
    gap: 20px;

    a {
        color: $text-purple;
        font-weight: 800;
    }

    p {
        max-width: 600px;
        color: $text-grey;
        padding-bottom: 70px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;

        .card {
            border: 3px solid $sfondo-bg;
            padding: 20px;

            h5 {
                margin: 15px 0;
            }

            p {
                color: $text-grey;
                padding-bottom: 15px;
            }

            i {

                padding: 15px;
                border-radius: 5px;
                background-color: $bg-icon-head;
                color: $text-purple;

            }

            a {
                color: $text-purple;
                font-weight: 700;
                font-size: 15px;


                i {
                    color: $text-purple;
                    font-size: 10px;
                    padding: 0;
                    background-color: white;
                    text-align: center;
                    padding-left: 5px;
                }
            }
        }
    }
}
</style>
