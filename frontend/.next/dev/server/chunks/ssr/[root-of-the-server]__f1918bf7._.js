module.exports = [
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import axios from 'axios';
// // whi is this does not work
// const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
//
//   getLikedDirectors: () => api.get('/api/user/liked-directors'),
//
//   getSearchHistory: (limit = 10) =>
//     api.get('/api/user/search-history', { params: { limit } }),
//
//   submitQuestionnaire: (data: any) =>
//     api.post('/api/user/questionnaire', data)
// };
//
// // Movies API
// export const moviesAPI = {
//   getMovie: async (id: string) => {
//     const { data } = await api.get(`/api/movies/${id}`);
//     return data.movie;
//   },
//   getById: (id: string, tmdbId?: number) =>
//     api.get(`/api/movies/${id}`, tmdbId ? { params: { tmdbId } } : {}),
//
//   search: (query: string, filters?: any) =>
//     api.get('/api/movies/search', { params: { q: query, ...filters } }),
//
//   getByGenres: (genres: string[]) =>
//     api.get('/api/movies/by-genres', { params: { genres: genres.join(',') } }),
//
//   getNew: (limit?: number) =>
//     api.get('/api/movies/new', { params: limit ? { limit } : {} }),
//
//   getPopular: (limit?: number) =>
//     api.get('/api/movies/popular', { params: limit ? { limit } : {} }),
//
//   trackClick: (id: string) => api.post(`/api/movies/${id}/click`)
// };
//
// // Likes API
// export const likesAPI = {
//   create: (targetType: string, targetId: string) =>
//     api.post('/api/likes', { targetType, targetId }),
//
//   delete: (likeId: string) => api.delete(`/api/likes/${likeId}`),
//
//   deleteByTarget: (targetType: string, targetId: string) =>
//     api.delete('/api/likes', { params: { targetType, targetId } }),
//
//   check: (items: { type: string; id: string }[]) =>
//     api.get('/api/likes/check', {
//       params: { items: JSON.stringify(items) }
//     })
// };
//
// // Actors API
// export const actorsAPI = {
//   getById: (id: string) => api.get(`/api/actors/${id}`),
//   search: (q: string) => api.get('/api/actors/search', { params: { q } })
// };
//
// // Directors API
// export const directorsAPI = {
//   getById: async (id: string) => {
//     const { data } = await api.get(`/api/directors/${id}`);
//     return data.director;
//   },
//   search: (q: string) => api.get('/api/directors/search', { params: { q } })
// };
//
// // Recommendations API
// export const recommendationsAPI = {
//   search: (query: string, userPreferences?: any) =>
//     api.post('/api/recommendations/search', { query, userPreferences }),
//
// export const getMovie = async (id: string) => {
//   const { data } = await apiClient.get(`/api/movies/${id}`);
//   return data.movie;
// };
__turbopack_context__.s([
    "actorsAPI",
    ()=>actorsAPI,
    "api",
    ()=>api,
    "authAPI",
    ()=>authAPI,
    "directorsAPI",
    ()=>directorsAPI,
    "likesAPI",
    ()=>likesAPI,
    "moviesAPI",
    ()=>moviesAPI,
    "recommendationsAPI",
    ()=>recommendationsAPI,
    "setAccessToken",
    ()=>setAccessToken,
    "userAPI",
    ()=>userAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:5001") || 'http://localhost:5001';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE,
    withCredentials: true
});
// ---------------- Access Token Handling ----------------
let accessToken = null;
const setAccessToken = (token)=>{
    accessToken = token;
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};
const userAPI = {
    getStats: ()=>api.get('/api/user/stats'),
    getLikedMovies: ()=>api.get('/api/user/liked-movies'),
    getLikedActors: ()=>api.get('/api/user/liked-actors'),
    getLikedDirectors: ()=>api.get('/api/user/liked-directors'),
    getSearchHistory: (limit = 10)=>api.get('/api/user/search-history', {
            params: {
                limit
            }
        }),
    submitQuestionnaire: (data)=>api.post('/api/user/questionnaire', data),
    getProfile: ()=>api.get('/api/user/profile'),
    updateProfile: (data)=>api.put('/api/user/profile', data)
};
const moviesAPI = {
    getMovie: async (id)=>{
        const { data } = await api.get(`/api/movies/${id}`);
        return data.movie;
    },
    getById: (id, tmdbId)=>api.get(`/api/movies/${id}`, tmdbId ? {
            params: {
                tmdbId
            }
        } : {}),
    search: (query, filters)=>api.get('/api/movies/search', {
            params: {
                q: query,
                ...filters
            }
        }),
    getByGenres: (genres)=>api.get('/api/movies/by-genres', {
            params: {
                genres: genres.join(',')
            }
        }),
    getNew: (limit)=>api.get('/api/movies/new', {
            params: limit ? {
                limit
            } : {}
        }),
    getPopular: (limit)=>api.get('/api/movies/popular', {
            params: limit ? {
                limit
            } : {}
        }),
    trackClick: (id)=>api.post(`/api/movies/${id}/click`)
};
const likesAPI = {
    create: (targetType, targetId)=>api.post('/api/likes', {
            targetType,
            targetId
        }),
    delete: (likeId)=>api.delete(`/api/likes/${likeId}`),
    deleteByTarget: (targetType, targetId)=>api.delete('/api/likes', {
            params: {
                targetType,
                targetId
            }
        }),
    check: (items)=>api.get('/api/likes/check', {
            params: {
                items: JSON.stringify(items)
            }
        }),
    toggle: (targetType, targetId)=>api.post('/api/likes/toggle', {
            targetType,
            targetId
        })
};
const actorsAPI = {
    getById: (id)=>api.get(`/api/actors/${id}`),
    search: (q)=>api.get('/api/actors/search', {
            params: {
                q
            }
        })
};
const directorsAPI = {
    getById: async (id)=>{
        const { data } = await api.get(`/api/directors/${id}`);
        return data.director;
    },
    search: (q)=>api.get('/api/directors/search', {
            params: {
                q
            }
        })
};
const recommendationsAPI = {
    search: (query, userPreferences)=>api.post('/api/recommendations/search', {
            query,
            userPreferences
        })
};
const authAPI = {
    login: (email, password)=>api.post('/api/auth/login', {
            email,
            password
        }),
    logout: ()=>api.post('/api/auth/logout'),
    refresh: ()=>api.post('/api/auth/refresh')
};
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Loading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"
        }, void 0, false, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Loading.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Loading.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Error.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Error({ message }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-2xl",
            children: message
        }, void 0, false, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Error.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Error.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx <module evaluation>", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MovieActions$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MovieActions$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MovieActions$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx <module evaluation>", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
