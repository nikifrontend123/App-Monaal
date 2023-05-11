<template>
    <div>
        <div class="d-flex justify-content-between px-2">
            <RouterLink to="/SkGdn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center border-bottom py-2">Outward</h4>
            <div class=""></div>
        </div>
        <GdnLink active="GdnManageDetail"></GdnLink>
        <div class="row">
            <div class="col-4">
                <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link" href="#item-1">G-1</a>
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link ms-3 my-1" href="#item-1-1">R-008</a>
                            <a class="nav-link ms-3 my-1" href="#item-1-2">R-012</a>
                            <a class="nav-link ms-3 my-1" href="#item-1-3">R-025</a>
                        </nav>
                        <a class="nav-link" href="#item-2">G-2</a>
                        <a class="nav-link" href="#item-3">G-3</a>
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link ms-3 my-1" href="#item-3-1">R-001</a>
                            <a class="nav-link ms-3 my-1" href="#item-3-2">R-025</a>
                            <a class="nav-link ms-3 my-1" href="#item-3-3">R-002</a>
                        </nav>
                    </nav>
                </nav>
            </div>

            <div class="col-8">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                    class="scrollspy-example-2" tabindex="0">
                    <div id="item-1">
                        
                    </div>
                    <div id="item-1-1">
                        <h5>G1-1</h5>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
                            the appropriate navigation link is highlighted. It's repeated throughout the component example.
                            We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    </div>
                    <div id="item-1-2">
                        <h5>G1-2</h5>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
                            the appropriate navigation link is highlighted. It's repeated throughout the component example.
                            We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    </div>
                    <div id="item-1-3">
                        <h5>G1-3</h5>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
                            the appropriate navigation link is highlighted. It's repeated throughout the component example.
                            We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    </div>
                    <div id="item-2">
                        <h4>Item 2</h4>
                        <p>...</p>
                    </div>
                    <div id="item-3">
                        <h4>Item 3</h4>
                        <p>...</p>
                    </div>
                    <div id="item-3-1">
                        <h5>Item 3-1</h5>
                        <p>...</p>
                    </div>
                    <div id="item-3-2">
                        <h5>Item 3-2</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GdnLink from '../Navbar/GdnLink.vue';

export default {
    components: { GdnLink }
}
</script>

<style lang="scss" scoped></style>