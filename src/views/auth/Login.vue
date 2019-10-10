<template>
    <article class="auth">
        <h1>{{ title }}</h1>
        <h3>Welcome to the {{ testAuth }} test.</h3>
        <p>Please login (with <strong>neaminational</strong> &amp; <strong>password</strong>) to access your account below.</p>
        <FormLogin />
    </article>
</template>

<script>
    import FormLogin from '../../components/auth/FormLogin'
    export default {
        components: {
            FormLogin
        },
        data () {
            return {
                title: 'Login',
                testAuth: 'Neami',
            }
        }
    }
</script>