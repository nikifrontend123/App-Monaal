import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/Dashboard/DashBoard.vue"
import PurchasesPage from "../views/PurchasesPage.vue"
import StorePage from "../views/StorePage.vue"
import StoreGrn from "../components/StoreDetail/StoreGrn.vue"
import StoreQc from "../components/StoreDetail/StoreQc.vue"
import StoreRacking from "../components/StoreDetail/StoreRacking.vue"
import StoreGdn from "../components/StoreDetail/StoreGdn.vue"
import StoreHistory from "../components/StoreDetail/StoreHistory.vue"
import SalesPage from "../views/SalesPage.vue"
import BillsPage from "../views/BillsPage.vue"
import SupplierPage from "../views/SupplierPage.vue"
import NewPage from "../components/Details/NewPage.vue"
import SamplePage from "../components/Details/SamplePage.vue"
import PoPage from "../components/Details/PoPage.vue"
import LrPage from "../components/Details/LrPage.vue"
import BillPage from "../components/Details/BillPage.vue"
import DetailPage from "../components/Details/DetailPage.vue"
import SampleDetailPage from "../components/Details/SampleDetailPage.vue"
import PoDetailPage from "../components/Details/PoDetailPage.vue"
import LrDetailPage from "../components/Details/LrDetailPage.vue"
import ProfileDetail from "../components/Profile/ProfileDetail.vue"
import SupplierFabric from "../components/SupplierDetail/SupplierFabric.vue"
import SupplierSample from "../components/SupplierDetail/SupplierSample.vue"
import SupplierPo from "../components/SupplierDetail/SupplierPo.vue"
import SupplierShipment from "../components/SupplierDetail/SupplierShipment.vue"
import SupplierBill from "../components/SupplierDetail/SupplierBill.vue"
import NewCard from "../components/Cards/NewCard.vue"
import GodownList from "../views/GodownList.vue"
import RackItemBundles from "../views/RackItemBundles.vue"
import RackItemList from "../components/StoreDetail/StoreGowdown/RackItemList.vue"
import StoreKeeper from "../views/StoreKeeper.vue"
import SkGdn from "../components/StoreKeeper/SkGdn.vue"
import SkGrn from "../components/StoreKeeper/SkGrn.vue"
import GrnDetail from "../components/StoreKeeper/GrnDetail.vue"
import RackIn from "../components/StoreKeeper/RackIn.vue"
import ManageDetail from "../components/StoreKeeper/ManageDetail.vue"
import GdnDetail from "../components/StoreKeeper/GdnDetail.vue"
import RackOut from "../components/StoreKeeper/RackOut.vue"
import GdnManageDetail from "../components/StoreKeeper/GdnManageDetail.vue"
import QcPage from "../views/QcPage.vue"
import QcPassed from "../components/QC/QcPassed.vue"
import QcFailed from "../components/QC/QcFailed.vue"
import GateKeeper from "../views/GateKeeper.vue"
import ReceiptsPage from "../components/GateKeeper/ReceiptsPage.vue"
import DeliveriesPage from "../components/GateKeeper/DeliveriesPage.vue"
import StoreSearch from "../components/StoreDetail/StoreSearch.vue"
import SalePurchasePage from "../components/Sales/SalePurchasePage.vue"
import SaleSalesPage from "../components/Sales/SaleSalesPage.vue"
import SupplierPurchase from "../components/SupplierDetail/SupplierPurchase.vue"
import SupplierSale from "../components/SupplierDetail/SupplierSale.vue"
import PurchaseP from "../components/Details/PurchaseP.vue"
import PurchaseS from "../components/Details/PurchaseS.vue"
import QcDetail from "../components/StoreKeeper/QcDetail.vue"
import NewFabric from "../components/AddFabric/NewFabric.vue"


