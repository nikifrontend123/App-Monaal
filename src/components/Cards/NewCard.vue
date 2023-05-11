<template>
    <div>
        <div class="bg-danger text-white">
            {{ getTotalAmnt }}
        </div>
        <div class="bg-info text-white">
            {{ getTotalAmnt * gst }}
        </div>
        <div class="bg-danger text-white">
            {{ Math.ceil(getTotalAmnt + (getTotalAmnt * gst)) }}
        </div>
        <ul class="list-group">
            <li v-for="(chat, index) in chats" :key="index" class="list-group-item">
                <p>{{ chat.name }}</p>
                <input type="text" placeholder="rate" v-model="values.rate[index]">
                <input type="text" placeholder="qty" v-model="values.qty[index]">
                <div class="">
                    {{ values.rate[index] * values.qty[index] }}
                </div>
            </li>
        </ul>

        <div v-if="Object.entries(activeChat).length" class="offcanvas offcanvas-start show" tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExample25Label">Offcanvas</h5>
                <button type="button" class="btn-close" @click="hideChat" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>{{ activeChat.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewCard',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            gst: .18,
            values: {
                rate: [],
                qty: [],
            }
        }
    },
    computed: {
        getTotalAmnt(){
            let x= 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                const element = this.values.rate[index] * this.values.qty[index];
                x = x + element;
            }
            return x;
        },
        getTotalRate(){
            let x= 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                x = x + parseInt(this.values.rate[index]);
               
            }
            return x;
        },
        getTotalQty(){
            let x= 0;
            for (let index = 0; index < Object.keys(this.values.qty).length; index++) {
                x = x + parseInt(this.values.qty[index]);
            }
            return x;
        },
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