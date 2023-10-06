import { Layout } from "@keybr/layout";
import { booleanProp, xitemProp } from "@keybr/settings";

export const keyboardProps = {
  layout: xitemProp("keyboard.layout", Layout.ALL, Layout.getDefault()),
  emulate: booleanProp("keyboard.emulate", false),
} as const;