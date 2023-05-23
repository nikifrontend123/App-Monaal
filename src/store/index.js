import { createStore } from "vuex";
import mystore from "./mystore";
import myshipment from "./myshipment";

export default createStore({
  state: {
    readys: [
      {
        id: 1,
        name: "02-26-23636",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 2,
        name: "02-26-23636",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 3,
        name: "02-26-23636",
        num: "300",
        num1: "1000",
        num2: "300",
      },
    ],
    fabs: [
      {
        id: 1,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 2,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 3,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
    ],
    chats: [
      {
        id: 1,
        imgDp: "img/icons/fab1.png",
        name: "Himanshu Bakshi",
      },
      {
        id: 2,
        imgDp: "img/icons/fab2.png",
        name: "Suashish",
      },
      {
        id: 3,
        imgDp: "img/icons/fab3.png",
        name: "Prince Jain",
      },
      {
        id: 4,
        imgDp: "img/icons/fab1.png",
        name: "Himanshu Bakshi",
      },
      {
        id: 5,
        imgDp: "img/icons/fab2.png",
        name: "Suashish",
      },
    ],
    activeChat: {},
    stores: [
      {
        id: 1,
        imgDp: "img/icons/f1.jpg",
        name: "Cheese Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 2,
        imgDp: "img/icons/f2.png",
        name: "Crepe Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 3,
        imgDp: "img/icons/f3.jpg",
        name: "Chiffon Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 4,
        imgDp: "img/icons/f4.jpg",
        name: "Geogette Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 5,
        imgDp: "img/icons/f5.jpg",
        name: "Cotton Fabric",
        add: 'G1-54A, G1-05A'
      },
    ],
    supchats: [
      {
        id: 1,
        imgDp: "img/icons/fab1.png",
        name: "Himanshu Bakshi",
      },
      {
        id: 2,
        imgDp: "img/icons/fab2.png",
        name: "Suashish",
      },
      {
        id: 3,
        imgDp: "img/icons/fab3.png",
        name: "Prince Jain",
      },
      {
        id: 4,
        imgDp: "img/icons/fab1.png",
        name: "Himanshu Bakshi",
      },
      {
        id: 5,
        imgDp: "img/icons/fab2.png",
        name: "Suashish",
      },
    ],
    chatss: [
      {
        id: 1,
        imgD: "img/icons/fb3.png",
        name: "Cotton Duck",
        btn: "Requested",
        btncolor: "btn-success",
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f1.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "80",
        moq: "5000",
        length: "",
        width: "2.5",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 2,
        imgD: "img/icons/fb2.png",
        name: "Crepe Fabric",
        price: "499",
        moq: "10,000",
      },
      {
        id: 3,
        imgD: "img/icons/fb1.png",
        name: "chiffon Fabric",
        price: "499",
        moq: "10,000 ",
      },
      {
        id: 4,
        imgD: "img/icons/fb4.png",
        name: "Georgette Fabric",
        price: "499",
        moq: "10,000",
      },
      {
        id: 5,
        imgD: "img/icons/fb1.png",
        name: "Cotton Duck",
        price: "499",
        moq: "10,000",
      },
      {
        id: 6,
        imgD: "img/icons/fb2.png",
        name: "Poplin Fabric",
        price: "499",
        moq: "10,000",
      },
    ],
    samples: [
      {
        id: 1,
        name: "Cheese Fabric",
        text: 'Sample Courier Requested',
        textcolor: 'text-warning',
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f1.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 2,
        name: "Cheese Fabric",
        text: 'Sample Dispatched',
        textcolor: 'text-success',
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f2.png",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 3,
        name: "Cheese Fabric",
        text: 'Sample Courier Requested',
        textcolor: 'text-warning',
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f3.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 4,
        name: "Cheese Fabric",
        text: 'Sample Dispatched',
        textcolor: 'text-success',
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f4.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },

    ],
    activeSample: {},
    supsamples: [
      {
        id: 1,
        name: "Cheese Fabric",
        btn: "Requested",
        btncolor: "btn-success",
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f1.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 2,
        name: "Cheese Fabric",
        btn: "Dispatch",
        btncolor: "btn-warning",
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f2.png",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 3,
        name: "Cheese Fabric",
        btn: "Requested",
        btncolor: "btn-success",
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f3.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },
      {
        id: 4,
        name: "Cheese Fabric",
        btn: "Resend",
        btncolor: "btn-danger",
        ariving: "Today",
        cid: "16598563",
        img: "img/icons/f4.jpg",
        tag: "SO/1008 {02042023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        discription: "",
      },

    ],
    activeSupsample: {},
    pos: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        textcolor: "text-success",
        text: "Accepted",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 2,
        img: "img/icons/f1.jpg",
        textcolor: "text-info",
        text: "Updated",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 3,
        img: "img/icons/f1.jpg",
        textcolor: "text-danger",
        text: "Rejected",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        textcolor: "text-success",
        text: "Accepted",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },


    ],
    activePo: {},
    suppos: [
      {
        id: 1,
        img: "img/icons/fb1.png",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: 80,
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 2,
        img: "img/icons/fb2.png",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 3,
        img: "img/icons/fb3.png",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 4,
        img: "img/icons/fb4.png",
        name: "Cheese Fabric",
        qty: "10,000 mtr",
        amt: "Rs 15,80,000",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },


    ],
    activeSuppo: {},
    supbills: [
      {
        id: 1,
        date: '17/6',
        text: 'Shipment Arriving 13 May',
        text1: 'Pending',
        txtcolor: 'text-danger',
        invoice: 12511255,
        cid: 15982355,
        img: 'img/icons/fab2.png',
        name: 'Himanshu Bakshi'
      },
      {
        id: 2,
        date: '17/8',
        text: 'Shipment Arriving 13 May',
        text1: 'Paid',
        txtcolor: 'text-success',
        invoice: 12511255,
        cid: 15982355,
      },
    ],
    activeSupbill: {},
    lrs: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        tag: "SO/1008 {02042023 & 18:30}",
        ariving: "Today",
        cid: "16598563",
        tagid: "PO/1008 {25/04/2023 & 18:30}",
        courierid: "{25/04/2023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 2,
        img: "img/icons/f3.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
      },
      {
        id: 3,
        img: "img/icons/f4.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
      },
      {
        id: 4,
        img: "img/icons/f5.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
      },
      {
        id: 5,
        img: "img/icons/f3.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
      },
      {
        id: 6,
        img: "img/icons/f1.jpg",
        qty: '10000',
        amt: '1580000',
        po: '4562562',
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
      },

    ],
    activeLr: {},
    supshipments: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: "Cheese Fabric",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'In-Transit',
        textcolor: 'text-danger',
        tag: "SO/1008 {02042023 & 18:30}",
        ariving: "Today",
        cid: "16598563",
        tagid: "PO/1008 {25/04/2023 & 18:30}",
        courierid: "{25/04/2023 & 18:30}",
        price: "Rs. 80/mtr",
        moq: "5000 Mtr",
        length: "",
        width: "2.5 Mtr",
        gsm: "300",
        color: "White, Black, Custom",
        design: "Same as Image",
        construction: "8s X 6s",
        processes: "Print",
        Discription: "",
      },
      {
        id: 2,
        img: "img/icons/f3.jpg",
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'In-Transit',
        textcolor: 'text-danger'
      },
      {
        id: 3,
        img: "img/icons/f4.jpg",
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'QC',
        textcolor: 'text-success'
      },
      {
        id: 4,
        img: "img/icons/f5.jpg",
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'Delievered',
        textcolor: 'text-warning'
      },
      {
        id: 5,
        img: "img/icons/f3.jpg",
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'QC',
        textcolor: 'text-success'
      },
      {
        id: 6,
        img: "img/icons/f1.jpg",
        name: "Cheese Fabric",
        ariving: "Today",
        cid: "16598563",
        invoice: '1561023156',
        shipmentID: '45259865',
        text:'Billed',
        textcolor: 'text-info'
      },

    ],
    activeSupshipment: {},
    storegrns: [
      {
        id: 1,
        img: "img/icons/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
      },
      {
        id: 2,
        img: "img/icons/fab2.png",
        name: "Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 3,
        img: "img/icons/fab3.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 4,
        img: "img/icons/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 5,
        img: "img/icons/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
    ],
    storeqcs: [
      {
        id: 1,
        img: "img/icons/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
      {
        id: 2,
        img: "img/icons/fab2.png",
        name: "Fabricator Imran",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-danger",
        icon: "bi bi-box-arrow-up-right"
      },
      {
        id: 3,
        img: "img/icons/fab3.png",
        name: " Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
      {
        id: 4,
        img: "img/icons/fab1.png",
        name: "Imran",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-danger",
        icon: "bi bi-box-arrow-up-right"
      },
      {
        id: 5,
        img: "img/icons/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
    ],
    storegdns: [
      {
        id: 1,
        img: "img/icons/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
      },
      {
        id: 2,
        img: "img/icons/fab2.png",
        name: "Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 3,
        img: "img/icons/fab3.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 4,
        img: "img/icons/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 5,
        img: "img/icons/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
    ],
    items: [
      {
        id: 1,
        color: 'bg-danger'
      },
      {
        id: 2,
        color: 'bg-warning'
      },
      {
        id: 3,
        color: 'bg-info'
      }
    ],
    grns: [
      {
        id: 1,
        date: '14/06',
        text: 'Shipment receive',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 2,
        date: '14/06',
        text: 'Shipment receive',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 3,
        date: '14/06',
        text: 'Shipment receive',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 4,
        date: '14/06',
        text: 'Shipment receive',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
    ],
    gdns: [
      {
        id: 1,
        img: "img/icons/fab1.png",
        name: 'Mayra Creation',
        oid: '45673357',
      },
      {
        id: 2,
        img: "img/icons/fab2.png",
        name: 'MD Asad',
        oid: '45673357',
      },
      {
        id: 3,
        img: "img/icons/fab3.png",
        name: 'Pride Apparels',
        oid: '45673357',
      },
      {
        id: 4,
        img: "img/icons/fab1.png",
        name: 'Manoj DJ',
        oid: '45673357',
      },
    ],
    grndetails: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        text: '80',
        text1: 'Roll',
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        text: '180',
        text1: 'Bundle',
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        text: '80',
        text1: 'Roll',
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        text: '180',
        text1: 'Roll',
      },
    ],
    rackins: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        text: 'Roll 80',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        text: 'Bundle 180',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        text: 'Roll 80',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        text: 'Roll 180',
        text1: 'G1-54A, G1-05A',
      },
    ],
    gdndetails: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        mtr: '10,000',
        pm: '150',
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        text: 'Bundle 0/180',
        mtr: '10,000',
        pm: '150',
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        text: 'Roll 0/80',
        mtr: '10,000',
        pm: '150',
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        text: 'Roll 0/180',
        mtr: '10,000',
        pm: '150',
      },
    ],
    rackouts: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        mtr: '80',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        mtr: '80',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        mtr: '80',
        text1: 'G1-54A, G1-05A',
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        mtr: '80',
        text1: 'G1-54A, G1-05A',
      },
    ],
    qcpasseds: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        roll: ' 80',
        add: 'G1-54A, G1-05A'
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        roll: ' 80',
        add: 'G1-54A, G1-05A'
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        roll: ' 80',
        add: 'G1-54A, G1-05A'
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        roll: ' 80',
        add: 'G1-54A, G1-05A'
      },
    ],
    qcfaileds: [
      {
        id: 1,
        img: "img/icons/f1.jpg",
        name: 'Cheese fabric',
        mtr: ' 1,800',
        bundle: '50'
      },
      {
        id: 2,
        img: "img/icons/f2.png",
        name: 'Crepe fabric',
        mtr: ' 2,800',
        bundle: '80'
      },
      {
        id: 3,
        img: "img/icons/f3.jpg",
        name: 'Chiffon fabric',
        mtr: ' 1,000',
        bundle: '5'
      },
      {
        id: 4,
        img: "img/icons/f1.jpg",
        name: 'Chiffon fabric',
        mtr: ' 5,800',
        bundle: '500'
      },
    ],
    receipts: [
      {
        id: 1,
        date: '14/06',
        text: 'Shipment receive',
        cid: '45673357',
        roll: '80',
        stock: '300'
      },
      {
        id: 2,
        date: '14/06',
        text: 'Shipment receive',
        cid: '121357',
        roll: '90',
        stock: '700'
      },
      {
        id: 3,
        date: '14/06',
        text: 'Shipment receive',
        cid: '98883357',
        roll: '99',
        stock: '4800'
      },
      {
        id: 4,
        date: '14/06',
        text: 'Shipment receive',
        cid: '3223133357',
        roll: '8900',
        stock: '880'
      },
      {
        id: 5,
        date: '14/06',
        text: 'Shipment receive',
        cid: '75983357',
        roll: '50',
        stock: '200'
      },
    ],
    active: {},
    deliveries: [
      {
        id: 1,
        date: '14/06',
        text: 'Shipment deliver',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 2,
        date: '14/06',
        text: 'Shipment deliver',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 3,
        date: '14/06',
        text: 'Shipment deliver',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 4,
        date: '14/06',
        text: 'Shipment deliver',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
      {
        id: 5,
        date: '14/06',
        text: 'Shipment deliver',
        cid: '45673357',
        roll: '80',
        stock: '800'
      },
    ],
    racks: [],
    detailbills: [
      {
        id: 1,
        date: '17/6',
        text: 'Shipment Arriving 13 May',
        text1: 'Pending',
        txtcolor: 'text-danger',
        invoice: 12511255,
        cid: 15982355,
        img: 'img/icons/fab2.png',
        name: 'Himanshu Bakshi'
      },
      {
        id: 2,
        date: '17/8',
        text: 'Shipment Arriving 13 May',
        text1: 'Paid',
        txtcolor: 'text-success',
        invoice: 12511255,
        cid: 15982355,
      },
    ],
    activeDetailbill: {},
  },

  getters: {
    getItems(state) {
      return state.items
    },
    getChats(state) {
      return state.chats;
    },
    getChat(state) {
      return state.activeChat;
    },
    getStores(state) {
      return state.stores;
    },
    getSupchats(state) {
      return state.supchats;
    },
    getChatss(state) {
      return state.chatss;
    },
    getReadys(state) {
      return state.readys;
    },
    getFabs(state) {
      return state.fabs;
    },
    getSamples(state) {
      return state.samples;
    },
    getSupsamples(state) {
      return state.supsamples;
    },
    getPos(state) {
      return state.pos;
    },
    getSuppos(state) {
      return state.suppos;
    },
    getSupshipments(state) {
      return state.supshipments;
    },
    getSample(state) {
      return state.activeSample;
    },
    getSupsample(state) {
      return state.activeSupsample;
    },
    getPo(state) {
      return state.activePo;
    },
    getSuppo(state) {
      return state.activeSuppo;
    },
    getLrs(state) {
      return state.lrs;
    },
    getLr(state) {
      return state.activeLr;
    },
    getSupshipment(state) {
      return state.activeSupshipment;
    },
    getStoregrn(state) {
      return state.storegrns;
    },
    getStoreqc(state) {
      return state.storeqcs;
    },
    getStoregdn(state) {
      return state.storegdns;
    },
    getGlist(state) {
      return state.glists
    },
    getGrns(state) {
      return state.grns
    },
    getGdns(state) {
      return state.gdns
    },
    getGrndetails(state) {
      return state.grndetails
    },
    getRackins(state) {
      return state.rackins
    },
    getGdndetails(state) {
      return state.gdndetails
    },
    getRackouts(state) {
      return state.rackouts
    },
    getQcpasseds(state) {
      return state.qcpasseds
    },
    getQcfaileds(state) {
      return state.qcfaileds
    },
    getReceipts(state) {
      return state.receipts
    },
    getReceipt(state) {
      return state.active;
    },
    getDeliveries(state) {
      return state.deliveries
    },
    getRackInfo: (state) => (rackId) => {
      let index = state.racks.findIndex(rack => rack.id == rackId);
      return state.racks[index];
    },
    getSupbills(state) {
      return state.supbills;
    },
    getSupbill(state) {
      return state.activeSupbill;
    },
    getDetailbills(state) {
      return state.detailbills;
    },
    getDetailbill(state) {
      return state.activeDetailbill;
    },
  },
  mutations: {
    selectSample(state, sample) {
      state.activeSample = sample;
    },
    hideSample(state) {
      state.activeSample = {};
    },
    selectChat(state, chat) {
      state.activeChat = chat;
    },
    hideChat(state) {
      state.activeChat = {};
    },
    selectPo(state, po) {
      state.activePo = po;
    },
    hidePo(state) {
      state.activePo = {};
    },
    selectSuppo(state, suppo) {
      state.activeSuppo = suppo;
    },
    hideSuppo(state) {
      state.activeSuppo = {};
    },
    selectLr(state, lr) {
      state.activeLr = lr;
    },
    hideLr(state) {
      state.activeLr = {};
    },
    selectSupshipment(state, supshipment) {
      state.activeSupshipment = supshipment;
    },
    hideSupshipment(state) {
      state.activeSupshipment = {};
    },
    selectSupsample(state, supsample) {
      state.activeSupsample = supsample;
    },
    hideSupsample(state) {
      state.activeSupsample = {};
    },
    selectData(state, data) {
      state.activeData = data;
    },
    saveRacking(state, data) {
      state.racks.push(data.data);
    },
    selectSupbill(state, supbill) {
      state.activeSupbill = supbill;
    },
    hideSupbill(state) {
      state.activeSupbill = {};
    },
    selectDetailbill(state, detailbill) {
      state.activeDetailbill = detailbill;
    },
    hideDetailbill(state) {
      state.activeDetailbill = {};
    },
  },
  actions: {
    selectSample({ commit }, sample) {
      commit("selectSample", sample);
    },
    hideSample({ commit }) {
      commit("hideSample");
    },
    selectChat({ commit }, chat) {
      commit("selectChat", chat);
    },
    hideChat({ commit }) {
      commit("hideChat");
    },
    selectPo({ commit }, po) {
      commit("selectPo", po);
    },
    hidePo({ commit }) {
      commit("hidePo");
    },
    selectSuppo({ commit }, suppo) {
      commit("selectSuppo", suppo);
    },
    hideSuppo({ commit }) {
      commit("hideSuppo");
    },
    selectLr({ commit }, lr) {
      commit("selectLr", lr);
    },
    hideLr({ commit }) {
      commit("hideLr");
    },
    selectSupshipment({ commit }, supshipment) {
      commit("selectSupshipment", supshipment);
    },
    hideSupshipment({ commit }) {
      commit("hideSupshipment");
    },
    selectSupsample({ commit }, supsample) {
      commit("selectSupsample", supsample);
    },
    hideSupsample({ commit }) {
      commit("hideSupsample");
    },
    selectData({ commit }, data) {
      commit('selectData', data)
    },
    saveRacking({ commit }, data) {
      commit('saveRacking', data)
    },
    selectSupbill({ commit }, supbill) {
      commit("selectSupbill", supbill);
    },
    hideSupbill({ commit }) {
      commit("hideSupbill");
    },
    selectDetailbill({ commit }, detailbill) {
      commit("selectDetailbill", detailbill);
    },
    hideDetailbill({ commit }) {
      commit("hideDetailbill");
    },
  },
  modules: {
    mystore: mystore,
    myshipment: myshipment,
  },
});
