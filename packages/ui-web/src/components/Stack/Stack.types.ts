import type { ReactNode } from "react";
import type { Size } from "@rdc/ui-core";

export interface StackProps {
    children: ReactNode;
    direction?: "row" | "column";
    gap?: Size;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "space-between";
}
