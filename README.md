# Quasar App Extension confirm-button

> A Quasar App Extension that provides an enhanced confirm button with built-in confirmation prompts. Ideal for actions that require user confirmation before execution.

## Features
- ✅ Simple integration with Quasar UI  
- ✅ Default messages designed for object deletion  
- ✅ Option to set `lang="el"` to translate default texts to Greek  
- ✅ Customizable texts via `labelYes`, `labelNo`, `message`, and `caption` attributes  

[![npm](https://img.shields.io/npm/v/quasar-app-extension-confirm-button.svg?label=quasar-app-extension-confirm-button)](https://www.npmjs.com/package/quasar-app-extension-confirm-button)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-confirm-button.svg)](https://www.npmjs.com/package/quasar-app-extension-confirm-button)

# Install
```bash
quasar ext add @gentsidis/confirm-button
```
Quasar CLI will retrieve it from NPM and install the extension.

# Uninstall
```bash
quasar ext remove @gentsidis/confirm-button
```

## Props & Customization

The `q-confirm-button` component provides a range of customizable props. **All props are optional**, and the component will work with default values if not provided.

### 1️⃣ Button Props
These props affect the **button appearance and behavior**:

| Prop           | Type                | Default     | Description |
|---------------|---------------------|------------|-------------|
| `icon`        | `String`            | `'delete'`  | Icon displayed inside the button. |
| `label`       | `String`            | `''`        | Button text. No text for a icon-only button. |
| `disabled`    | `Boolean`           | `false`     | Disables the button if set to `true`. |

### 2️⃣ Confirmation Dialog Props
These props control the appearance and behavior of the **confirmation prompt**:

| Prop           | Type                | Default     | Description |
|---------------|---------------------|------------|-------------|
| `type`        | `String`            | `'warning'` | Type of the confirmation dialog (e.g., `'info'`, `'warning'`, `'negative'`). |
| `color`       | `String`            | `'warning'` | Background color of the confirmation dialog. |
| `textColor`   | `String`            | `'primary'` | Text color inside the confirmation dialog. |
| `message`     | `String`  | `null`      | Custom confirmation message. Defaults to a deletion message. |
| `caption`     | `String`  | `null`      | Additional caption below the message. |
| `labelYes`    | `String`            | `''`        | Label for the "Yes" confirmation button. |
| `labelNo`     | `String`            | `''`        | Label for the "No" cancel button. |
| `lang`        | `String`            | `'en-US'`   | Set to `'el'` for Greek messages or provide custom texts. |
| `notifyIcon`  | `String`            | `''`        | Icon displayed in the notification. |
| `iconColor`   | `String`            | `'primary'` | Color of the icon in the confirmation dialog. |
| `avatar`      | `String`            | `''`        | URL or name of an avatar image inside the dialog. |
| `spinner`     | `Boolean`           | `false`     | Shows a loading spinner while waiting for confirmation. |
| `spinnerColor` | `String`           | `'primary'` | Color of the loading spinner. |
| `spinnerSize` | `String`            | `'20px'`    | Size of the loading spinner. |
| `position`    | `String`            | `'bottom'`  | Position of the confirmation dialog on the screen. |
| `timeout`     | `Number`            | `5000`      | Auto-close timeout in milliseconds. |
| `progress`    | `Boolean`           | `true`      | Enables a progress bar showing timeout duration. |
| `badgeColor`  | `String`            | `'orange'`  | Background color of the badge (if used). |
| `badgeTextColor` | `String`         | `'primary'` | Text color of the badge. |
| `badgePosition` | `String`          | `'top left'` | Position of the badge (e.g., `'bottom right'`). |
| `badgeStyle`  | `String / Array / Object` | `''` | Custom styling for the badge. |
| `badgeClass`  | `String / Array / Object` | `''` | Custom class for the badge. |
| `progressClass` | `String / Array / Object` | `''` | Custom class for the progress bar. |
| `classes`     | `String`            | `''`        | Additional CSS classes for the button. |
| `attrs`       | `Object`            | `{ role: 'alertdialog' }` | Custom attributes for accessibility. |

## 🔄 Emits (Events)

The `q-confirm-button` component emits events when the confirmation dialog is used. You can listen to these events to trigger actions in your app.

| Event Name   | Payload | Description |
|-------------|---------|-------------|
| `@confirmed`  | None    | Emitted when the user clicks **Yes** to confirm the action. |
| `@canceled`   | None    | Emitted when the user clicks **No** or closes the dialog. |
| `@dismissed`    | None    | Emitted when the the dialog is closed by timeout. |

---

### 🎯 **Example Usage**
```html
<q-confirm-button 
  label="Delete"
  icon="warning"
  color="red"
  message="Are you sure you want to delete this item?"
  caption="This action cannot be undone."
  labelYes="Yes, Delete"
  labelNo="Cancel"
  lang="el"
  @confirmed="onDelete"
  @canceled="onCancel"
  @dismissed="onDismiss"
/>
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Gkentsidis Apostolos <gentsidis@gmail.com>
