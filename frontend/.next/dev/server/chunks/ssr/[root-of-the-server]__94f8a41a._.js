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
    updateProfile: (data)=>api.patch('/api/user/profile', data)
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
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx <module evaluation>", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx", "default");
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoviePoster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-rsc] (ecmascript)");
;
;
;
function MoviePoster({ movie }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/movie/${movie.id}`,
        className: "block group relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[2/3] w-full bg-gray-800 rounded-lg overflow-hidden",
                children: movie.posterUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: movie.posterUrl,
                    alt: movie.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                movieId: movie.id
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-white truncate",
                        children: movie.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: movie.year
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DirectorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePoster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePoster.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function DirectorPage({ params: { id } }) {
    let director;
    try {
        director = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["directorsAPI"].getById(id);
    } catch (err) {
        // If director not found, show 404
        if (err.response?.status === 404) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        } else {
            throw new Error('Failed to fetch director data.');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-60 lg:w-72 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10 bg-gray-900",
                            children: director.profileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: director.profileUrl,
                                alt: director.name,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-gray-500",
                                children: "No Image"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-5xl font-bold mb-2",
                                children: director.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-lg text-gray-400",
                                children: director.nameEnglish
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Movies"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
                        children: director.movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePoster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                movie: movie
                            }, movie.id, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, this);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/director/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94f8a41a._.js.map