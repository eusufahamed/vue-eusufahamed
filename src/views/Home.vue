<script setup>
import Nav from '../components/Nav.vue'
</script>

<template>
    <div class="columns is-vcentered">
        <div class="column is-5 is-hidden-tablet">
            <br>
            <div class="image is-256x256">
                <img alt="Eusuf Ahamed" src="assets/images/eusufahamed.png" style="border-radius: 2em;" width="400px"
                    height="400px">
            </div>
        </div>

        <div class="column is-7">
            <section class="section">
                <h1 class="title is-size-1 is-size-2-mobile">
                    Hey, I am Eusuf
                </h1>
                <div class="content">
                    <p class="is-size-5 is-size-6-mobile">
                        I am a CS engineer passionate about Databases, Language
                        Internals, Distributed Datastores, and
                        Algorithms. I am currently working with <b>Feather IT</b> as
                        a <b>Software Engineer</b> with the OffShore team.
                    </p>

                    <p class="is-size-5 is-size-6-mobile">
                        Every week, I try to write at least one article on an Engineering Topic and publish a
                        <a href="https://www.linkedin.com/newsletters/asli-engineering-6921728898456072192/"
                            target="_blank">newsletter</a>.
                    </p>

                    <p class="is-size-5 is-size-6-mobile">
                        Since 2018, I have been sharing one engineering nugget
                        every day on my social handles
                    </p>
                </div>
                <ul class="horizontal">
                    <li>
                        <a class="button" target="_blank" href="https://www.linkedin.com/in/eusufahamed/"
                            title="Follow Eusuf Ahamed on LinkedIn">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a class="button" target="_blank" href="https://github.com/eusufahamed"
                            title="Follow Eusuf Ahamed on GitHub">
                            GitHub
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        <div class="column is-5 is-hidden-mobile">
            <div class="image section">
                <img alt="Eusuf Ahamed" src="assets/images/eusufahamed.png" style="border-radius: 2em;" width="400px"
                    height="400px">
            </div>
        </div>
    </div>
</template>