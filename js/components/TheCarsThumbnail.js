export default {
    name: "TheCarsThumb",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },
    data() {
        return {
            details: "VIEW DETAILS",
        };
    },
    template: `
    <li @click="loadLBData" class="thumbnails__section">
        <img class="image" :src='"images/" + hero.biopic' v-bind:alt="hero.name">        
        <h3>{{hero.name}}</h3>
        <p >{{details}}</p>
        <img class="arrow-down" src="images/arrow-down.svg" alt="" width="30" ref="arrowdown"/>
    </li>
    `,

    methods: {
        loadLBData() {
            document
                .querySelectorAll(".arrow-down")
                .forEach((arrow) => arrow.classList.remove("rotate"));
            this.$emit("loadlbdata", this.hero);
            this.$refs.arrowdown.classList.add("rotate");
        },
    },
};
