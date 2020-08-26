export interface AdditiveArithmetic {
  zero: AdditiveArithmetic;
}

export interface Animatable {}

export type AnimatableData = {
  animatableData: AnimatableData;
};

export interface Button extends View {
  buttonStyle?: () => Button;
}

export interface Capsule extends View, Animatable, Shape {
  style: RoundedCornerStyle;
  animatableData: EmptyAnimatableData;
}

export interface Circle extends View {}

export interface ColorPikcer extends View {}

export interface DatePicker extends View {}

export interface Divider extends View {}

export interface Double {}

export interface Ellipse extends View {}

export interface EmptyAnimatableData
  extends AdditiveArithmetic,
    VectorArithmetic {}

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

export interface ForEach extends View {}

export interface Form extends View {}

export interface Gauge extends View {}

export interface HStack extends View {}

export interface Image extends View {}

export interface Int {}

export type InsetShape = InsettableShape;

export interface InsettableShape extends Shape {
  strokeBorder: () => View;
  inset: () => InsetShape;
}

export interface Label extends View {}

export interface List extends View {}

export interface Path extends View {}

export interface Picker extends View {}

export interface Rectangle extends View {}

export enum RoundedCornerStyle {
  circular,
  continuous,
}

export interface RoundedReactangle extends View {}

export interface Shape extends View, Animatable {}

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

export enum TextAlignment {
  center,
  leading,
  trailing,
}

export interface Toggle extends View {}

export enum TruncationMode {
  head,
  middle,
  tail,
}

export interface VStack extends View {}

export interface VectorArithmetic extends AdditiveArithmetic {
  scale: () => void;
  magnitudeSquared: Double;
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

export interface ZStack extends View {}

export const sum = (a: number, b: number) => {
  return a + b;
};
