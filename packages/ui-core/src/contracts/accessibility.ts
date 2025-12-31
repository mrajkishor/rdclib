export interface AccessibilityProps {
    /**
     * Semantic role of the component
     * e.g. button, checkbox, text
     */
    role?: string;

    /**
     * Whether the element is focusable / reachable
     */
    focusable?: boolean;

    /**
     * Used to signal importance or emphasis
     */
    emphasis?: "low" | "medium" | "high";
}
