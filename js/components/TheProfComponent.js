export default {
    name: "TheProfComponent",

    props: ["item"],

    template: ` <section>
    
    
    
    <h1 class= "prof_name"> {{ name }}</h1>
    </section>
    `,

    data() {
        return {
            name: "some generic name",
        };
    },
};