__turbopack_context__.s([
    "default",
    ()=>MoviePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Loading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Error.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MovieActions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MovieActions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/PersonList.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function MoviePage({ params: { id } }) {
    const [movie, setMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMovie = async ()=>{
            try {
                const movieData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moviesAPI"].getMovie(id);
                setMovie(movieData);
            } catch (err) {
                if (err.response?.status === 404) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
                } else {
                    setError('Failed to fetch movie data.');
                }
            } finally{
                setLoading(false);
            }
        };
        fetchMovie();
    }, [
        id
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
        lineNumber: 58,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        message: error
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
        lineNumber: 59,
        columnNumber: 21
    }, this);
    if (!movie) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[40vh] md:h-[55vh]",
                style: {
                    backgroundImage: movie?.backdropUrl ? `url(${movie.backdropUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 -mt-24 md:-mt-32 pb-16 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MovieActions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            movieId: String(movie.id),
                            initiallyLiked: Boolean(movie.userLiked)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-60 lg:w-72 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10 bg-gray-900",
                                    children: movie?.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: movie.posterUrl,
                                        alt: movie.title,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center text-gray-500",
                                        children: "No Image"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-5xl font-bold mb-2 movie-title",
                                        children: movie.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 movie-subtitle",
                                        children: movie.titleEnglish
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-6",
                                        children: [
                                            movie.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-white/10 rounded",
                                                children: movie.year
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 30
                                            }, this),
                                            Array.isArray(movie.genres) && movie.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-white/10 rounded",
                                                    children: g
                                                }, g, false, {
                                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    movie.plot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold mb-2",
                                                children: "줄거리"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 leading-relaxed",
                                                children: movie.plot
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    Array.isArray(movie.directors) && movie.directors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold",
                                                    children: "감독"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                type: "Director",
                                                items: movie.directors
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    Array.isArray(movie.cast) && movie.cast.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold",
                                                    children: "출연"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$PersonList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                type: "Actor",
                                                items: movie.cast.slice(0, 12)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/movie/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f1918bf7._.js.map