

# 📱 React Native – Storybook Component Inventory

*(apps/storybook-native)*


---

## 1️⃣ Foundations (Docs-Only Stories)

> Same tokens as web, but **visualized for mobile density & touch**.

### 🎨 Tokens (Docs-only)

* Colors (Light / Dark)
* Typography scale (mobile-optimized)
* Spacing scale (8-pt / 4-pt grid)
* Border radius
* Shadows / Elevation (Android + iOS)
* Z-index
* Motion / Animation tokens

**Stories**

* `Colors.stories.tsx`
* `Typography.stories.tsx`
* `Spacing.stories.tsx`
* `Elevation.stories.tsx`
* `Motion.stories.tsx`

> There's **platform differences** (RN ≠ CSS).

---

## 2️⃣ Primitive Components (Core UI)

> These must feel **native**, not “web copied to mobile”.

---

### 🔘 Button

Variants:

* Primary / Secondary / Ghost / Destructive
* Sizes (sm, md, lg)
* Disabled
* Loading
* Icon button
* Full-width (mobile default)

Stories:

* Variants
* Sizes
* With icon
* Loading
* Press feedback (ripple / opacity)

---

### 📝 Text

* Heading (h1–h6)
* Body
* Caption
* Muted / Secondary
* Mono (optional)

Stories:

* All text roles
* Line clamp
* Scaling (fontScale)

---

### 🧾 Input

* Text
* Password
* Email
* Numeric
* Search
* Error state
* Disabled
* With icon / prefix

Stories:

* Default
* Error
* Disabled
* Controlled input
* Keyboard types

---

### ☑️ Checkbox

* Checked
* Unchecked
* Indeterminate
* Disabled
* Touch target demo

---

### 🔘 Radio

* Grouped radios
* Disabled
* Vertical list (mobile-first)

---

### 🔒 Switch / Toggle

* On / Off
* Disabled
* Platform-specific visuals

---

## 3️⃣ Layout Components 


---

### 📦 Box

* Padding
* Margin
* Background
* Border
* SafeArea aware

---

### 📐 Stack

* Vertical stack
* Horizontal stack
* Gap control
* Alignment

---

### 📏 Flex

* Row / Column
* Align / Justify
* Wrap

---

### 🪟 Container

* Screen container
* Scrollable container
* SafeArea support

---

## 4️⃣ Surface Components

> Used in **mobile dashboards & lists**.

---

### 🃏 Card

* Default
* Pressable
* With header/footer
* Elevated vs flat

---

### 🪟 Modal / Bottom Sheet

* Center modal
* Bottom sheet (mobile-native)
* Scrollable content
* Back button handling

---

### 📌 Drawer

* Left / Right
* Gesture enabled
* Overlay dismiss

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
* Inline vs banner

---

### 🔔 Toast / Snackbar

* Auto dismiss
* Manual close
* Bottom anchored
* Stacking behavior

---

### ⏳ Loader / Spinner

* Inline loader
* Full-screen loader
* Skeleton loader (RN-style)

---

### 📊 Progress

* Linear
* Circular
* Determinate / Indeterminate

---

## 6️⃣ Navigation Components (Mobile-First)



### 🧭 Tabs

* Top tabs
* Icon tabs
* Scrollable tabs
* Controlled state

---

### 📂 Accordion

* Single open
* Multi open
* Animated expand/collapse

---

### 🍔 Menu

* Action menu
* Context menu
* Long-press support

---

### 🧱 Breadcrumbs

*(Optional – mostly tablet use)*

* Truncated path
* Scrollable

---

## 7️⃣ Data Display Components

> Mobile-friendly data presentation.

---

### 🧾 List

* FlatList wrapper
* Selectable list
* Empty state
* Loading state

---

### 🏷️ Badge / Tag

* Status tags
* Count badges
* Removable tags

---

### 🧑 Avatar

* Image avatar
* Initials
* Online status

---

## 8️⃣ Form Utilities (Advanced)



### 🧩 FormField

* Label
* Error message
* Helper text
* Required indicator

---

### 📅 Date Picker

* Native picker integration
* Disabled dates
* Controlled value

---

### 🔢 OTP / Pin Input (Very impressive)

* Auto focus
* Auto advance
* Masked input

---

## 9️⃣ Theming & System Stories (Must-Have)

---

### 🌗 Theme Provider

Stories:

* Light mode
* Dark mode
* System theme sync
* Theme switcher (storybook toolbar)

---

### ♿ Accessibility

Stories:

* Font scaling
* Screen reader labels
* Touch target size
* Focus order

---

## 🔟 Web ↔ Native Parity

In **storybook-native**, replicate these from web:

* Button
* Text
* Input
* Card
* Stack
* Box

> Same props
 Same variants
 Same naming


