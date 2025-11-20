(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Header() {
    _s();
    const { isAuthenticated, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const clearSearchState = ()=>{
        try {
            sessionStorage.removeItem('search_state_v1');
        } catch (e) {
        // Ignore errors
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    onClick: clearSearchState,
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-red-600 flex items-center justify-center rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "2",
                                        y: "4",
                                        width: "16",
                                        height: "12",
                                        rx: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "4",
                                        y: "7",
                                        width: "5",
                                        height: "3",
                                        fill: "black"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "11",
                                        y: "7",
                                        width: "5",
                                        height: "3",
                                        fill: "black"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-xl font-bold",
                            children: "MovieFlix"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: clearSearchState,
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "홈"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/search",
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "검색"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/user",
                            onClick: clearSearchState,
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "마이페이지"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition",
                            children: "로그인"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Header, "zqOjhT7Uiy3zlq7M7mfKh34T04g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoviePosterOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MoviePosterOverlay({ movieId, rating, initiallyLiked = false, onLikeChange }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initiallyLiked);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleLike = async (e)=>{
        e.stopPropagation(); // Prevent navigation when clicking like button
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        if (pending) return;
        setPending(true);
        try {
            if (!liked) {
                console.log('Frontend: Liking Movie. Type: Movie, ID:', movieId);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["likesAPI"].create('Movie', movieId);
                setLiked(true);
                onLikeChange?.(true);
            } else {
                console.log('Frontend: Unliking Movie. Type: Movie, ID:', movieId);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["likesAPI"].deleteByTarget('Movie', movieId);
                setLiked(false);
                onLikeChange?.(false);
            }
        } catch (e) {
            console.error('Frontend: Error toggling like:', e);
        // ignore errors for now
        } finally{
            setPending(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-2 right-2 flex items-center gap-2 z-10",
        children: [
            rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold",
                children: rating
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleLike,
                disabled: pending,
                className: `p-1.5 rounded-full transition ${liked ? 'text-white' : 'bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white'} disabled:opacity-50`,
                style: {
                    backgroundColor: liked ? '#dc2626' : ''
                },
                onMouseOver: (e)=>{
                    if (liked) {
                        e.currentTarget.style.backgroundColor = '#c52222';
                    }
                },
                onMouseOut: (e)=>{
                    if (liked) {
                        e.currentTarget.style.backgroundColor = '#dc2626';
                    }
                },
                "aria-label": liked ? '좋아요 취소' : '좋아요',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: liked ? '#dc2626' : 'none',
                    stroke: "currentColor",
                    strokeWidth: 2,
                    className: "w-4 h-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.737-.715-1.611-2.377-2.737-4.313-2.737C5.099 3.75 3 5.765 3 8.25c0 7.125 9 12 9 12s9-4.875 9-12z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(MoviePosterOverlay, "6BUQvtNL9/kTLSmHpyQhNLFlfAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = MoviePosterOverlay;
var _c;
__turbopack_context__.k.register(_c, "MoviePosterOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Carousel({ title, movies, loading, onLikeChange, hideEmptyMessage = false }) {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleScroll = (direction)=>{
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "영화를 불러오는 중..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                        lineNumber: 44,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (movies.length === 0) {
        if (hideEmptyMessage) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: [
                            title,
                            " 영화가 없습니다"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                        lineNumber: 56,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleScroll('left'),
                        className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80",
                        "aria-label": "Scroll Left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                lineNumber: 70,
                                columnNumber: 136
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        className: "flex gap-4 overflow-x-auto pb-4 scrollbar-hide",
                        children: movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push(`/movie/${movie.id}`),
                                className: "flex-shrink-0 w-[180px] cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 hover:ring-2 hover:ring-red-500 transition",
                                        children: [
                                            movie.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: movie.posterUrl,
                                                alt: movie.title,
                                                width: 180,
                                                height: 270,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center text-gray-500 text-sm",
                                                children: "No Image"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                movieId: movie.id.toString(),
                                                rating: movie.rating?.toString(),
                                                initiallyLiked: movie.userLiked,
                                                onLikeChange: onLikeChange
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium line-clamp-2 text-sm",
                                        children: movie.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            movie.year,
                                            " ",
                                            movie.genres?.[0] ? `• ${movie.genres[0]}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, movie.id, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleScroll('right'),
                        className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80",
                        "aria-label": "Scroll Right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                                lineNumber: 95,
                                columnNumber: 136
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Carousel, "eVUxTakaEKAorssTcslc136i2Nw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const genreMapToKorean = {
    'Action': '액션',
    'Drama': '드라마',
    'Comedy': '코미디',
    'Romance': '로맨스',
    'Thriller': '스릴러',
    'Horror': '공포',
    'Science Fiction': 'SF',
    'Fantasy': '판타지',
    'Animation': '애니메이션',
    'Documentary': '다큐멘터리',
    'Crime': '범죄',
    'Family': '가족'
};
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasSearched, setHasSearched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingSearch, setLoadingSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchError, setSearchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newMovies, setNewMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Split state to manage loading independently
    const [userGenreSections, setUserGenreSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [otherGenreSections, setOtherGenreSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingNewMovies, setLoadingNewMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingUserGenres, setLoadingUserGenres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingOtherGenres, setLoadingOtherGenres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper to map API response to Korean titles
    const mapToKorean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[mapToKorean]": (section)=>({
                ...section,
                title: genreMapToKorean[section.title] || section.title,
                originalTitle: section.title
            })
    }["HomePage.useCallback[mapToKorean]"], []);
    const loadNewMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[loadNewMovies]": async ()=>{
            setLoadingNewMovies(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesAPI"].getNew(20);
                setNewMovies(response.data.movies || []);
            } catch (err) {
                console.error('Failed to load new movies:', err);
                setNewMovies([]);
            } finally{
                setLoadingNewMovies(false);
            }
        }
    }["HomePage.useCallback[loadNewMovies]"], []);
    const loadGenreMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[loadGenreMovies]": async ()=>{
            // 1. Identify Genres
            const allGenres = Object.keys(genreMapToKorean);
            const userGenres = isAuthenticated && user?.preferredGenres ? user.preferredGenres : [];
            const restGenres = allGenres.filter({
                "HomePage.useCallback[loadGenreMovies].restGenres": (g)=>!userGenres.includes(g)
            }["HomePage.useCallback[loadGenreMovies].restGenres"]);
            // --- PHASE 1: Load User Genres (High Priority) ---
            setLoadingUserGenres(true);
            if (userGenres.length > 0) {
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesAPI"].getByGenres(userGenres);
                    const sections = response.data.sections || [];
                    setUserGenreSections(sections.map(mapToKorean));
                } catch (err) {
                    console.error('Failed to load user genre movies:', err);
                    setUserGenreSections([]);
                }
            } else {
                setUserGenreSections([]);
            }
            setLoadingUserGenres(false);
            // --- PHASE 2: Load Remaining Genres (Low Priority) ---
            setLoadingOtherGenres(true);
            if (restGenres.length > 0) {
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesAPI"].getByGenres(restGenres);
                    const sections = response.data.sections || [];
                    setOtherGenreSections(sections.map(mapToKorean));
                } catch (err) {
                    console.error('Failed to load other genre movies:', err);
                    setOtherGenreSections([]);
                }
            } else {
                setOtherGenreSections([]);
            }
            setLoadingOtherGenres(false);
        }
    }["HomePage.useCallback[loadGenreMovies]"], [
        isAuthenticated,
        user?.preferredGenres,
        mapToKorean
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            void loadNewMovies();
            void loadGenreMovies();
        }
    }["HomePage.useEffect"], [
        loadNewMovies,
        loadGenreMovies
    ]);
    const handleLikeChange = ()=>{
    // Optional: Refresh logic
    };
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        if (!query.trim()) return;
        setLoadingSearch(true);
        setSearchError('');
        setHasSearched(true);
        try {
            const profileRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].getProfile();
            const userPrefs = profileRes.data?.user ? {
                genres: profileRes.data.user.preferredGenres || [],
                actors: profileRes.data.user.preferredActors || [],
                years: profileRes.data.user.preferredYears || {
                    min: 1990,
                    max: 2024
                }
            } : {};
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recommendationsAPI"].search(query, userPrefs);
            setSearchResults(response.data.movies || []);
        } catch (err) {
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err.response?.status === 503) {
                setSearchError('추천 서비스를 사용할 수 없습니다.');
            } else {
                setSearchError('검색에 실패했습니다.');
            }
            setSearchResults([]);
        } finally{
            setLoadingSearch(false);
            setQuery('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "search",
                className: "relative min-h-[70vh] flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 py-32 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-bold mb-6",
                                    children: [
                                        isAuthenticated && user?.name ? `${user.name}님` : '당신',
                                        "을 위한 완벽한 영화를 찾아드립니다"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-300 mb-12",
                                    children: "지금 보고 싶은 영화를 검색해보세요"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSearch,
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: "예: 우주를 배경으로 한 감동적인 영화",
                                            className: "flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loadingSearch,
                                            className: "px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-50",
                                            children: loadingSearch ? '검색 중...' : '추천받기'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                searchError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded",
                                    children: searchError
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            hasSearched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 py-16 -mt-20 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-8",
                        children: "검색 결과"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 179,
                        columnNumber: 15
                    }, this),
                    loadingSearch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "추천 영화를 불러오는 중..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 19
                    }, this) : searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
                        children: searchResults.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push(`/movie/${movie.id}`),
                                className: "cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 hover:ring-2 hover:ring-red-500 transition",
                                        children: movie.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: movie.posterUrl,
                                            alt: movie.title,
                                            width: 180,
                                            height: 270,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 48
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center text-gray-500",
                                            children: "No Image"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 164
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium line-clamp-2",
                                        children: movie.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: movie.year
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, movie.id, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg",
                            children: "추천 영화를 찾을 수 없습니다"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 195,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 195,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pb-16 relative z-10 ${hasSearched ? 'pt-8' : '-mt-20'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "새로운 영화",
                        movies: newMovies,
                        loading: loadingNewMovies,
                        onLikeChange: handleLikeChange
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    userGenreSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: section.title,
                            movies: section.movies,
                            loading: loadingUserGenres,
                            onLikeChange: handleLikeChange
                        }, `user-genre-${section.originalTitle}`, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this)),
                    otherGenreSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: section.title,
                            movies: section.movies,
                            loading: loadingOtherGenres,
                            onLikeChange: handleLikeChange
                        }, `other-genre-${section.originalTitle}`, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 217,
                            columnNumber: 15
                        }, this)),
                    !isAuthenticated && !loadingUserGenres && !loadingOtherGenres && userGenreSections.length === 0 && otherGenreSections.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 py-8 text-center text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "로그인하시면 맞춤형 추천을 해드립니다."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                            lineNumber: 228,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                        lineNumber: 227,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/page.tsx",
        lineNumber: 157,
        columnNumber: 7
    }, this);
}
_s(HomePage, "SMnkLS/WaPXo2q4oswh8KjZ98eQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_aaaaaaaaaaa_draft_frontend_2dedb67d._.js.map