<template>
    <div>
        <div class="container">
            <img src="../../assets/Pic.png" alt="" class="w-100">
        </div>
        <div class="text-center">
            <p>Cotton Duck</p>
            <p>SO/1008 {02042023 & 18:30}</p>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        Tracking Detail
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <StageStepper stage="2"></StageStepper>

                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Dispatch Details
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <p class="text-decoration-underline fw-bold">Cotton Duck</p>
                        <p class="fw-bold">PO/1008 {25/04/2023 & 18:30}</p>
                        <p class="fw-bold mb-0">Courier Id</p>
                        <p class="m-0">{25/04/2023 & 18:30}</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        Fabric Details
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div class="form container">
                            <p class="m-0 fw-bold">Name <Span class=" fw-light">Cottom Duck</Span></p>
                            <p class="m-0 fw-bold">Price <Span class=" fw-light">Rs. 80/mtr</Span></p>
                            <p class="m-0 fw-bold">MOQ <Span class=" fw-light">5000 Mtr</Span></p>
                            <p class="m-0 fw-bold">length <Span class=" fw-light"></Span></p>
                            <p class="m-0 fw-bold">Width <Span class=" fw-light">2.5 Mtr</Span></p>
                            <p class="m-0 fw-bold">GSM <Span class=" fw-light">300</Span></p>
                            <p class="m-0 fw-bold">Color <Span class=" fw-light">White, Black, Custom</Span></p>
                            <p class="m-0 fw-bold">Design <Span class=" fw-light">Same as Image</Span></p>
                            <p class="m-0 fw-bold">Construction <Span class=" fw-light">8s X 6s</Span></p>
                            <p class="m-0 fw-bold">Processes <Span class=" fw-light">Print</Span></p>
                            <p class="m-0 fw-bold">Discription <Span class=" fw-light">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Qui enim numquam temporibus reprehenderit asperiores,
                                    voluptatibus quas libero nisi quis quod!</Span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StageStepper from '../StageStepper.vue';

export default {
    components: { StageStepper }
}
</script>

<style lang="scss" scoped></style>