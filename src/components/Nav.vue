<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" style="padding: 0 0.5rem;">
        <div class="navbar-brand">
            <div class="navbar-item">
                <RouterLink class="is-size-3 has-text-weight-bold has-text-black" :to="{ name: 'home' }">
                    Eusuf Ahamed
                </RouterLink>
            </div>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="menu"
                onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <RouterLink class="navbar-item" to="">
                    <span class="is-size-5 has-text-weight-bold">
                        Contribute
                    </span>
                </RouterLink>
                <RouterLink class="navbar-item" :to="{ name: 'blogs' }">
                    <span class="is-size-5 has-text-weight-bold">
                        Blogs
                    </span>
                </RouterLink>
                <RouterLink class="navbar-item" to="">
                    <span class="is-size-5 has-text-weight-bold">
                        Papershelf
                    </span>
                </RouterLink>
                <RouterLink class="navbar-item" to="">
                    <span class="is-size-5 has-text-weight-bold">
                        Bookshelf
                    </span>
                </RouterLink>
                <RouterLink class="navbar-item" to="">
                    <span class="is-size-5 has-text-weight-bold">
                        Useful Resource
                    </span>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>