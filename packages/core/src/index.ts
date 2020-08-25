export enum TruncationMode {
  head,
  middle,
  tail,
}

export enum TextAlignment {
  center,
  leading,
  trailing,
}

export enum Font {
  largeTitle,
  title,
  title2,
  title3,
  headline,
  subheadline,
  body,
  callout,
  caption,
  caption2,
  footnote,
}

export enum FontStyle {
  normal,
  italic,
}

export enum FontWeight {
  normal,
  bold,
}

export interface View {
  body: () => void;
  frame?: () => View;
  fixedSize?: () => View;
  layoutPriority?: () => View;
  position?: () => View;
  offset?: () => View;
  padding?: () => View;
  cornerRadius?: () => View;
  blur?: () => View;
  opacity?: () => View;
  brightness?: () => View;
  contrast?: () => View;
  colorInvert?: () => View;
  colorMultiply?: () => View;
  saturation?: () => View;
  grayscale?: () => View;
  hueRotation?: () => View;
  liminaceToAlpha?: () => View;
  shadow?: () => View;
  blendMode?: () => View;
  compositionGroup?: () => View;
  drawingGroup?: () => View;
  animation?: () => View;
  transition?: () => View;
  border?: () => View;
  foregroundColor?: () => View;
  accentColor?: () => View;
  preferredColorScheme?: () => View;
  font?: (font: Font) => View;
  lineLimit?: () => View;
  multilineTextAlignment?: () => View;
  minimumScaleFactore?: () => View;
  truncationMode?: () => View;
  allowsTightening?: () => View;
  textContentType?: () => View;
  textCase?: () => View;
  flipsForRightToLeftLayoutDirection?: () => View;
  autocapitalization?: () => View;
  hidden?: () => View;
  disabled?: () => View;
}

export interface Button extends View {
  buttonStyle?: () => View;
}

export interface Capsule extends View {}

export interface Circle extends View {}

export interface ColorPikcer extends View {}

export interface DatePicker extends View {}

export interface Divider extends View {}

export interface Ellipse extends View {}

export interface ForEach extends View {}

export interface Form extends View {}

export interface Gauge extends View {}

export interface HStack extends View {}

export interface Image extends View {}

export interface Label extends View {}

export interface List extends View {}

export interface Path extends View {}

export interface Picker extends View {}

export interface Rectangle extends View {}

export interface RoundedReactangle extends View {}

export interface Slider extends View {}

export interface Spacer extends View {}

export interface Stepper extends View {}

export interface Text extends View {
  fontWeight: () => Text;
  bold: () => Text;
  italic: () => Text;
  strikethrough: () => Text;
  kerning: () => Text;
  underline: () => Text;
  tracking: () => Text;
  baselineOffset: () => Text;
}

export interface Toggle extends View {}

export interface VStack extends View {}

export interface ZStack extends View {}

export const sum = (a: number, b: number) => {
  return a + b;
};
