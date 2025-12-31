import type { CSSProperties } from "react";
import { radius, fontSize, fontWeight } from "@rdc/tokens";
import type { ButtonProps } from "./Button.types";
import { getPadding, getIntentColor } from "../../utils/style";

export function Button({
    children,
    size = "md",
    intent = "primary",
    disabled,
    loading,
    role = "button",
    ...rest
}: ButtonProps) {
    const isDisabled = disabled || loading;

    const style: CSSProperties = {
        padding: `${getPadding(size)}px`,
        borderRadius: radius.md,
        backgroundColor: getIntentColor(intent),
        color: "#fff",
        border: "none",
        fontSize: fontSize[size === "xs" ? "sm" : size],
        fontWeight: fontWeight.medium,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.6 : 1,
    };

    return (
        <button
            {...rest}
            role={role}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            style={style}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}
