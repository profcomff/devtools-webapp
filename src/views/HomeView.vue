<template>
    <div class="container">
        <div class="row p-4">
            <h2>Настройки кэша</h2>
            <button
                type="button"
                class="btn btn-danger"
                @click="clear_cache"
            >
                Очистить кэш
            </button>

            <p>Full cache size: {{ current_cache_size }}</p>
        </div>

        <div class="row p-4">
            <RouterLink
                class="btn btn-primary my-2"
                to="/devtools/auth"
            >
                Авторизация
            </RouterLink>
            <RouterLink
                class="btn btn-primary my-2"
                to="/devtools/register"
            >
                Регистрация
            </RouterLink>
            <RouterLink
                class="btn btn-primary my-2"
                to="/devtools/me"
            >
                Информация о текущем пользователе
            </RouterLink>
        </div>

        <div class="row p-4">
            <h2>Настройки уведомлений</h2>
            <div class="home">
                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        v-model="push_enable"
                    />
                    <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                        >Тестовые пуш уведомления</label
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        push_enable: localStorage.getItem('devtools-push-enable') || false,
        current_cache_size: 0,
    }),
    watch: {
        push_enable(newstate) {
            localStorage.setItem('devtools-push-enable', newstate);
            dispatchEvent(
                new Event(
                    newstate ? 'devtools-push-enable' : 'devtools-push-disable',
                ),
            );
        },
    },
    methods: {
        clear_cache() {
            caches
                .keys()
                .then(cacheNames => {
                    cacheNames.forEach(cacheName => {
                        caches.delete(cacheName);
                        console.log(`Cache ${cacheName} cleared`);
                    });
                })
                .then(() =>
                    this.cache_size_all().then(
                        v => (this.current_cache_size = v),
                    ),
                );
        },
        async cache_size(c) {
            // returns approximate size of a single cache (in bytes)
            return c.keys().then(a => {
                return Promise.all(
                    a.map(req =>
                        c.match(req).then(res =>
                            res
                                .clone()
                                .blob()
                                .then(b => b.size),
                        ),
                    ),
                ).then(a => a.reduce((acc, n) => acc + n, 0));
            });
        },
        async cache_size_all() {
            // returns approximate size of all caches (in bytes)
            return caches.keys().then(a => {
                return Promise.all(
                    a.map(n => caches.open(n).then(c => this.cache_size(c))),
                ).then(a => a.reduce((acc, n) => acc + n, 0));
            });
        },
    },
    mounted() {
        let changeHeaderLayoutEvent = new CustomEvent('change-header-layout', {
            detail: {
                layoutName: 'back',
                text: 'Инструменты разработчика',
            },
        });
        document.dispatchEvent(changeHeaderLayoutEvent);
        this.cache_size_all().then(v => (this.current_cache_size = v));
    },
};
</script>
