

# 🎨 React JS (Web) – Storybook Component Inventory 

## 1️⃣ Foundations



### 🎨 Tokens (Docs-only stories)

* Colors (Light / Dark)
* Typography scale
* Spacing scale
* Border radius
* Shadows / Elevation
* Z-index
* Motion / Animation tokens

**Stories**

* `Colors.stories.tsx`
* `Typography.stories.tsx`
* `Spacing.stories.tsx`



---

## 2️⃣ Primitive Components (Core UI)

> These are your **building blocks**.

### 🔘 Button

Variants:

* Primary / Secondary / Ghost / Destructive
* Sizes (sm, md, lg)
* Disabled
* Loading
* Icon button

Stories:

* Variants
* Sizes
* With icon
* Loading states

---

### 📝 Text

* Heading (h1–h6)
* Body
* Caption
* Muted text

Stories:

* All text roles
* Truncation
* Line clamp

---

### 🧾 Input

* Text
* Password
* Email
* Search
* Error state
* Disabled
* With icon

Stories:

* Default
* Error
* Disabled
* Controlled vs uncontrolled

---

### ☑️ Checkbox

* Checked
* Unchecked
* Indeterminate
* Disabled

---

### 🔘 Radio

* Grouped radios
* Disabled
* Horizontal / Vertical

---

### 🔽 Select / Dropdown

* Single select
* Disabled
* Error
* Placeholder

---

## 3️⃣ Layout Components 



### 📦 Box

* Padding
* Margin
* Background
* Border

---

### 📐 Stack

* Vertical stack
* Horizontal stack
* Spacing control
* Alignment

---

### 📏 Flex

* Row / Column
* Align / Justify
* Wrap

---

### 🪟 Container

* Fixed width
* Responsive breakpoints

---

## 4️⃣ Surface Components

> Used everywhere in dashboards & SaaS apps.

### 🃏 Card

* Default
* With header/footer
* Clickable
* Elevated vs flat

---

### 🪟 Modal / Dialog

* Basic modal
* Confirm dialog
* Scrollable content
* Close behaviors (ESC, overlay)

---

### 📌 Drawer / Side Sheet

* Left / Right
* Persistent vs temporary

---

### 🧱 Divider

* Horizontal
* Vertical
* With label

---

## 5️⃣ Feedback Components 

### ⚠️ Alert

* Info
* Success
* Warning
* Error

---

### 🔔 Toast / Snackbar

* Auto dismiss
* Manual close
* Stacking behavior

---

### ⏳ Loader / Spinner

* Inline loader
* Page loader
* Skeleton loader

---

### 📊 Progress

* Linear
* Circular
* Determinate / Indeterminate

---

## 6️⃣ Navigation Components

### 🧭 Tabs

* Controlled
* Disabled tab
* Icon tabs

---

### 📂 Accordion

* Single open
* Multi open

---

### 🍔 Menu

* Dropdown menu
* Context menu

---

### 🧱 Breadcrumbs

* Long paths
* Collapsed middle items

---

### 📑 Pagination

* Controlled pagination
* Page size selector

---

## 7️⃣ Data Display Components

### 📋 Table

* Basic table
* Sortable columns
* Empty state
* Loading state

> (Don’t need full TanStack complexity — abstraction matters more.)

---

### 🏷️ Badge / Tag

* Status tags
* Removable tags

---

### 🧾 List

* Simple list
* Selectable list
* Empty state

---

## 8️⃣ Form Utilities (Advanced)


### 🧩 FormField

* Label
* Error message
* Helper text
* Required indicator

---

### 🔒 Switch / Toggle

* On / Off
* Disabled

---

### 📅 Date Picker 

* Controlled input
* Disabled dates

---

## 9️⃣ Theming & System Stories (Must Have)

### 🌗 Theme Provider

Stories:

* Light mode
* Dark mode
* Theme switcher (Storybook toolbar)

---

### ♿ Accessibility

Stories:

* Focus states
* Keyboard navigation
* ARIA behavior

---

## 🔟 Native Parity (for React Native)

In **storybook-native**, replicate:

* Button
* Text
* Input
* Card
* Stack

Same props, same variants.


