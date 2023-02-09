<template>
    <div>
        <h1>Информация о пользователе</h1>
        <p>
            О-опс, кажется, вы еше не залогинились. Вернитесь в предыдущее меню.
        </p>
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
