export default {
    name: "TheLightboxComponent",

    props: ["item"],

    emits: ["closelightbox"],

    template: `
    <section class="lightbox">
 
        <img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">
                   <h2 class="hidden">Mini cooper details</h2>
                <div class="lightbox__section">
                    <div class="lightbox__main">
                        <img src="/images/cooper.png" alt="" />
                        <h3>2023 MINI JOHN COOPER WORKS CONVERTIBLE</h3>
                        <p>All-Inclusive Price: $57,856</p>
                        <div>
                            <button class="green-buttons">
                                BOOK A TEST DRIVE
                            </button>
                            <button class="green-buttons">
                                DESIGN YOUR OWN
                            </button>
                        </div>
                    </div>
                    <div class="lightbox__computation">
                        <div class="lightbox__lease">
                            <h4>LEASE</h4>
                            <div class="lightbox__grayBG">
                                <p>Rate Starting from</p>
                                <h5>5.99%</h5>
                                <p>48 Months</p>
                            </div>
                            <p>Monthly Payment starting from</p>
                            <h5>$700</h5>
                            <p>Incl. Freight PDI</p>
                        </div>
                        <div class="lightbox__finance">
                            <h4>LEASE</h4>
                            <div class="lightbox__grayBG">
                                <p>Rate Starting from</p>
                                <h5>5.99%</h5>
                                <p>48 Months</p>
                            </div>
                            <p>Monthly Payment starting from</p>
                            <h5>$700</h5>
                            <p>Incl. Freight PDI</p>
                        </div>
                    </div>
                </div>

      
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit("closelightbox");
        },
    },
};
