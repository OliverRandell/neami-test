<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
            <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
        </div>
        <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
        </div>
        <div class="button-wrapper">
            <button class="btn btn-primary" :disabled="loading">Login</button>
            <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        </div>
        <p>
            <strong v-if="error" class="error">{{ error }}</strong>
        </p>

            
    </form>
</template>

<script>
    import { router } from "../../router";
    import { userService } from "../../services/user";
    export default {
        data() {
            return {
            username: "",
            password: "",
            submitted: false,
            loading: false,
            returnUrl: "",
            error: ""
            };
        },
        created() {
            userService.logout();
            this.returnUrl = this.$route.query.returnUrl || "/";
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                const { username, password } = this;
                if (!(username && password)) {
                    return;
                }
                this.loading = true;
                userService.login(username, password).then(
                    user => router.push(this.returnUrl),
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
            }
        }
    };
    
</script>

<style lang="scss" scoped>
    form {
        width: 100%;
    }
    .button-wrapper {
        margin-bottom: 1rem;
        button {
            float: right;
        }
    }
</style>