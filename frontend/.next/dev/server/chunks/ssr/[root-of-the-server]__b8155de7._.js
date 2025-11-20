module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Header() {
    const { isAuthenticated, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const clearSearchState = ()=>{
        try {
            sessionStorage.removeItem('search_state_v1');
        } catch (e) {
        // Ignore errors
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    onClick: clearSearchState,
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-red-600 flex items-center justify-center rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: clearSearchState,
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/search",
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/user",
                            onClick: clearSearchState,
                            className: "flex items-center gap-2 text-white hover:text-red-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoviePosterOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function MoviePosterOverlay({ movieId, rating, initiallyLiked = false, onLikeChange }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initiallyLiked);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["likesAPI"].create('Movie', movieId);
                setLiked(true);
                onLikeChange?.(true);
            } else {
                console.log('Frontend: Unliking Movie. Type: Movie, ID:', movieId);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["likesAPI"].deleteByTarget('Movie', movieId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-2 right-2 flex items-center gap-2 z-10",
        children: [
            rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold",
                children: rating
            }, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: liked ? '#dc2626' : 'none',
                    stroke: "currentColor",
                    strokeWidth: 2,
                    className: "w-4 h-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/components/MoviePosterOverlay.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function SearchPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('영화');
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [peopleResults, setPeopleResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [actorAllMovies, setActorAllMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [genre, setGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [likedMap, setLikedMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Restore previous search state on mount (when navigating back)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = sessionStorage.getItem('search_state_v1');
            if (!raw) return;
            const s = JSON.parse(raw);
            if (s) {
                setActiveTab(s.activeTab ?? '영화');
                setQuery(s.query ?? '');
                setGenre(s.genre ?? '');
                setYear(s.year ?? '');
                setResults(s.results ?? []);
                setPeopleResults(s.peopleResults ?? []);
            }
        } catch  {}
    }, []);
    const saveState = (override)=>{
        try {
            const payload = {
                activeTab,
                query,
                genre,
                year,
                results: override?.results ?? results,
                peopleResults: override?.peopleResults ?? peopleResults
            };
            sessionStorage.setItem('search_state_v1', JSON.stringify(payload));
        } catch  {}
    };
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        if (!query.trim()) {
            return;
        }
        setLoading(true);
        try {
            if (activeTab === '영화') {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moviesAPI"].search(query, {
                    genre: genre || undefined,
                    year: year || undefined
                });
                let movieList = response.data.movies || [];
                // Fallback: if no direct movie matches, try actor/director search and flatten filmography
                if ((!movieList || movieList.length === 0) && query.trim().length > 0) {
                    try {
                        const [actorsRes, directorsRes] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actorsAPI"].search(query),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directorsAPI"].search(query)
                        ]);
                        const movieMap = {};
                        const collect = (arr)=>{
                            for (const p of arr || []){
                                for (const m of p.movies || []){
                                    if (!movieMap[m.id]) movieMap[m.id] = m;
                                }
                            }
                        };
                        collect(actorsRes.data?.actors || []);
                        collect(directorsRes.data?.directors || []);
                        movieList = Object.values(movieMap);
                    } catch  {}
                }
                // Sort by popularity (likeCount + viewCount) descending
                movieList.sort((a, b)=>{
                    const popularityA = (a.likeCount || 0) + (a.viewCount || 0);
                    const popularityB = (b.likeCount || 0) + (b.viewCount || 0);
                    return popularityB - popularityA;
                });
                // Check like status for all movies
                if (isAuthenticated && movieList.length > 0) {
                    try {
                        const items = movieList.map((m)=>({
                                type: 'Movie',
                                id: String(m.id)
                            }));
                        const likeRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["likesAPI"].check(items);
                        const liked = likeRes.data?.liked || {};
                        const map = {};
                        for (const item of items){
                            map[item.id] = Boolean(liked[`Movie_${item.id}`]);
                        }
                        setLikedMap(map);
                    } catch (err) {
                    // Ignore errors
                    }
                }
                setResults(movieList);
                setPeopleResults([]);
                saveState({
                    results: movieList,
                    peopleResults: []
                });
            } else if (activeTab === '배우') {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actorsAPI"].search(query);
                setPeopleResults(response.data.actors || []);
                setResults([]);
                setActorAllMovies([]);
                saveState({
                    results: [],
                    peopleResults: response.data.actors || []
                });
            } else if (activeTab === '감독') {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directorsAPI"].search(query);
                setPeopleResults(response.data.directors || []);
                setResults([]);
                saveState({
                    results: [],
                    peopleResults: response.data.directors || []
                });
            }
        } catch (err) {
            // swallow; show empty
            setResults([]);
            setPeopleResults([]);
            setActorAllMovies([]);
            saveState({
                results: [],
                peopleResults: []
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 pt-24 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-8",
                        children: "검색"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        onKeyDown: (e)=>e.key === 'Enter' && handleSearch(e),
                                        placeholder: "영화 제목, 감독, 배우를 검색하세요",
                                        className: "w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-lg pl-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            activeTab === '영화' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: genre,
                                        onChange: (e)=>setGenre(e.target.value),
                                        className: "px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "장르 전체"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Action",
                                                children: "액션"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Drama",
                                                children: "드라마"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Comedy",
                                                children: "코미디"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Romance",
                                                children: "로맨스"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Thriller",
                                                children: "스릴러"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Horror",
                                                children: "공포"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Science Fiction",
                                                children: "SF"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Fantasy",
                                                children: "판타지"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Animation",
                                                children: "애니메이션"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Documentary",
                                                children: "다큐멘터리"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Crime",
                                                children: "범죄"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Family",
                                                children: "가족"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: year,
                                        onChange: (e)=>setYear(e.target.value),
                                        type: "number",
                                        placeholder: "년도",
                                        className: "w-28 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSearch,
                                        className: "px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700",
                                        children: "검색"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mb-8 border-b border-gray-800",
                        children: [
                            '영화',
                            '배우',
                            '감독'
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: `px-4 py-2 transition ${activeTab === tab ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`,
                                children: tab
                            }, tab, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-4",
                                children: "검색하려면 로그인이 필요합니다"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/login'),
                                className: "px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",
                                children: "로그인하러 가기"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this) : results.length === 0 && peopleResults.length === 0 && !loading && !query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "검색어를 입력해주세요"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this) : results.length === 0 && peopleResults.length === 0 && query && !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "검색 결과가 없습니다"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "검색 중..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this) : activeTab === '영화' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
                        children: results.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    saveState();
                                    router.push(`/movie/${item.id}`);
                                },
                                className: "cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 group-hover:ring-2 group-hover:ring-red-500 transition",
                                        children: [
                                            item.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.posterUrl,
                                                alt: item.title,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center text-gray-500",
                                                children: "No Image"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                movieId: item.id,
                                                rating: item.rating,
                                                initiallyLiked: likedMap[item.id] || false,
                                                onLikeChange: (liked)=>{
                                                    setLikedMap((prev)=>({
                                                            ...prev,
                                                            [item.id]: liked
                                                        }));
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium line-clamp-2",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: item.year
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: peopleResults.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 rounded-lg p-5 border border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-4 cursor-pointer",
                                        onClick: ()=>activeTab === '배우' ? router.push(`/actor/${p.id}`) : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center",
                                                children: p.profileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p.profileUrl,
                                                    alt: p.name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500 text-xs",
                                                    children: "No Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-semibold",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    p.nameEnglish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-sm",
                                                        children: p.nameEnglish
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === '배우' && peopleResults.length === 1 && p.id === peopleResults[0].id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActorFullFilmography, {
                                        actorId: p.id,
                                        cached: actorAllMovies,
                                        onLoad: setActorAllMovies
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 19
                                    }, this) : Array.isArray(p.movies) && p.movies.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 overflow-x-auto pb-1",
                                        children: p.movies.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[120px] flex-shrink-0 cursor-pointer",
                                                onClick: ()=>{
                                                    saveState();
                                                    router.push(`/movie/${m.id}`);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-2",
                                                        children: m.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: m.posterUrl,
                                                            alt: m.title,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full flex items-center justify-center text-gray-500 text-xs",
                                                            children: "No Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs line-clamp-2",
                                                        children: m.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-gray-400",
                                                        children: m.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "관련 영화가 없습니다"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
// Inline client helper component to fetch full actor filmography
function ActorFullFilmography({ actorId, cached, onLoad }) {
    // this is a client component body embedded at the end of the page file
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [likedMap, setLikedMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const run = async ()=>{
            if (cached && cached.length > 0) return;
            setLoading(true);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actorsAPI"].getById(actorId);
                const movies = res.data?.actor?.movies || [];
                if (!cancelled) onLoad(movies);
            } catch  {
                if (!cancelled) onLoad([]);
            } finally{
                if (!cancelled) setLoading(false);
            }
        };
        run();
        return ()=>{
            cancelled = true;
        };
    }, [
        actorId
    ]);
    // Check like status for movies
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAuthenticated || !cached || cached.length === 0) return;
        const items = cached.map((m)=>({
                type: 'Movie',
                id: String(m.id)
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["likesAPI"].check(items).then((res)=>{
            const map = {};
            const liked = res.data?.liked || {};
            for (const it of items){
                map[it.id] = Boolean(liked[`Movie_${it.id}`]);
            }
            setLikedMap(map);
        }).catch(()=>{});
    }, [
        isAuthenticated,
        cached
    ]);
    if (loading && (!cached || cached.length === 0)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-6 text-gray-400",
            children: "전체 출연작을 불러오는 중..."
        }, void 0, false, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, this);
    }
    if (!cached || cached.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm",
            children: "관련 영화가 없습니다"
        }, void 0, false, {
            fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
            lineNumber: 406,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
        children: cached.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-pointer",
                onClick: ()=>router.push(`/movie/${m.id}`),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-2",
                        children: [
                            m.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: m.posterUrl,
                                alt: m.title,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 415,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-gray-500 text-xs",
                                children: "No Image"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 417,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$components$2f$MoviePosterOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                movieId: String(m.id),
                                rating: m.rating,
                                initiallyLiked: likedMap[String(m.id)] || false,
                                onLikeChange: (liked)=>{
                                    setLikedMap((prev)=>({
                                            ...prev,
                                            [String(m.id)]: liked
                                        }));
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium line-clamp-2",
                        children: m.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 429,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400",
                        children: m.year
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this)
                ]
            }, m.id, true, {
                fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/app/search/page.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b8155de7._.js.map