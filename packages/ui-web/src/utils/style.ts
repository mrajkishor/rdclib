import { spacing, colors } from "@rdc/tokens";
import type { Size, Intent } from "@rdc/ui-core";

export function getPadding(size: Size = "md") {
    const map: Record<Size, number> = {
        xs: spacing[1],
        sm: spacing[2],
        md: spacing[3],
        lg: spacing[4],
        xl: spacing[5],
    };
    return map[size];
}

export function getIntentColor(
    intent: Intent = "primary",
    mode: "light" | "dark" = "light",
) {
    return colors[mode].intent[intent];
}
