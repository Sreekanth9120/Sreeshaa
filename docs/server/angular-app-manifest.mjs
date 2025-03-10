
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sreesha/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sreesha"
  },
  {
    "renderMode": 2,
    "route": "/sreesha/examList"
  },
  {
    "renderMode": 2,
    "route": "/sreesha/techlearn"
  },
  {
    "renderMode": 2,
    "route": "/sreesha/bestproducts"
  },
  {
    "renderMode": 2,
    "route": "/sreesha/rrbGroupD"
  },
  {
    "renderMode": 2,
    "route": "/sreesha/rrbExam"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: '5330bd7095357a7e4f59710c6fa9465ba907440181584a5422c5e5b818e7eb37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '45eca276164f23c7763a7a10a83a98e14aee3d796e387c555daa458677214017', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'examList/index.html': {size: 6255, hash: '7fa11861241c0b1fc916b38f123f1cc499cff999f6dd5e99761d9408741d59d6', text: () => import('./assets-chunks/examList_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4835, hash: '285918c8af2a2ab5bc4c2b857cd4be897e5c800e15027526df1bed52c55fcb61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'rrbGroupD/index.html': {size: 8461, hash: '76d494bfb9d76f428d8cc971c26e64b5e9947e982bbc00b7e1a655d06792add7', text: () => import('./assets-chunks/rrbGroupD_index_html.mjs').then(m => m.default)},
    'rrbExam/index.html': {size: 34440, hash: 'e7111deca1fc95b2e815653c8f236175807b0de38eac4cfaed9a456dca363554', text: () => import('./assets-chunks/rrbExam_index_html.mjs').then(m => m.default)},
    'bestproducts/index.html': {size: 4028, hash: '398ccac476e845c8acb30da056c0e1a23aeed6d3d409bb59d7c463f05e59b9cb', text: () => import('./assets-chunks/bestproducts_index_html.mjs').then(m => m.default)},
    'techlearn/index.html': {size: 4047, hash: '512fbfe15a4bd1f909c92d97e4affa11b441e411a6a718598e0752fd6be4758d', text: () => import('./assets-chunks/techlearn_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
