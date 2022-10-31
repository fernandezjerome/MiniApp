const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue!",
        };
    },
    methods: {
        ChangeTheMsg() {
            this.message = "okey msg is working";
        },
    },
}).mount("#app");
