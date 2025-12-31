export interface AccessibilityProps {
    /**
     * Semantic role, NOT DOM role
     */
    a11yRole?: "button" | "link" | "checkbox";

    /**
     * Accessible label abstraction
     */
    a11yLabel?: string;
}
