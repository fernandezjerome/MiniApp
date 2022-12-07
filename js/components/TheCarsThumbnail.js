export default {
    name: "TheCarsThumb",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },

    template: `
    <li @click="loadLBData">
        <img :src='"images/" + hero.biopic' alt="hero img">
        <!-- <div class="sprite" id="cap"></div> -->
        <div class="red-bumper"></div>
        <h3>{{hero.name}}</h3>
        
    </li>
    `,

    methods: {
        loadLBData() {
            this.$emit("loadlbdata", this.hero);
        },
    },
};
