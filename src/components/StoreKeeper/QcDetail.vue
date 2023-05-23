<template>
    <div>
        <div class="d-flex justify-content-between px-2 border-bottom ">
            <RouterLink to="/SkGrn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Quality Check</h4>
            <div class=""></div>
        </div>
        <GrnLink active="Qc" :shipmentId="this.$route.params.shipmentId"></GrnLink>
        <!-- <QcLinks active="QCPassed"></QcLinks> -->
        <div v-for="(grn, index) in grns" :key="index">
            <div class="d-flex justify-content-between container" @click="showmodal(grn)">
                <div class="d-flex">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${grn.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                    </div>
                    <div class="align-items-center text-dark ">
                        <p class=" m-0 ps-2  fw-bold">{{ grn.name }}</p>
                        <p class=" m-0 ps-2 ">PO Qty:{{ grn.po }} mtr</p>
                        <p class=" m-0 ps-2 ">QC Qty: {{ grn.qc }} mtr</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center  ">
                    <div class="px-1" style="font-size: 11px;">
                        <span class="fw-bold text-success">QC Pass: 100%</span>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="active.grn" class="offcanvas offcanvas-start show overflow-auto" tabindex="-1">
            <div class="py-2">
                <div class="modal-content ">
                    <div class="offcanvas-title border-bottom justify-content-end d-flex" id="offcanvasExample25Label">
                        <button type="button" class="btn-close " @click="hidemodal" aria-label="Close"></button>
                    </div>
                    <div class="mt-2">
                        <div class="d-flex my-2">
                            <div class="border border-2 border-dark rounded-circle">
                                <img :src="`${publicPath}${active.grn.img}`"
                                    style="width: 60px; height: 60px; border-radius: 50px;">
                            </div>
                            <div class=" align-items-center text-dark ">
                                <p class=" m-0 ps-2  fw-bold">{{ active.grn.name }}</p>
                                <div class="d-flex">
                                    <div class="ps-2" v-for="(qty, name) in active.grn.qty" :key="name"
                                        v-show="qty.actual !== ''">
                                        {{ name }}
                                        {{ qty.actual }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion mt-2" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Fabric Defects Test
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Weaving Defect Test
                                        </p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio1" id="btnradio1"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio1"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio1" id="btnradio2"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio2"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Hole Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio2" id="btnradio3"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio3"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio2" id="btnradio4"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio4"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Contamnation Test
                                        </p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio3" id="btnradio5"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio5"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio3" id="btnradio6"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio6"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Thick Slub Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio4" id="btnradio7"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio7"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio4" id="btnradio8"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio8"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Missing Yarn Test
                                        </p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio5" id="btnradio9"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio9"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio5" id="btnradio10"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio10"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Stain Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio6" id="btnradio11"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio11"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio6" id="btnradio12"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio12"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Dying Patch Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio7" id="btnradio13"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio13"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio7" id="btnradio14"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio14"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Layer Correction
                                            Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio8" id="btnradio15"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio15"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio8" id="btnradio16"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio16"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Miss Print Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio9" id="btnradio17"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio17"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio9" id="btnradio18"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio18"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Wrong Placement Test
                                        </p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio10" id="btnradio19"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio19"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio10" id="btnradio20"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio20"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Screen Out Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio11" id="btnradio21"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio21"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio11" id="btnradio22"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio22"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Blur Motif Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio12" id="btnradio23"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio23"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio12" id="btnradio24"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio24"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Overlabing Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio13" id="btnradio25"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio25"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio13" id="btnradio26"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio26"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Fabric Quality Test
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">GSM Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <input type="radio" class="btn-check" name="btnradio14" id="btnradio27"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio27"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio14" id="btnradio28"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio28"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Count Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <input type="radio" class="btn-check" name="btnradio15" id="btnradio29"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio29"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio15" id="btnradio30"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio30"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Construction</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <input type="radio" class="btn-check" name="btnradio16" id="btnradio31"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio31"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio16" id="btnradio32"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio32"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Width Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <input type="radio" class="btn-check" name="btnradio17" id="btnradio33"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio33"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio17" id="btnradio34"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio34"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Color Tone</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <input type="radio" class="btn-check" name="btnradio18" id="btnradio35"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio35"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio18" id="btnradio36"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio36"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Fabric Testing
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">CF Wet Rubbing Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio19" id="btnradio37"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio37"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio19" id="btnradio238"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio238"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Cf Dry Rubbing Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio20" id="btnradio39"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio39"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio20" id="btnradio40"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio40"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Cf Dry Cleaning Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio21" id="btnradio41"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio41"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio21" id="btnradio42"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio42"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">CF Washing Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio22" id="btnradio43"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio43"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio22" id="btnradio44"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio44"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">DS to Dry Cleaning Tone</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio23" id="btnradio45"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio45"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio23" id="btnradio46"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio46"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">DS to Washing Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio24" id="btnradio47"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio47"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio24" id="btnradio48"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio48"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Fabric Composition Test</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio25" id="btnradio49"
                                                autocomplete="off" checked>
                                            <label class="btn btn-outline-success" for="btnradio49"><i
                                                    class="bi bi-check2"></i></label>
                                            <input type="radio" class="btn-check" name="btnradio25" id="btnradio50"
                                                autocomplete="off">
                                            <label class="btn btn-outline-danger" for="btnradio50"><i
                                                    class="bi bi-x"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    QC Reporting
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Order Qty</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 60px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <span>mtr</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Received Qty</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 60px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <span>mtr</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Rejected Qty</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 50px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <span>mtr</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">Approved Qty</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 60px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <span>mtr</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-2">
                                        <p class="m-0 d-flex justify-content-center align-items-center">QC Passed %</p>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div class="mx-2" style="width: 60px;">
                                                <input class="form-control border-" type="text"
                                                    style="border: none; border-bottom: 1px solid black;">
                                            </div>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GrnLink from '../Navbar/GrnLink.vue';

export default {
    components: { GrnLink },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active: {},
        }
    },
    computed: {
        grns() {
            return this.$store.getters['myshipment/getGrns']({
                shipmentId: this.$route.params.shipmentId,
            })
        },
    },
    methods: {
        showmodal(grn) {
            this.active.grn = grn
        },
        hidemodal() {
            this.active.grn = null
        },
    }
}
</script>

<style scoped>
.form-control {
    border-radius: 0;;
}</style>