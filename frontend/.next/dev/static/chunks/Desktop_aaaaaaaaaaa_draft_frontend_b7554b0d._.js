(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:5001") || 'http://localhost:5001';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
    // UPDATED: Added 'name' to the input interface
    signup: (data)=>api.post('/api/auth/signup', data),
    logout: ()=>api.post('/api/auth/logout'),
    refresh: ()=>api.post('/api/auth/refresh')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accessToken, setAccessToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const isAuthenticated = !!accessToken;
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": async ()=>{
            try {
                await fetch(`${("TURBOPACK compile-time value", "http://localhost:5001")}/api/auth/logout`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
            } catch (error) {
                console.error('Logout error:', error);
            } finally{
                setAccessToken(null);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(null);
                setUser(null); // Explicitly clear user state
            }
        }
    }["AuthProvider.useCallback[logout]"], [
        accessToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const refreshToken = {
                "AuthProvider.useEffect.refreshToken": async ()=>{
                    try {
                        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5001")}/api/auth/refresh`, {
                            method: 'POST',
                            credentials: 'include'
                        });
                        if (response.ok) {
                            const data = await response.json();
                            setAccessToken(data.accessToken);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken);
                        }
                    } catch (error) {
                        console.error('Initial refresh failed:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.refreshToken"];
            void refreshToken();
        }
    }["AuthProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const fetchProfile = {
                "AuthProvider.useEffect.fetchProfile": async ()=>{
                    if (isAuthenticated) {
                        try {
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].getProfile();
                            setUser(response.data.user);
                            console.log('User data loaded:', response.data.user);
                        } catch (error) {
                            console.error('Failed to fetch profile, logging out:', error);
                            void logout();
                        }
                    }
                }
            }["AuthProvider.useEffect.fetchProfile"];
            void fetchProfile();
        }
    }["AuthProvider.useEffect"], [
        isAuthenticated,
        logout
    ]);
    const login = (token, userData)=>{
        setAccessToken(token);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(token);
        setUser(userData);
        console.log('User logged in:', userData);
    };
    const updateUser = async (userData)=>{
        if (!user) return;
        const oldUser = user;
        // Correctly merge the new data with the existing user object
        const updatedUser = {
            ...oldUser,
            ...userData
        };
        setUser(updatedUser);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].updateProfile(userData);
            setUser(response.data.user);
            console.log('User data saved and updated:', response.data.user);
        } catch (error) {
            console.error('Failed to update user data:', error);
            setUser(oldUser); // Revert on error
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            login,
            logout,
            updateUser
        },
        children: !isLoading && children
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "HZ381KPAjlT+KfGUtqJAxFFB6As=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const { user, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Default to dark mode
    // Sync with user preferences
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (user && user.darkMode !== undefined) {
                setDarkMode(user.darkMode);
            }
        }
    }["ThemeProvider.useEffect"], [
        user
    ]);
    // Apply theme classes to html element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const el = document.documentElement;
            if (darkMode) {
                el.classList.add('dark');
                el.classList.remove('light');
            } else {
                el.classList.remove('dark');
                el.classList.add('light');
            }
        }
    }["ThemeProvider.useEffect"], [
        darkMode
    ]);
    const toggleDarkMode = async ()=>{
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        // Update on server if authenticated
        if (accessToken) {
            try {
                await fetch(`${("TURBOPACK compile-time value", "http://localhost:5001")}/api/user/profile`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        darkMode: newDarkMode
                    })
                });
            } catch (error) {
                console.error('Failed to update dark mode preference:', error);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            darkMode,
            toggleDarkMode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/aaaaaaaaaaa/draft/frontend/context/ThemeContext.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "Wu1zyNggLdW0xR7RHCPpJ9xEoEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aaaaaaaaaaa$2f$draft$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_aaaaaaaaaaa_draft_frontend_b7554b0d._.js.map