(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CopywriterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
// ============================================================================
// PALETTE — DonerColle Partners (DCP) brand identity
// ============================================================================
const C = {
    bg: "#E6E7E8",
    midnight: "#000531",
    violet: "#545DFF",
    green: "#20FE8F",
    greenAlpha: "rgba(32,254,143,0.12)",
    ember: "#FF8371",
    white: "#FFFFFF",
    offwhite: "#F4F5F7",
    textPrimary: "#000531",
    textSecondary: "rgba(0,5,49,0.55)",
    cardBg: "#FFFFFF",
    cardBorder: "rgba(84,93,255,0.2)"
};
const CHANNELS = [
    "Instagram",
    "TikTok",
    "Facebook",
    "Pinterest",
    "YouTube"
];
// ============================================================================
// IMAGE ASSETS (mirror of server-side for the picker)
// ============================================================================
const IMAGE_LIBRARY = [
    {
        file_name: "Airfryer_Classic_AfterWork_Zillennial_Emma.jpg",
        product: "Air Fryer",
        model: "Emma",
        clothing: "After Work"
    },
    {
        file_name: "AirFryer_ModernKitchen_AfterWork_Alex_Zillennial.jpg",
        product: "Air Fryer",
        model: "Alex",
        clothing: "After Work"
    },
    {
        file_name: "Blender_PreWorkout_EcclecticKitchen_Mia_Zillennial.jpg",
        product: "Blender",
        model: "Mia",
        clothing: "Pre Workout"
    },
    {
        file_name: "Blender_WeekendCasual_SimpleKitcheN_Alex_Zillennial.jpg",
        product: "Blender",
        model: "Alex",
        clothing: "Before Work"
    },
    {
        file_name: "CofeeMaker_SimpleKitchen_BeforeWork_Marcus_Zillennial.jpg",
        product: "Coffee Maker",
        model: "Marcus",
        clothing: "Before Work"
    },
    {
        file_name: "CoffeeMaker_BeforeWork_CozyKitchen_Emma_Zillenial.jpg",
        product: "Coffee Maker",
        model: "Emma",
        clothing: "Before Work"
    },
    {
        file_name: "CoffeeMaker_EcclecticKitchen_PreWorkout_Taylor_GenX.jpg",
        product: "Coffee Maker",
        model: "Taylor",
        clothing: "Pre Workout"
    },
    {
        file_name: "PersonalBlender_ModernKitchen_BeforeWork_Taylor_GenX.jpg",
        product: "Personal Blender",
        model: "Taylor",
        clothing: "Before Work"
    },
    {
        file_name: "PersonalBlender_ModernKitchen_PreWorkout_Marcus_Zillennial.jpg",
        product: "Personal Blender",
        model: "Marcus",
        clothing: "Pre Workout"
    },
    {
        file_name: "PersonalBlender_RetroKitchen_WeekendCasual_Marcus_Zillennial.jpg",
        product: "Personal Blender",
        model: "Marcus",
        clothing: "Weekend Casual"
    },
    {
        file_name: "Toaster_BrightKitchen_WeekendCasual_Mia_Zillennial.jpg",
        product: "Toaster",
        model: "Mia",
        clothing: "Weekend Casual"
    },
    {
        file_name: "Toaster_CozyKitchen_PreWork_David_GenX.jpg",
        product: "Toaster",
        model: "David",
        clothing: "Before Work"
    }
];
// ============================================================================
// LOADING PHASES
// ============================================================================
const PHASES = [
    "Calling Brand Nucleus...",
    "Activating brand knowledge...",
    "Assembling context package...",
    "Copywriting agent generating headlines...",
    "Creative director reviewing batch...",
    "Assigning imagery...",
    "Preparing preview..."
];
function useRotatingStatus(isActive) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRotatingStatus.useEffect": ()=>{
            if (!isActive) {
                setIndex(0);
                return;
            }
            const interval = setInterval({
                "useRotatingStatus.useEffect.interval": ()=>{
                    setIndex({
                        "useRotatingStatus.useEffect.interval": (prev)=>Math.min(prev + 1, PHASES.length - 1)
                    }["useRotatingStatus.useEffect.interval"]);
                }
            }["useRotatingStatus.useEffect.interval"], 6000);
            return ({
                "useRotatingStatus.useEffect": ()=>clearInterval(interval)
            })["useRotatingStatus.useEffect"];
        }
    }["useRotatingStatus.useEffect"], [
        isActive
    ]);
    return PHASES[index];
}
_s(useRotatingStatus, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
// ============================================================================
// IMAGE PICKER MODAL
// ============================================================================
function ImagePicker({ current, onSelect, onClose }) {
    // Group by product
    const products = [
        ...new Set(IMAGE_LIBRARY.map((img)=>img.product))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: pickerStyles.overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: pickerStyles.modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: pickerStyles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: pickerStyles.title,
                            children: "Select Image"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: pickerStyles.closeBtn,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: pickerStyles.body,
                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: pickerStyles.groupLabel,
                                    children: product
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: pickerStyles.grid,
                                    children: IMAGE_LIBRARY.filter((img)=>img.product === product).map((img)=>{
                                        const isSelected = img.file_name === current;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onSelect(img.file_name);
                                                onClose();
                                            },
                                            style: {
                                                ...pickerStyles.thumb,
                                                border: isSelected ? `2px solid ${C.green}` : `1px solid rgba(84,93,255,0.2)`,
                                                background: isSelected ? C.greenAlpha : "rgba(255,255,255,0.05)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: pickerStyles.thumbIcon,
                                                    children: product === "Air Fryer" ? "🍟" : product === "Blender" || product === "Personal Blender" ? "🥤" : product === "Coffee Maker" ? "☕" : "🍞"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: pickerStyles.thumbModel,
                                                    children: img.model
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: pickerStyles.thumbClothing,
                                                    children: img.clothing
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, img.file_name, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, product, true, {
                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c = ImagePicker;
const pickerStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,5,49,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    modal: {
        background: C.midnight,
        borderRadius: 12,
        width: 560,
        maxHeight: "80vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${C.cardBorder}`
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: `1px solid rgba(84,93,255,0.2)`
    },
    title: {
        fontSize: 14,
        fontWeight: 700,
        color: C.white,
        fontFamily: '"DM Sans", sans-serif'
    },
    closeBtn: {
        background: "none",
        border: "none",
        fontSize: 22,
        color: "rgba(255,255,255,0.5)",
        cursor: "pointer",
        padding: 0,
        lineHeight: 1
    },
    body: {
        padding: "16px 20px",
        overflowY: "auto"
    },
    groupLabel: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        color: C.violet,
        textTransform: "uppercase",
        margin: "12px 0 8px 0",
        fontFamily: '"DM Sans", sans-serif'
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8
    },
    thumb: {
        padding: 10,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        transition: "all 0.15s"
    },
    thumbIcon: {
        fontSize: 24
    },
    thumbModel: {
        fontSize: 11,
        fontWeight: 600,
        color: C.white,
        fontFamily: '"DM Sans", sans-serif'
    },
    thumbClothing: {
        fontSize: 10,
        color: "rgba(255,255,255,0.5)",
        fontFamily: '"DM Sans", sans-serif'
    }
};
// ============================================================================
// EDITABLE ROW CARD
// ============================================================================
function RowCard({ row, index, onUpdate }) {
    _s1();
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentImage = IMAGE_LIBRARY.find((img)=>img.file_name === row.photo);
    const productEmoji = currentImage?.product === "Air Fryer" ? "🍟" : currentImage?.product === "Blender" || currentImage?.product === "Personal Blender" ? "🥤" : currentImage?.product === "Coffee Maker" ? "☕" : "🍞";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyles.card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyles.number,
                        children: index + 1
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyles.copySection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: row.Line1a,
                                onChange: (e)=>onUpdate({
                                        ...row,
                                        Line1a: e.target.value.toUpperCase()
                                    }),
                                style: cardStyles.lineInput,
                                placeholder: "LINE 1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: row.Line2a,
                                onChange: (e)=>onUpdate({
                                        ...row,
                                        Line2a: e.target.value.toUpperCase()
                                    }),
                                style: cardStyles.lineInput,
                                placeholder: "LINE 2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: row.Line3a,
                                onChange: (e)=>onUpdate({
                                        ...row,
                                        Line3a: e.target.value.toUpperCase()
                                    }),
                                style: cardStyles.lineInput,
                                placeholder: "LINE 3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPickerOpen(true),
                        style: cardStyles.imageButton,
                        title: "Click to change image",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyles.imagePreview,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 28
                                    },
                                    children: productEmoji
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyles.imageMeta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: cardStyles.imageProduct,
                                        children: currentImage?.product || row.product_match
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: cardStyles.imageDetail,
                                        children: [
                                            currentImage?.model || "",
                                            " · ",
                                            currentImage?.clothing || row.clothing_context
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: cardStyles.changeLink,
                                        children: "Change"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            pickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImagePicker, {
                current: row.photo,
                onSelect: (fileName)=>{
                    const img = IMAGE_LIBRARY.find((i)=>i.file_name === fileName);
                    onUpdate({
                        ...row,
                        photo: fileName,
                        product_match: img?.product || row.product_match,
                        clothing_context: img?.clothing || row.clothing_context
                    });
                },
                onClose: ()=>setPickerOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(RowCard, "3NrSmcnnqEHQ/YG7JCwLYg42Rjk=");
_c1 = RowCard;
const cardStyles = {
    card: {
        display: "flex",
        alignItems: "stretch",
        gap: 0,
        background: C.cardBg,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 8,
        overflow: "hidden"
    },
    number: {
        width: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 700,
        color: C.violet,
        background: C.bg,
        borderRight: `1px solid ${C.cardBorder}`,
        flexShrink: 0,
        fontFamily: '"DM Sans", sans-serif'
    },
    copySection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 14px"
    },
    lineInput: {
        width: "100%",
        border: "none",
        background: "transparent",
        fontSize: 14,
        fontWeight: 700,
        fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        color: C.textPrimary,
        padding: "3px 0",
        outline: "none",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        boxSizing: "border-box"
    },
    imageButton: {
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        background: C.offwhite,
        border: "none",
        borderLeft: `1px solid ${C.cardBorder}`,
        cursor: "pointer",
        padding: "10px 12px",
        flexShrink: 0,
        transition: "background 0.15s"
    },
    imagePreview: {
        width: 48,
        height: 48,
        borderRadius: 8,
        background: C.cardBg,
        border: `1px solid ${C.cardBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    imageMeta: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1
    },
    imageProduct: {
        fontSize: 11,
        fontWeight: 600,
        color: C.textPrimary,
        fontFamily: '"DM Sans", sans-serif'
    },
    imageDetail: {
        fontSize: 10,
        color: C.textSecondary,
        fontFamily: '"DM Sans", sans-serif'
    },
    changeLink: {
        fontSize: 10,
        color: C.green,
        fontWeight: 700,
        marginTop: 2,
        fontFamily: '"DM Sans", sans-serif'
    }
};
function CopywriterPage() {
    _s2();
    const [objective, setObjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [numVersions, setNumVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Instagram");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const status = useRotatingStatus(loading);
    const handleGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CopywriterPage.useCallback[handleGenerate]": async (e)=>{
            e.preventDefault();
            if (loading || !objective.trim()) return;
            setLoading(true);
            setError(null);
            setRows(null);
            try {
                const res = await fetch("/api/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        objective: objective.trim(),
                        num_versions: numVersions,
                        channel,
                        additional_notes: notes.trim()
                    })
                });
                if (!res.ok) {
                    const errData = await res.json().catch({
                        "CopywriterPage.useCallback[handleGenerate]": ()=>({})
                    }["CopywriterPage.useCallback[handleGenerate]"]);
                    throw new Error(errData.error || `Request failed (${res.status})`);
                }
                const data = await res.json();
                setRows(data.rows);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally{
                setLoading(false);
            }
        }
    }["CopywriterPage.useCallback[handleGenerate]"], [
        objective,
        numVersions,
        channel,
        notes,
        loading
    ]);
    const handleExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CopywriterPage.useCallback[handleExport]": async ()=>{
            if (!rows?.length || exporting) return;
            setExporting(true);
            try {
                const res = await fetch("/api/export", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        rows
                    })
                });
                if (!res.ok) {
                    const errData = await res.json().catch({
                        "CopywriterPage.useCallback[handleExport]": ()=>({})
                    }["CopywriterPage.useCallback[handleExport]"]);
                    throw new Error(errData.error || `Export failed (${res.status})`);
                }
                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `HB-CopyBatch-${new Date().toISOString().slice(0, 10)}.xlsx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Export failed");
            } finally{
                setExporting(false);
            }
        }
    }["CopywriterPage.useCallback[handleExport]"], [
        rows,
        exporting
    ]);
    const updateRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CopywriterPage.useCallback[updateRow]": (index, updated)=>{
            setRows({
                "CopywriterPage.useCallback[updateRow]": (prev)=>{
                    if (!prev) return prev;
                    const next = [
                        ...prev
                    ];
                    next[index] = updated;
                    return next;
                }
            }["CopywriterPage.useCallback[updateRow]"]);
        }
    }["CopywriterPage.useCallback[updateRow]"], []);
    const removeRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CopywriterPage.useCallback[removeRow]": (index)=>{
            setRows({
                "CopywriterPage.useCallback[removeRow]": (prev)=>prev ? prev.filter({
                        "CopywriterPage.useCallback[removeRow]": (_, i)=>i !== index
                    }["CopywriterPage.useCallback[removeRow]"]) : prev
            }["CopywriterPage.useCallback[removeRow]"]);
        }
    }["CopywriterPage.useCallback[removeRow]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: styles.topBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.topBarInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.topBarLeft,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.dcpLogo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.dcpMark,
                                            children: "DCP"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.dcpWordmark,
                                            children: [
                                                "Doner",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 53
                                                }, this),
                                                "Colle",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 64
                                                }, this),
                                                "Partners."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.topBarSep
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.topBarContext,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.brandName,
                                            children: "Hamilton Beach"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.nucleusLabel,
                                            children: "Copywriter"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.lanePill,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.pill,
                                children: "Yes You Can Chef"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: styles.leftPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: styles.sectionLabel,
                                children: "BRIEF"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.inputCard,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleGenerate,
                                    style: styles.form,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: styles.label,
                                                    children: "Objective"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: objective,
                                                    onChange: (e)=>setObjective(e.target.value),
                                                    placeholder: "What are we trying to accomplish?",
                                                    rows: 4,
                                                    style: styles.textarea,
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.row,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        ...styles.field,
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Versions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: numVersions,
                                                            onChange: (e)=>setNumVersions(Math.min(50, Math.max(1, Number(e.target.value)))),
                                                            min: 1,
                                                            max: 50,
                                                            style: styles.input,
                                                            disabled: loading
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        ...styles.field,
                                                        flex: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Channel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: channel,
                                                            onChange: (e)=>setChannel(e.target.value),
                                                            style: styles.select,
                                                            disabled: loading,
                                                            children: CHANNELS.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: ch,
                                                                    children: ch
                                                                }, ch, false, {
                                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: styles.label,
                                                    children: [
                                                        "Additional notes ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: styles.labelLight,
                                                            children: "(optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: notes,
                                                    onChange: (e)=>setNotes(e.target.value),
                                                    placeholder: "Specific products to feature, tone adjustments...",
                                                    rows: 2,
                                                    style: styles.textarea,
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading || !objective.trim(),
                                            style: {
                                                ...styles.submitButton,
                                                opacity: loading || !objective.trim() ? 0.5 : 1,
                                                cursor: loading || !objective.trim() ? "not-allowed" : "pointer"
                                            },
                                            children: loading ? "Generating..." : "Generate copy batch"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            rows && rows.length > 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.exportCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        disabled: exporting,
                                        style: {
                                            ...styles.exportButton,
                                            opacity: exporting ? 0.6 : 1
                                        },
                                        children: exporting ? "Exporting..." : `Export ${rows.length} headlines to XLSX`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.exportNote,
                                        children: "Formatted for CreateTotally with all metadata"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: styles.mainPanel,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.sectionLabel,
                                    children: "GENERATING"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.outputCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.loadingState,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.loadingDots,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.dot,
                                                        children: "●"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.dot,
                                                            animationDelay: "0.2s"
                                                        },
                                                        children: "●"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.dot,
                                                            animationDelay: "0.4s"
                                                        },
                                                        children: "●"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.loadingText,
                                                children: status
                                            }, status, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.loadingSubtext,
                                                children: "This takes 30–60 seconds."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.sectionLabel,
                                    children: "ERROR"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.outputCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.errorState,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.errorText,
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setError(null),
                                                style: styles.retryButton,
                                                children: "Dismiss"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : rows && rows.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: 14
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            ...styles.sectionLabel,
                                            margin: 0
                                        },
                                        children: [
                                            rows.length,
                                            " HEADLINES — EDIT BEFORE EXPORT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.rowList,
                                    children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowCard, {
                                                    row: row,
                                                    index: i,
                                                    onUpdate: (updated)=>updateRow(i, updated)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeRow(i),
                                                    style: styles.removeBtn,
                                                    title: "Remove this headline",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.sectionLabel,
                                    children: "OUTPUT"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.outputCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.emptyState,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.emptyTitle,
                                                children: "No batch generated yet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.emptyText,
                                                children: "Fill in the brief and hit generate. Headlines will appear here for review — edit copy and swap images before exporting."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.flowDiagram,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowStep,
                                                        children: "Brief"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowArrow,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowStep,
                                                        children: "Nucleus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowArrow,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowStep,
                                                        children: "Copywriter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowArrow,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowStep,
                                                        children: "Review"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowArrow,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.flowStep,
                                                        children: "XLSX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        textarea:focus, input:focus, select:focus {
          outline: none;
          border-color: ${C.violet} !important;
          box-shadow: 0 0 0 2px rgba(84,93,255,0.15);
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/app/page.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
_s2(CopywriterPage, "3QiXyiButKtRxjz0jd3WP0KW8g0=", false, function() {
    return [
        useRotatingStatus
    ];
});
_c2 = CopywriterPage;
// ============================================================================
// STYLES
// ============================================================================
const styles = {
    page: {
        fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        background: C.bg,
        minHeight: "100vh",
        color: C.textPrimary
    },
    topBar: {
        background: C.midnight,
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid rgba(32,254,143,0.12)`
    },
    topBarInner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto"
    },
    topBarLeft: {
        display: "flex",
        alignItems: "center",
        gap: 0
    },
    dcpLogo: {
        display: "flex",
        alignItems: "center",
        gap: 12
    },
    dcpMark: {
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 700,
        fontSize: 22,
        color: C.green,
        letterSpacing: "-0.03em",
        lineHeight: 1
    },
    dcpWordmark: {
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 700,
        fontSize: 9,
        lineHeight: 1.25,
        color: C.white,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        borderLeft: "1px solid rgba(255,255,255,0.2)",
        paddingLeft: 12
    },
    topBarSep: {
        width: 1,
        height: 28,
        background: "rgba(255,255,255,0.15)",
        margin: "0 20px"
    },
    topBarContext: {
        display: "flex",
        alignItems: "baseline",
        gap: 10
    },
    brandName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.02em"
    },
    nucleusLabel: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 13,
        fontWeight: 400
    },
    lanePill: {
        display: "flex",
        gap: 8
    },
    pill: {
        fontSize: 11,
        fontWeight: 600,
        padding: "6px 16px",
        borderRadius: 40,
        background: "rgba(84,93,255,0.25)",
        color: "#fff",
        letterSpacing: "0.06em",
        textTransform: "uppercase"
    },
    content: {
        display: "flex",
        maxWidth: 1400,
        margin: "0 auto",
        padding: "24px 32px",
        gap: 28,
        minHeight: "calc(100vh - 64px)"
    },
    leftPanel: {
        width: "32%",
        minWidth: 320,
        flexShrink: 0
    },
    mainPanel: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 0
    },
    sectionLabel: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.16em",
        color: C.violet,
        margin: "0 0 14px 0",
        textTransform: "uppercase"
    },
    inputCard: {
        background: C.cardBg,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 12,
        padding: "20px 22px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 16
    },
    field: {
        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    row: {
        display: "flex",
        gap: 14
    },
    label: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: C.textPrimary
    },
    labelLight: {
        fontWeight: 400,
        color: C.textSecondary
    },
    textarea: {
        width: "100%",
        padding: "10px 12px",
        fontSize: 14,
        lineHeight: 1.55,
        fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        color: C.textPrimary,
        background: C.offwhite,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 6,
        resize: "vertical",
        boxSizing: "border-box"
    },
    input: {
        width: "100%",
        padding: "10px 12px",
        fontSize: 14,
        fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        color: C.textPrimary,
        background: C.offwhite,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 6,
        boxSizing: "border-box"
    },
    select: {
        width: "100%",
        padding: "10px 12px",
        fontSize: 14,
        fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        color: C.textPrimary,
        background: C.offwhite,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 6,
        boxSizing: "border-box",
        cursor: "pointer"
    },
    submitButton: {
        padding: "12px 28px",
        fontSize: 13,
        fontWeight: 700,
        background: C.green,
        color: C.midnight,
        border: "none",
        borderRadius: 40,
        letterSpacing: "0.08em",
        marginTop: 4,
        textTransform: "uppercase",
        cursor: "pointer"
    },
    exportCard: {
        marginTop: 16,
        background: C.greenAlpha,
        border: `1px solid rgba(32,254,143,0.3)`,
        borderRadius: 12,
        padding: "16px 20px",
        textAlign: "center"
    },
    exportButton: {
        width: "100%",
        padding: "12px 28px",
        fontSize: 13,
        fontWeight: 700,
        background: C.green,
        color: C.midnight,
        border: "none",
        borderRadius: 40,
        cursor: "pointer",
        letterSpacing: "0.08em",
        textTransform: "uppercase"
    },
    exportNote: {
        fontSize: 11,
        color: C.violet,
        margin: "8px 0 0 0",
        fontWeight: 500,
        letterSpacing: "0.04em"
    },
    rowList: {
        display: "flex",
        flexDirection: "column",
        gap: 8
    },
    removeBtn: {
        position: "absolute",
        top: -6,
        right: -6,
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: C.ember,
        color: C.midnight,
        border: "none",
        fontSize: 14,
        lineHeight: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700
    },
    outputCard: {
        background: C.midnight,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 12,
        padding: "24px 26px",
        minHeight: 260
    },
    loadingState: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        gap: 16,
        padding: "20px 0"
    },
    loadingDots: {
        display: "flex",
        gap: 6
    },
    dot: {
        fontSize: 14,
        color: C.green,
        animation: "pulse 1.2s ease-in-out infinite"
    },
    loadingText: {
        fontSize: 14,
        fontWeight: 600,
        color: C.white,
        margin: 0,
        animation: "fadeIn 0.5s ease",
        fontFamily: '"DM Sans", sans-serif'
    },
    loadingSubtext: {
        fontSize: 12,
        color: "rgba(255,255,255,0.45)",
        margin: 0,
        textAlign: "center",
        maxWidth: 400,
        lineHeight: 1.5
    },
    errorState: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "40px 0"
    },
    errorText: {
        fontSize: 14,
        color: C.ember,
        margin: 0,
        textAlign: "center"
    },
    retryButton: {
        padding: "8px 24px",
        fontSize: 13,
        fontWeight: 600,
        background: "transparent",
        color: "rgba(255,255,255,0.6)",
        border: `1px solid rgba(84,93,255,0.4)`,
        borderRadius: 40,
        cursor: "pointer",
        letterSpacing: "0.06em",
        textTransform: "uppercase"
    },
    emptyState: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        gap: 12,
        padding: "20px 0"
    },
    emptyTitle: {
        fontSize: 15,
        fontWeight: 700,
        color: C.white,
        margin: 0
    },
    emptyText: {
        fontSize: 13,
        color: "rgba(255,255,255,0.45)",
        margin: 0,
        textAlign: "center",
        maxWidth: 500,
        lineHeight: 1.55
    },
    flowDiagram: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 8
    },
    flowStep: {
        fontSize: 11,
        fontWeight: 600,
        padding: "6px 14px",
        background: "rgba(84,93,255,0.15)",
        border: `1px solid rgba(84,93,255,0.3)`,
        borderRadius: 6,
        color: "rgba(255,255,255,0.8)",
        letterSpacing: "0.06em",
        textTransform: "uppercase"
    },
    flowArrow: {
        fontSize: 14,
        color: "rgba(255,255,255,0.25)"
    }
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ImagePicker");
__turbopack_context__.k.register(_c1, "RowCard");
__turbopack_context__.k.register(_c2, "CopywriterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI__Projects$2f$Hamilton__Beach__Automation__prep$2f$hb$2d$copywriter$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/AI Projects/Hamilton Beach Automation prep/hb-copywriter/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_AI%20Projects_Hamilton%20Beach%20Automation%20prep_hb-copywriter_fb2fd746._.js.map