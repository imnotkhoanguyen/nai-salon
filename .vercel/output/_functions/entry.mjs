import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_MaSQUTMT.mjs';
import { manifest } from './manifest_CeDjOqqB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/acrylic-nails.astro.mjs');
const _page3 = () => import('./pages/acrylic-nails-canton.astro.mjs');
const _page4 = () => import('./pages/api/book.astro.mjs');
const _page5 = () => import('./pages/blog/brittle-nails-solutions.astro.mjs');
const _page6 = () => import('./pages/blog/gel-vs-acrylic.astro.mjs');
const _page7 = () => import('./pages/blog/prepare-for-appointment.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/book.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/emergency-nail-services-canton.astro.mjs');
const _page12 = () => import('./pages/gel-nails.astro.mjs');
const _page13 = () => import('./pages/manicure-canton.astro.mjs');
const _page14 = () => import('./pages/manicure-services.astro.mjs');
const _page15 = () => import('./pages/nail-art.astro.mjs');
const _page16 = () => import('./pages/nail-extensions.astro.mjs');
const _page17 = () => import('./pages/pedicure-canton.astro.mjs');
const _page18 = () => import('./pages/pedicure-services.astro.mjs');
const _page19 = () => import('./pages/services.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/acrylic-nails.astro", _page2],
    ["src/pages/acrylic-nails-canton.astro", _page3],
    ["src/pages/api/book.ts", _page4],
    ["src/pages/blog/brittle-nails-solutions.astro", _page5],
    ["src/pages/blog/gel-vs-acrylic.astro", _page6],
    ["src/pages/blog/prepare-for-appointment.astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/book.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/emergency-nail-services-canton.astro", _page11],
    ["src/pages/gel-nails.astro", _page12],
    ["src/pages/manicure-canton.astro", _page13],
    ["src/pages/manicure-services.astro", _page14],
    ["src/pages/nail-art.astro", _page15],
    ["src/pages/nail-extensions.astro", _page16],
    ["src/pages/pedicure-canton.astro", _page17],
    ["src/pages/pedicure-services.astro", _page18],
    ["src/pages/services.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ed09eaa6-3271-450e-a183-799fc36ee1e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
