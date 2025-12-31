export type ColorMode = "light" | "dark";

export const colors = {
    light: {
        background: {
            primary: "#ffffff",
            secondary: "#f7f7f7"
        },
        text: {
            primary: "#111111",
            secondary: "#555555",
            muted: "#777777"
        },
        border: {
            subtle: "#e5e5e5",
            strong: "#cccccc"
        },
        intent: {
            primary: "#2563eb",
            danger: "#dc2626",
            success: "#16a34a",
            warning: "#d97706"
        }
    },

    dark: {
        background: {
            primary: "#0f0f0f",
            secondary: "#1a1a1a"
        },
        text: {
            primary: "#f5f5f5",
            secondary: "#d4d4d4",
            muted: "#a3a3a3"
        },
        border: {
            subtle: "#262626",
            strong: "#404040"
        },
        intent: {
            primary: "#3b82f6",
            danger: "#ef4444",
            success: "#22c55e",
            warning: "#f59e0b"
        }
    }
} as const;
