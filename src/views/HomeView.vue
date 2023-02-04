<template>
    <div>
        <h1>Настройки уведомлений</h1>
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
};
</script>
