<template>
    <div class="layout">
        <router-link class="route-logout btn" to="/login">Logout</router-link>
        <section class="welcome">
            <h1>Welcome {{ user.firstName + ' ' + user.lastName }}!</h1>
            <p>
            <a href="https://github.com/OliverRandell/guidedogs">Here is a project</a>
            that I completed earlier this year. I was tasked to produce an MVP in 4 weeks. It has a working login / registration area that you can use and it's written with vue.js.</p>
        </section>
    </div>
</template>

<script>
    import { userService } from '../services/user'
    export default {
        data () {
            return {
                user: '',
            }
        },
        created () {
            this.user = JSON.parse(localStorage.getItem('user'))
            this.users.loading = true
            userService.getAll().then(users => this.users = users);
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/sass/vue";
    .layout {
        text-align: center;
        background: $primary;
        color: $white;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .route-logout {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: $white;
        color: $primary;
        text-decoration: none;
        transition: border-radius ease 250ms;
        &:hover {
            border-radius: 0;
        }
    }
    .welcome {
        background-color: $white;
        color: $primary;
        border-radius: 1rem;
        width: 500px;
        padding: 1rem;
    }
</style>