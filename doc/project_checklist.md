# PROJECT CHECKLIST

## [Phase 1 – Monorepo Setup](https://github.com/mrajkishor/rdclib/issues/1)

- [ ] Initialize pnpm workspace
- [ ] Add `turbo.json`
- [ ] Create base `tsconfig.base.json`
- [ ] Setup path aliases (`@rds/*`)
- [ ] Add ESLint + Prettier

Structure ready:

```
packages/
apps/
```

---

## [Phase 2 – Design Tokens (MOST IMPORTANT)](https://github.com/mrajkishor/rdclib/issues/3)

- [ ] Colors (light + dark ready)
- [ ] Spacing scale
- [ ] Border radius
- [ ] Font sizes
- [ ] Font weights
- [ ] Z-index scale
- [ ] Motion durations

Package:

```
packages/tokens
```

Must be:

- platform-agnostic
- no CSS
- pure TypeScript objects

---

## [Phase 3 – Shared Core Logic](https://github.com/mrajkishor/rdclib/issues/5)

- [ ] Component prop contracts
- [ ] Variant enums
- [ ] Accessibility flags
- [ ] Shared types (size, intent, state)

Package:

```
packages/ui-core
```

```
- No JSX
- No styles
- Only logic + types
```

---

## [Phase 4 – React Web Components](https://github.com/mrajkishor/rdclib/issues/7)

- [ ] Button
- [ ] Text
- [ ] Input
- [ ] Checkbox
- [ ] Card
- [ ] Stack / Flex

Package:

```
packages/ui-web
```

Each component must have:

- [ ] Typed props
- [ ] Variants
- [ ] Disabled state
- [ ] Accessible defaults

---

## Phase 5 – React Native Components

- [ ] Button
- [ ] Text
- [ ] Input
- [ ] Checkbox
- [ ] Card
- [ ] Stack

Package:

```
packages/ui-native
```

Rules:

- [ ] Use shared tokens
- [ ] Same props as web
- [ ] Native UX respected

---

## [Phase 6 – Storybook (Web)](https://github.com/mrajkishor/rdclib/issues/9)

- [ ] Setup Storybook with Vite
- [ ] Global theme provider
- [ ] Controls for variants
- [ ] Stories per component
- [ ] Docs tab enabled

App:

```
apps/storybook-web
```

---

## Phase 7 – Storybook / Expo (Native)

- [ ] Setup Expo app
- [ ] Setup Storybook
- [ ] Load ui-native components
- [ ] Test on device/emulator

App:

```
apps/storybook-native
```

---

## Phase 8 – Theming & Dark Mode

- [ ] Theme provider
- [ ] Light / Dark tokens
- [ ] Platform-agnostic API
- [ ] Storybook toggle

---

## Phase 9 – Quality & DX

- [ ] Lint rules per package
- [ ] Type checks in CI
- [ ] Build scripts per package
- [ ] Tree-shaking enabled
- [ ] Barrel exports

---

## Phase 10 – Documentation (IMPORTANT)

- [ ] README (root)
- [ ] Architecture diagram
- [ ] How to add a component
- [ ] Token philosophy
- [ ] Contribution guide

---

## Phase 11 – Publishing (Optional, Later)

- [ ] Versioning (changesets)
- [ ] Publish to npm
- [ ] Semantic versioning
- [ ] Release notes
