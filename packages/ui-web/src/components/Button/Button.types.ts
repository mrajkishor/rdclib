import type { ButtonHTMLAttributes, ReactNode } from "react";
import type {
    BaseProps,
    InteractiveProps,
    AccessibilityProps,
} from "@rdc/ui-core";

export interface ButtonProps
    extends BaseProps,
    InteractiveProps,
    AccessibilityProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
