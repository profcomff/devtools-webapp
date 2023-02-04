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
        push_enable: localStorage.getItem('devtools_push_enable') || false,
    }),
    watch: {
        push_enable(newstate) {
            localStorage.setItem('devtools_push_enable', newstate);
            dispatchEvent(
                new Event(
                    newstate ? 'devtools-push-enable' : 'devtools-push-disable',
                ),
            );
        },
    },
    methods: {
        clear_cache() {
            caches.keys().then(cacheNames => {
                cacheNames.forEach(cacheName => {
                    caches.delete(cacheName);
                    console.log(`Cache ${cacheName} cleared`);
                });
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
    },
};
</script>
