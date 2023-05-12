export default {
    namespaced: true,
    state: {
        shipments: [
            { // grn's
                id: 1,
                date: '14/06',
                text: 'Shipment receive',
                cid: '45673357',
                roll: '80',
                stock: '800',
                grns: [
                    {
                        id: 1,
                        img: "img/icons/f1.jpg",
                        name: 'Cheese fabric',
                        qty: {
                            roll: {
                                    actual: '80',
                                    defined: '80'
                                },
                            bundles: 
                                {
                                    actual: '100',
                                    defined: '100'
                                },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                    {
                        id: 2,
                        img: "img/icons/f1.jpg",
                        name: 'Cheese fabric',
                        qty: {
                            roll: {
                                    actual: '90',
                                    defined: '90'
                                },
                            bundles: 
                                {
                                    actual: '',
                                    defined: ''
                                },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                ]
            },
            { // grn's
                id: 2,
                date: '14/06',
                text: 'Shipment receive',
                cid: '45673357',
                roll: '80',
                stock: '800',
                grns: [
                    {
                        id: 1,
                        img: "img/icons/f1.jpg",
                        name: 'Cheese fabric',
                        qty: {
                            roll: {
                                    actual: '80',
                                    defined: ''
                                },
                            bundles: 
                                {
                                    actual: '80',
                                    defined: ''
                                },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                ]
            },
        ]
        
    },
    getters: {
        getShipments(state) {
            return state.shipments;
        },
        getGrns: (state) => (data) => {
            let shipment = state.shipments.find(shipment => shipment.id == data.shipmentId);
            if (!shipment) return null;
            return shipment.grns;
        },
        
        // getGodown: (state) => (godownId) => {
        //     let index = state.godowns.findIndex(godown => godown.id == godownId);
        //     return state.godowns[index];
        // },
        // getFabric: (state) => (data) => {
        //     let rack = state.racks.find(rack => rack.id == data.rackId);
        //     if (!rack) return null;
        //     let fabric = rack.fabric.find(fabric => fabric.id == data.fabricId);
        //     console.warn(fabric)
        //     return fabric;
        // },
    },
    mutations: {
        saveRacking(state, data) {
            let shipmentIndex = state.shipments.find(shipment => shipment.id == data.shipmentId);
            if (!shipmentIndex) return null;
            let grnIndex = state.shipments[shipmentIndex].grns.find(grn => grn.id == data.grnId);
            if (!grnIndex) return null;
            state.shipments[shipmentIndex].grns[grnIndex].addresses.push(data.data);
          },

        //   saveRacking(state, data) {
        //     let myElem = array.find(item => item.id === id);
        //     if (myElem) {
        //       myElem.exampleBoolean = true
        //     }
        //   }
    },
    actions: {
        saveRacking({commit}, data){
            commit('saveRacking', data)
        }

    }
};
