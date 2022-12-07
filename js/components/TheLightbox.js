export default {
    name: "TheLightboxComponent",

    props: ["item"],

    emits: ["closelightbox"],

    template: `
    <section class="lightbox">
 
        
                   <h2 class="hidden">Mini cooper details</h2>
                <div @click="closeLB" class="lightbox__section">
                    <div class="lightbox__main">
                        
                        <img :src='"images/" + item.biopic' alt="">
                        <h3>{{ item.car_fullname}}</h3>
                        <p> All-Inclusive Price: {{item.price}}</p>
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
                                <h5>{{item.lease}}</h5>
                                <p>48 Months</p>
                            </div>
                            <p>Monthly Payment starting from</p>
                            <h5>{{item.lease_monthly}}</h5>
                            <p>Incl. Freight PDI</p>
                        </div>
                        <div class="lightbox__finance">
                            <h4>FINANCE</h4>
                            <div class="lightbox__grayBG">
                                <p>Rate Starting from</p>
                                <h5>{{item.finace}}</h5>
                                <p>48 Months</p>
                            </div>
                            <p>Monthly Payment starting from</p>
                            <h5>{{item.finance_monthly}}</h5>
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
