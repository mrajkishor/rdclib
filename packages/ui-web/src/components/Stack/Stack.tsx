import type { CSSProperties } from "react";
import type { StackProps } from "./Stack.types";
import { getPadding } from "../../utils/style";


export function Stack({
    children,
    direction = "column",
    gap = "md",
    align = "stretch",
    justify = "start",
}: StackProps) {
    const style: CSSProperties = {
        display: "flex",
        flexDirection: direction,
        gap: gap ? getPadding(gap) : undefined,
        alignItems: align === "start" ? "flex-start" : align,
        justifyContent:
            justify === "start" ? "flex-start" : justify === "end" ? "flex-end" : justify,
    };

    return <div style={style}>{children}</div>;
}
