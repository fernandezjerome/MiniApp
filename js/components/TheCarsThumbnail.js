export default {
    name: "TheCarsThumb",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },

    template: `
    <li @click="loadLBData" class="thumbnails__section">
        <img class="image" :src='"images/" + hero.biopic' alt="">        
        <h3>{{hero.name}}</h3>
        <p>VIEW DETIALS</p>
        <img  src="images/arrow-down.svg" alt="" width="30" />
    </li>
    `,

    methods: {
        loadLBData() {
            this.$emit("loadlbdata", this.hero);
        },
    },
};
