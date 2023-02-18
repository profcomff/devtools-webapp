<template>
    <div>
        <h1>Информация о пользователе</h1>
        <p v-if="!data">Упс, кажется, вы еше не залогинились. Вернитесь в предыдущее меню.</p>
        <ul v-else>
            <li
                v-for="k in Object.keys(data)"
                :key="k"
            >
                <b>{{ k }}</b> – {{ data[k] }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        token: undefined,
        data: undefined,
    }),
    mounted() {
        let changeHeaderLayoutEvent = new CustomEvent('change-header-layout', {
            detail: {
                layoutName: 'back',
                text: 'О пользователе',
            },
        });
        document.dispatchEvent(changeHeaderLayoutEvent);

        this.token = localStorage.getItem('auth-token');
    },
    watch: {
        token(value) {
            fetch(`${process.env.VUE_APP_API_AUTH}/me?info=groups&info=indirect_groups`, {
                method: 'GET',
                cache: 'no-cache',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${value}`,
                },
            })
                .then(response => response.json())
                .then(response => {
                    this.data = response;
                });
        },
    },
};
</script>

<style></style>
