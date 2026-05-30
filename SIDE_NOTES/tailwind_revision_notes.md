# ⚡ Tailwind CSS Quick-Revision Notes (The 80/20 Rule)

Designed as a high-yield, zero-memorization reference guide for React development.

---

## 🧱 Module 1: Core Layout Engine (Flexbox)
In Tailwind, layout is controlled by applying utility classes directly to parent containers to govern their children.

* `flex`: Establishes a Flexbox context for the container.
* `flex-col`: Stacks child elements vertically (changes the main axis to vertical). Default is horizontal rows.
* `justify-center`: Centers child elements along the **main axis** (horizontally in rows, vertically in columns).
* `items-center`: Centers child elements along the **cross axis** (vertically in rows, horizontally in columns). Ensures elements don't look lopsided.

---

## 📐 Module 2: Spacing & Sizing Scale
Tailwind utilizes a predictable numeric scaling system where **4 units = 1rem = 16px**.

### 1. Directional Shorthand
Replace the `*` with a numeric value (e.g., `p-4`, `mx-2`):
* `p-*` / `m-*`: **All** sides (Padding / Margin).
* `py-*` / `my-*`: **Vertical** axis (Top & Bottom).
* `px-*` / `mx-*`: **Horizontal** axis (Left & Right).
* `pt-*`, `pb-*`, `pl-*`, `pr-*`: Individual sides (**T**op, **B**ottom, **L**eft, **R**ight).

### 2. Sizing Constraints
* `w-*` / `h-*`: Standard width and height metrics (e.g., `w-12 h-12` for a perfect 48px square/circle avatar).
* `w-full` / `h-full`: Spans 100% of the parent container's width or height.
* `max-w-*`: Sets an absolute ceiling boundary for an element's size. It allows fluid shrinking on mobile devices while stopping expansion on desktop screens.
    * `max-w-xs`: ~320px (Narrow inputs, tooltips)
    * `max-w-sm`: ~380px (The sweet spot for standard login or metric cards)
    * `max-w-md`: ~448px (Subscription cards, modal components)
    * `max-w-lg`: ~512px (Rich text wrappers, larger container displays)

---

## 🎨 Module 3: Typography, Colors & Aesthetics

### 1. Text Properties
* `text-xs`, `text-sm`, `text-base` (default), `text-xl`, `text-2xl`, `text-3xl`: Controls font size hierarchy.
* `font-normal`, `font-medium`, `font-semibold`, `font-bold`: Sets typographic weight.

### 2. Standard Color Scale
Formatted as `[property]-[color]-[weight]`. Scales from `50` (ultra-light tint) to `900` (deep tone).
* `bg-yellow-100`: Light yellow background.
* `bg-green-600`: Standard primary green accent.
* `text-gray-500`: Neutral muted gray for secondary captions/subtitles.
* `text-gray-950`: Ultra-dark near-black for maximum contrast readability.

### 3. Structural Borders & Elements
* `border`: Applies a default 1px border grid.
* `border-2`: Thickens outline to 2px.
* `rounded-md` / `rounded-lg` / `rounded-xl`: Increases structural corner radiuses.
* `rounded-full`: Transforms elements into perfect circles when width and height are identical.
* `overflow-hidden`: Masks and clips any child element content escaping outside its parent border boundary.

---

## ⚡ Module 4: Dynamic States & Layout Mechanics

### 1. Interactive Modifiers
* `hover:` Prefix: Attaches style properties triggered when a user pointer targets an element (e.g., `bg-green-600 hover:bg-green-800`).
* `transition-colors`: Smooths style adaptations over a duration sequence instead of an instant layout snap.

### 2. High-Yield Space Resolution Mechanics
* `gap-*`: Applied **exclusively to parent flex containers**. Injects standard padding windows strictly between adjacent child nodes without creating outer margin bugs.
* `flex-1`: Commands an individual element to aggressively fill all remaining available grid space on a line while dynamically shrinking if spatial bounds contract.
* `ml-auto`: Floats a single component to the absolute far-right boundary of a flex row by absorbing remaining whitespace variables as localized margin.
* `whitespace-nowrap`: Forces text content strings to maintain string integrity on a single layout row without unexpected line-breaking wraps.
