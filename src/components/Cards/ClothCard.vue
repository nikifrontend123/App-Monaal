<template>
    <div v-if="design === 1" class="">
        <div v-for="(chat, index) in chatss" :key="index" class=" py-2 border-top container w-100" @click="showChat(chat)">
            <div class="d-flex justify-content-between">

                <div class="d-flex my-2">
                    <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${chat.imgD}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                    <div class="ms-2 align-items-center text-dark" style="font-size: 13px;">
                        <p class=" m-0 fs-5">{{ chat.name }}</p>
                        <p class=" m-0">MOQ: {{ chat.moq }} mtr | ₹ {{ chat.price }}/mtr</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="btn btn-warning">Courier</div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="design === 2" class="">
        <div class="row w-100 container mt-2">
            <div v-for="(chat, index) in chatss" :key="index" class="col-6 col-md-4 col-xl-3 mb-2" @click="showChat(chat)">
                <!-- <RouterLink to="/DetailPage" style="text-decoration: none;"> -->
                <div class="d-flex justify-content-center align-items-center ">
                    <div class=" d-flex my-2 ">
                        <div class=" ">
                            <img :src="`${publicPath}${chat.imgD}`" width="150">
                        </div>
                    </div>
                </div>
                <!-- </RouterLink> -->
            </div>
        </div>
    </div>
    <div v-if="design === 3" id="boxes">
        <div v-for="(chat, index) in chatss" :key="index" class="container" @click="showChat(chat)">
            <div class="my-2">
                <div class="border p-1" style="width: 160px; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                    <div class="d-flex justify-content-center ">
                        <img style="width: 100%;" :src="`${publicPath}${chat.imgD}`">
                    </div>
                    <div class="text-dark w-100  text-center">
                        <p class=" m-0 ps-2  fw-bold">{{ chat.name }}</p>
                    </div>
                    <div class="text-dark w-100  text-center">
                        <span style="font-size: 12px;" class="fw-bold">{{ chat.moq }} / </span>
                        <span style="font-size: 12px;" class="fw-bold">{{ chat.price }}</span>
                    </div>
                    <div class="text-dark w-100  text-center">
                    </div>
                    <div class="d-flex justify-content-evenly my-2">
                        <!-- <div class="btn btn-success">Approve</div> -->
                        <div class="btn btn-warning">Courier</div>
                        <!-- <div class="btn btn-danger">Reject</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Object.entries(activeChat).length" class="offcanvas offcanvas-start show" tabindex="-1">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExample25Label">Offcanvas</h5>
            <button type="button" class="btn-close" @click="hideChat" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <div class="container">
                    <img :src="`${publicPath}${activeChat.imgD}`" alt="" class="w-100">
                </div>
                <div class="text-center">
                    <p>{{ activeChat.name }}</p>
                    <p>{{ activeChat.tag }}</p>
                </div>
                <div class="form container">
                    <table class="table w-100">
                        <tbody class="">
                            <tr>
                                <th scope="row">Name</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.name">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td class="">
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="'₹ ' + activeChat.price + '/mtr'">
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">MOQ</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.moq + ' mtr'">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Length</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.length">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Width</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.width + ' mtr'">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">GSM</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.gsm">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Color</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.color">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Design</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.design">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Construction</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.construction">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Processes</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.processes">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Discription</th>
                                <td>
                                    <input type="text"  class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.discription">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-evenly mt-2">
                    <div class="btn btn-success">Update</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClothCard',
    props: ['chatss', 'design'],
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        chats() {
            return this.$store.getters.getChats
        },
        activeChat() {
            return this.$store.getters.getChat;
        },
    },
    methods: {
        showChat(chat) {
            return this.$store.dispatch('selectChat', chat);
        },
        hideChat() {
            return this.$store.dispatch('hideChat');
        }
    }
}
</script>

<style  scoped>
#boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media only screen and (min-width: 601px) {
    #boxes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
}
</style>