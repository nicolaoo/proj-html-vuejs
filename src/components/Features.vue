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
            <p class="top-title">Quickstart</p>
            <h3>Awesome isn't it? Let's dive in!</h3>
            <p>
                Start working with <a href="#">Landrik</a> that can provide everything you need
                to generate awareness, drive traffic,connect.
            </p>

            <div>
                <div class="table-nav">
                    <div class="row-table">
                        <div class="top-table">
                            <ul class="choose_btn">
                                <button class="active">
                                    npm
                                </button>
                                <button>
                                    nuget
                                </button>
                                <button>
                                    spm
                                </button>
                                <button class="end-btn-table">
                                    github
                                </button>
                            </ul>
                        </div>

                        <div class="bottom-table">
                            <ul>
                                <li><span>$</span> npm install</li>
                                <li><span>-g</span> claps.js</li>
                            </ul>
                        </div>
                    </div>

                    <ul class="check-out_table">
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Work with any team
                        </li>
                        <li>
                            <i class="fa-regular fa-circle-check"></i>
                            Organize your data
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
@use '../style/variables.scss' as *;

.key {
    display: flex;
    padding: 50px 0;
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

// QUIK START SECTION

.quick-start {
    text-align: center;
    padding: 50px 0;

    h3 {
        padding: 20px 0;
        font-size: 25px;
    }

    .top-title {
        color: $text-purple;
        font-weight: 700;
        padding: 0;
    }

    p {
        max-width: 600px;
        color: $text-grey;
        margin: 0 auto;

        a {
            color: $text-purple;
            font-weight: 800;
        }
    }
}

.table-nav {
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    .row-table {
        background-color: #000000;
        padding: 20px 30px;
        color: white;
        border-radius: 6px;
        margin: 0 auto;

        .choose_btn {
            border: 1px solid rgb(33, 33, 33);
            border-radius: 6px;

            button {
                background-color: rgb(25, 25, 25);
                padding: 10px 50px;
                color: $text-grey-light ;
            }

            .active {
                background-color: rgb(0, 0, 0);
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                color: white;
            }

        }

        .end-btn-table {
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
        }
    }
}

.bottom-table {
    ul {
        display: flex;
        gap: 15px;
        padding-top: 12px;

        li {
            color: $text-grey;

            span {
                color: $text-green;
            }
        }
    }


}

.check-out_table {
    display: flex;
    gap: 40px;
    padding-top: 25px;
    margin-left: 273px;
    align-items: center;
    justify-content: flex-start;

    i {
        color: $text-green;
        padding-right: 5px;
    }
}
</style>
