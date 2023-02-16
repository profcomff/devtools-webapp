<template>
    <div
        class="container"
        @submit.prevent="auth"
    >
        <h1>Вход в приложение</h1>
        <p>
            Добро пожаловать! Тут находится наша нулевая итерация по
            прикручиванию авторизации в приложение. Ниже вы можете войти в
            систему.
        </p>
        <form action="">
            <div class="mb-3 row">
                <label
                    for="staticEmail"
                    class="col-sm-2 col-form-label"
                >
                    Email
                </label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        id="staticEmail"
                        placeholder="email@example.com"
                        v-model="email"
                    />
                </div>
            </div>
            <div class="mb-3 row">
                <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label"
                >
                    Password
                </label>
                <div class="col-sm-10">
                    <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        v-model="password"
                    />
                </div>
            </div>
            <div class="row p-4">
                <button
                    type="submit"
                    class="btn btn-success my-2"
                >
                    Войти
                </button>
                <RouterLink
                    to="/devtools"
                    class="btn btn-secondary my-2"
                >
                    Вернуться назад
                </RouterLink>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        email: '',
        password: '',
    }),
    mounted() {
        let changeHeaderLayoutEvent = new CustomEvent('change-header-layout', {
            detail: {
                layoutName: 'back',
                text: 'О пользователе',
            },
        });
        document.dispatchEvent(changeHeaderLayoutEvent);
    },
    methods: {
        auth() {
            if (this.email === '' || this.password === '') {
                alert('Пустой логин или пароль');
                return;
            }

            fetch(`${process.env.VUE_APP_API_AUTH}/email/login`, {
                method: 'POST',
                cache: 'no-cache',
                redirect: 'follow',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            })
                .then(response => response.json())
                .then(json => {
                    localStorage.setItem('auth-token', json.token);
                    alert(JSON.stringify(json));
                });
        },
    },
};
</script>

<style></style>
