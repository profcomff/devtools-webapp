<template>
    <div class="container">
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
                    />
                </div>
            </div>
            <div class="row p-4">
                <button
                    type="submit"
                    class="btn btn-success my-2"
                >
                    Зарегистрироваться
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
    mounted() {
        let changeHeaderLayoutEvent = new CustomEvent('change-header-layout', {
            detail: {
                layoutName: 'back',
                text: 'О пользователе',
            },
        });
        document.dispatchEvent(changeHeaderLayoutEvent);
    },
};
</script>

<style></style>
