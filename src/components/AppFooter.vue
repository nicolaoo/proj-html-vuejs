<script>
export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <footer>
        <section class="contact">
            <div class="container">
                <div class="row-foot">
                    <div class="col-logo">
                        <figure class="logo-light">
                            <img src="/land/img/logo-light.png" alt="">
                        </figure>
                        <p>
                            Start working with Landrik that can provide everything you need
                            to generate awareness, drive traffic,connect.
                        </p>
                        <span class="icon-social-foot">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </span>
                    </div>
                    <div class="col-data">
                        <ul>
                            <li>
                                <h4>
                                    Company
                                </h4>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Services
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Team
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Project
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-links">
                        <ul>
                            <li>
                                <h4>
                                    Usefull Links
                                </h4>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Term of Services
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Changelog
                                </a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">
                                    Components
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-newsletter">
                        <h4>Newsletter</h4>
                        <p>
                            Sing up and receive the latest
                            tips via email
                        </p>
                        <div class="mail">
                            <p>Write your mail <span><i class="fa-solid fa-circle"></i></span></p>

                            <input type="text" placeholder="Your email:">
                            <i class="fa-regular fa-envelope"></i>

                            <button class="btn-mail">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="nav-footer">
            <div class="container">
                <div class="row-bottom-foot">
                    <div class="col">
                        <p>
                            <i class="fa-regular fa-copyright"></i>
                            2020 Landrik. Dseign with <i class="fa-solid fa-heart"></i>
                            by Shreethemes.
                        </p>
                    </div>
                    <ul>
                        <li>
                            <img src="/land/img/american-ex.png" alt="">
                        </li>
                        <li>
                            <img src="/land/img/discover.png" alt="">
                        </li>
                        <li>
                            <img src="/land/img/master-card.png" alt="">
                        </li>
                        <li>
                            <img src="/land/img/paypal.png" alt="">
                        </li>
                        <li>
                            <img src="/land/img/visa.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

footer {
    background-color: $bg-footer;

    .contact {
        padding: 50px 20px;

    }
}

.row-foot {
    display: flex;
    gap: 30px;

    .col-logo,
    .col-data,
    .col-links,
    .col-newsletter {
        flex-basis: calc(100% / 4);
    }
}

.col-data {
    display: flex;
    justify-content: center;
    color: white;

    li {


        i {
            font-size: 10px;
            padding-right: 5px;
            color: $text-grey-light;

            &:hover {
                color: white;
            }
        }

        h4 {
            padding-bottom: 15px;
        }

        a {
            font-size: 12px;
            color: $text-grey-light;

            &:hover {
                color: white;
            }
        }
    }
}

.col-links {
    color: white;

    li {


        i {
            font-size: 10px;
            padding-right: 5px;
            color: $text-grey-light;

            &:hover {
                color: white;
            }
        }

        h4 {
            padding-bottom: 15px;
        }

        a {
            font-size: 12px;
            color: $text-grey-light;

            &:hover {
                color: white;
            }
        }
    }
}

.col-newsletter {
    color: white;

    p {
        padding: 10px 0;
        color: $text-grey-light;
    }

    .mail {
        display: flex;
        flex-direction: column;
        position: relative;

        p {
            color: $text-grey-light;

            span {
                color: rgb(252, 71, 71);
                font-size: 5px;
            }
        }

        .fa-envelope {
            position: absolute;
            bottom: 0;
            top: 51px;
            left: 8px;
        }

        input {
            padding: 10px 10px 10px 30px;
            border-radius: 5px;
            background-color: #27314F;
            color: white;
            margin: 0px 0 5px 0;
        }

        .btn-mail {
            border-radius: 5px;
            background-color: #222E51;
            color: #2D4FBF;
            margin: 5px 0;
            padding: 10px 0;
            font-weight: 600;
            box-shadow: 0px 2px #2D4FBF;

            &:hover {
                padding: 12px;
                transition: 0.5s linear;
            }
        }
    }
}

.col-logo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: white;

    .logo-light {
        img {
            max-width: 120px;
        }
    }

    .icon-social-foot {

        i {
            border: 1px solid white;
            padding: 7px 10px;
            border-radius: 8px;
            margin-right: 5px;
            line-height: 20px;
            aspect-ratio: 3/2;
            font-size: 15px;

            &:hover {
                opacity: 0.7;
                padding: 9px 11px;
                transition: 0.2s linear;
            }

        }
    }
}

.row-bottom-foot {
    display: flex;
    justify-content: space-between;

    .col {
        color: $text-grey-light;
        font-size: 12px;

        .fa-heart {
            color: red;
        }
    }

    ul {
        display: flex;
        gap: 5px;

        li {
            flex-basis: 10%;
        }
    }
}

.nav-footer {
    padding: 30px 0;
    border-top: 1px solid #52525268;
}
</style>