const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/NewPage",
    name: "NewPage",
    component: NewPage,
  },
  {
    path: "/SamplePage",
    name: "SamplePage",
    component: SamplePage,
  },
  {
    path: "/PoPage",
    name: "PoPage",
    component: PoPage,
  },
  {
    path: "/LrPage",
    name: "LrPage",
    component: LrPage,
  },
  {
    path: "/BillPage",
    name: "BillPage",
    component: BillPage,
  },
  {
    path: "/ProfileDetail",
    name: "ProfileDetail",
    component: ProfileDetail,
  },
  {
    path: "/DetailPage",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/SampleDetailPage",
    name: "SampleDetailPage",
    component: SampleDetailPage,
  },
  {
    path: "/PoDetailPage",
    name: "PoDetailPage",
    component: PoDetailPage,
  },
  {
    path: "/LrDetailPage",
    name: "LrDetailPage",
    component: LrDetailPage,
  },
  {
    path: "/PurchasesPage",
    name: "PurchasesPage",
    component: PurchasesPage,
  },
  {
    path: "/StorePage",
    name: "StorePage",
    component: StorePage,
  },
  {
    path: "/SalesPage",
    name: "SalesPage",
    component: SalesPage,
  },
  {
    path: "/BillsPage",
    name: "BillsPage",
    component: BillsPage,
  },
  {
    path: "/StoreGrn",
    name: "StoreGrn",
    component: StoreGrn,
  },
  {
    path: "/StoreQc",
    name: "StoreQc",
    component: StoreQc,
  },
  {
    path: "/StoreGdn",
    name: "StoreGdn",
    component: StoreGdn,
  },
  {
    path: "/StoreHistory",
    name: "StoreHistory",
    component: StoreHistory,
  },
  {
    path: "/StoreRacking",
    name: "StoreRacking",
    component: StoreRacking,
  },
  {
    path: "/SupplierPage",
    name: "SupplierPage",
    component: SupplierPage,
  },
  {
    path: "/SupplierFabric",
    name: "SupplierFabric",
    component: SupplierFabric,
  },
  {
    path: "/SupplierSample",
    name: "SupplierSample",
    component: SupplierSample,
  },
  {
    path: "/SupplierPo",
    name: "SupplierPo",
    component: SupplierPo,
  },
  {
    path: "/SupplierShipment",
    name: "SupplierShipment",
    component: SupplierShipment,
  },
  {
    path: "/SupplierBill",
    name: "SupplierBill",
    component: SupplierBill,
  },
  {
    path: "/NewCard",
    name: "NewCard",
    component: NewCard,
  },
  {
    path: "/GodownList/:godownId",
    name: "GodownList",
    component: GodownList,
  },
  {
    path: "/RackItemBundles/:godownId/:rackId",
    name: "RackItemBundles",
    component: RackItemBundles,
  },
  {
    path: "/RackItemList",
    name: "RackItemList",
    component: RackItemList,
  },
  {
    path: "/StoreKeeper",
    name: "StoreKeeper",
    component: StoreKeeper,
  },
  {
    path: "/SkGdn",
    name: "SkGdn",
    component: SkGdn,
  },
  {
    path: "/SkGrn",
    name: "SkGrn",
    component: SkGrn,
  },
  {
    path: "/GrnDetail/:shipmentId",
    name: "GrnDetail",
    component: GrnDetail,
  },
  {
    path: "/QcDetail/:shipmentId",
    name: "QcDetail",
    component: QcDetail,
  },
  {
    path: "/RackIn/:shipmentId",
    name: "RackIn",
    component: RackIn,
  },
  {
    path: "/ManageDetail",
    name: "ManageDetail",
    component: ManageDetail,
  },
  {
    path: "/GdnDetail",
    name: "GdnDetail",
    component: GdnDetail,
  },
  {
    path: "/RackOut",
    name: "RackOut",
    component: RackOut,
  },
  {
    path: "/GdnManageDetail",
    name: "GdnManageDetail",
    component: GdnManageDetail,
  },
  {
    path: "/QcPage",
    name: "QcPage",
    component: QcPage,
  },
  
  {
    path: "/QcPassed",
    name: "QcPassed",
    component: QcPassed,
  },
  {
    path: "/QcFailed",
    name: "QcFailed",
    component: QcFailed,
  },
  {
    path: "/GateKeeper",
    name: "GateKeeper",
    component: GateKeeper,
  },
  {
    path: "/ReceiptsPage",
    name: "ReceiptsPage",
    component: ReceiptsPage,
  },
  {
    path: "/DeliveriesPage",
    name: "DeliveriesPage",
    component: DeliveriesPage,
  },
  {
    path: "/StoreSearch",
    name: "StoreSearch",
    component: StoreSearch,
  },
  {
    path: "/SalePurchasePage",
    name: "SalePurchasePage",
    component: SalePurchasePage,
  },
  {
    path: "/SaleSalesPage",
    name: "SaleSalesPage",
    component: SaleSalesPage,
  },
  {
    path: "/SupplierPurchase",
    name: "SupplierPurchase",
    component: SupplierPurchase,
  },
  {
    path: "/SupplierSale",
    name: "SupplierSale",
    component: SupplierSale,
  },
  {
    path: "/PurchaseP",
    name: "PurchaseP",
    component: PurchaseP,
  },
  {
    path: "/PurchaseS",
    name: "PurchaseS",
    component: PurchaseS,
  },
  {
    path: "/NewFabric",
    name: "NewFabric",
    component: NewFabric,
  },
  


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
