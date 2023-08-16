<template>
    <div class="importSwagger" style="width: 80%; margin: 10px auto; text-align: center">
        <div id="swagger-ui"></div>
    </div>
</template>
<script>
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';
export default {
    name: 'ImportSwagger',
    data() {
        return {};
    },
    created() {},
    mounted() {
        const ui = SwaggerUIBundle({
            //url: "https://petstore.swagger.io/v2/swagger.json",
            url: '/swagger.json',
            dom_id: '#swagger-ui',
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
            layout: 'StandaloneLayout',
        });
    },
};
</script>
<style>
@import '../../public/style/swagger-ui.css';
</style>
