// import components first!!
import CarThumb from "./components/TheCarsThumbnail.js";
import LightBox from "./components/TheLightbox.js";

(() => {
    // create vue instance here
    const { createApp } = Vue;

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch("./scripts/json.php")
                .then((res) => res.json())
                .then((data) => (this.carData = data))
                .catch((error) => console.error(error));
        },

        data() {
            return {
                carData: {},
                lbData: {},
                showLB: false,
            };
        },

        components: {
            thecarsthumb: CarThumb,
            thelightbox: LightBox,
        },

        methods: {
            loadLightbox(hero) {
                this.lbData = hero;
                this.showLB = true;
            },
        },
    }).mount("#app");
})();
