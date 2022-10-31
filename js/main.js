// all of your imports should be here
import ProfPanel from "./components/TheProfComponent.js";

(() => {
    // instantiate the vue instant here
    const { createApp } = Vue;

    createApp({
        // always get the remote data here,  in the created lifecycle hook, using fetch in the dataMiner
        created() {
            // fetch the json data and pass it to the Vue instance
            fetch("./data.json")
                .then((res) => res.json())
                .then((data) => {
                    // throw the data into vue instance
                    // the "this" keyword Always refers to the VUE Itself
                    this.dynamicData = data;
                })
                .catch((error) => console.error.apply(error));
        },
        data() {
            return {
                // message: "Hello Vue!",
                // profs: ["joe", "john", "justin", "trevor"],
                dynamicData: {},
                currentProf: {},
                role: {},
            };
        },

        methods: {
            showData(item) {
                this.currentProf = item.name;
                this.role = item.role;
            },
        },
        components: {
            profpanel: ProfPanel,
        },
    }).mount("#app");
})();
