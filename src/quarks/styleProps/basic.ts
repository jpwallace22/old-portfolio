import { Properties } from 'csstype';
import { DefaultTheme, css } from 'styled-components';

import blur, { BlurSizes } from 'atoms/blurs/blurs';
import { GetColorDefinition, GradientList, getColor, parseBackgroundGradient } from 'atoms/colors/colors';
import { ShadowDefinition, parseShadow } from 'atoms/shadows/shadows';
import { ContainerValues } from 'atoms/spacing/containers';
import { MarginDefinition, PaddingDefinition, margin, padding } from 'atoms/spacing/spacing';
import {
  FontFamilyDefinition,
  FontSizeDefinition,
  FontWeightDefinition,
  LetterSpacingDefinition,
  LineHeightDefinition,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from 'atoms/typography/typography';

const basicCSS = {
  /**
   * Element's `height`. Allows any valid px, rem, or other size value.
   */
  height: (value: Properties['height']) => css`
    height: ${value};
  `,
  /**
   * Element's `max-height`. Allows any valid px, rem, or other size value.
   */
  maxHeight: (value: Properties['maxHeight']) => css`
    max-height: ${value};
  `,
  /**
   * Element's `min-height`. Allows any valid px, rem, or other size value.
   */
  minHeight: (value: Properties['minHeight']) => css`
    min-height: ${value};
  `,
  /**
   * Element's `width`. Allows any valid px, rem, or other size value.
   */
  width: (value: Properties['width'] | ContainerValues) => css`
    width: ${value};
  `,
  /**
   * Element's `max-width`. Allows any valid px, rem, or other size value.
   */
  maxWidth: (value: Properties['maxWidth'] | ContainerValues) => css`
    max-width: ${value};
  `,
  /**
   * Element's `min-width`. Allows any valid px, rem, or other size value.
   */
  minWidth: (value: Properties['minWidth'] | ContainerValues) => css`
    min-width: ${value};
  `,
  /**
   * Element's `position`. Allows static, relative, fixed, etc.
   */
  position: (value: Properties['position']) => css`
    position: ${value};
  `,
  /**
   * Element's `top` position. Allows any valid px, rem, or other size value.
   */
  top: (value: Properties['top']) => css`
    top: ${value};
  `,
  /**
   * Element's `left` position. Allows any valid px, rem, or other size value.
   */
  left: (value: Properties['left']) => css`
    left: ${value};
  `,
  /**
   * Element's `bottom` position. Allows any valid px, rem, or other size value.
   */
  bottom: (value: Properties['bottom']) => css`
    bottom: ${value};
  `,
  /**
   * Element's `right` position. Allows any valid px, rem, or other size value.
   */
  right: (value: Properties['right']) => css`
    right: ${value};
  `,
  /**
   * Element's `z-index`. Allows any integer.
   */
  zIndex: (value: Properties['zIndex']) => css`
    z-index: ${value};
  `,
  /**
   * Element's `margin` for all 4 directions. Only allows values from the `spacing` atom or `auto`.
   */
  marginAll: (value: MarginDefinition) => css`
    margin: ${margin[value]};
  `,
  /**
   * Element's `margin-left` and `margin-right`. Only allows values from the `spacing` atom or `auto`.
   */
  marginX: (value: MarginDefinition) => css`
    margin-left: ${margin[value]};
    margin-right: ${margin[value]};
  `,
  /**
   * Element's `margin-top` and `margin-bottom`. Only allows values from the `spacing` atom or `auto`.
   */
  marginY: (value: MarginDefinition) => css`
    margin-top: ${margin[value]};
    margin-bottom: ${margin[value]};
  `,
  /**
   * Element's `margin-top`. Only allows values from the `spacing` atom or `auto`.
   */
  marginTop: (value: MarginDefinition) => css`
    margin-top: ${margin[value]};
  `,
  /**
   * Element's `margin-bottom`. Only allows values from the `spacing` atom or `auto`.
   */
  marginBottom: (value: MarginDefinition) => css`
    margin-bottom: ${margin[value]};
  `,
  /**
   * Element's `margin-left`. Only allows values from the `spacing` atom or `auto`.
   */
  marginLeft: (value: MarginDefinition) => css`
    margin-left: ${margin[value]};
  `,
  /**
   * Element's `margin-right`. Only allows values from the `spacing` atom or `auto`.
   */
  marginRight: (value: MarginDefinition) => css`
    margin-right: ${margin[value]};
  `,
  /**
   * Element's `padding` for all 4 directions. Only allows values from the `spacing` atom.
   */
  paddingAll: (value: PaddingDefinition) => css`
    padding: ${padding[value]};
  `,
  /**
   * Element's `padding-left` and `padding-right`. Only allows values from the `spacing` atom.
   */
  paddingX: (value: PaddingDefinition) => css`
    padding-left: ${padding[value]};
    padding-right: ${padding[value]};
  `,
  /**
   * Element's `padding-top` and `padding-bottom`. Only allows values from the `spacing` atom.
   */
  paddingY: (value: PaddingDefinition) => css`
    padding-top: ${padding[value]};
    padding-bottom: ${padding[value]};
  `,
  /**
   * Element's `padding-top`. Only allows values from the `spacing` atom.
   */
  paddingTop: (value: PaddingDefinition) => css`
    padding-top: ${padding[value]};
  `,
  /**
   * Element's `padding-bottom`. Only allows values from the `spacing` atom.
   */
  paddingBottom: (value: PaddingDefinition) => css`
    padding-bottom: ${padding[value]};
  `,
  /**
   * Element's `padding-left`. Only allows values from the `spacing` atom.
   */
  paddingLeft: (value: PaddingDefinition) => css`
    padding-left: ${padding[value]};
  `,
  /**
   * Element's `padding-right`. Only allows values from the `spacing` atom.
   */
  paddingRight: (value: PaddingDefinition) => css`
    padding-right: ${padding[value]};
  `,
  /**
   * Element's `background-image`. Accepts a URL.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  backgroundImage: (value: GradientList | (string & {})) => css`
    background-image: ${value && parseBackgroundGradient(value)};
  `,
  /**
   * Element's `background-position` value.
   */
  backgroundPosition: (value: Properties['backgroundPosition']) => css`
    background-position: ${value};
  `,
  /**
   * Element's `background-repeat` value.
   */
  backgroundRepeat: (value: Properties['backgroundRepeat']) => css`
    background-repeat: ${value};
  `,
  /**
   * Element's `background-origin` value.
   */
  backgroundOrigin: (value: Properties['backgroundOrigin']) => css`
    background-origin: ${value};
  `,
  /**
   * Element's `background-clip` value.
   */
  backgroundClip: (value: Properties['backgroundClip']) => css`
    background-clip: ${value};
  `,
  /**
   * Element's `background-attachment` value. Sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   */
  backgroundAttachment: (value: Properties['backgroundAttachment']) => css`
    background-attachment: ${value};
  `,
  /**
   * Element's `background-size` value.
   */
  backgroundSize: (value: Properties['backgroundSize']) => css`
    background-size: ${value};
  `,
  /**
   * Element's `background-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  backgroundColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    background-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border` value. Accepts any valid string.
   */
  border: (value: Properties['border']) => css`
    border: ${value};
  `,
  /**
   * Element's `border-left` value. Accepts any valid string.
   */
  borderLeft: (value: Properties['borderLeft']) => css`
    border-left: ${value};
  `,
  /**
   * Element's `border-right` value. Accepts any valid string.
   */
  borderRight: (value: Properties['borderRight']) => css`
    border-right: ${value};
  `,
  /**
   * Element's `border-top` value. Accepts any valid string.
   */
  borderTop: (value: Properties['borderTop']) => css`
    border-top: ${value};
  `,
  /**
   * Element's `border-bottom` value. Accepts any valid string.
   */
  borderBottom: (value: Properties['borderBottom']) => css`
    border-bottom: ${value};
  `,
  /**
   * Element's `border-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  borderColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border-bottom-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  borderBottomColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-bottom-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border-top-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  borderTopColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-top-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border-left-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  borderLeftColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-left-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border-right-color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  borderRightColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-right-color: ${getColor(palette, value)};
  `,
  /**
   * Element's `border-bottom-left-radius` value. Accepts any px or % value.
   */
  borderBottomLeftRadius: (value: Properties['borderBottomLeftRadius']) => css`
    border-bottom-left-radius: ${value};
  `,
  /**
   * Element's `border-bottom-right-radius` value. Accepts any px or % value.
   */
  borderBottomRightRadius: (value: Properties['borderBottomRightRadius']) => css`
    border-bottom-right-radius: ${value};
  `,
  /**
   * Element's `border-top-left-radius` value. Accepts any px or % value.
   */
  borderTopLeftRadius: (value: Properties['borderTopLeftRadius']) => css`
    border-top-left-radius: ${value};
  `,
  /**
   * Element's `border-top-right-radius` value. Accepts any px or % value.
   */
  borderTopRightRadius: (value: Properties['borderTopRightRadius']) => css`
    border-top-right-radius: ${value};
  `,
  /**
   * Element's `border-radius` value. Accepts any px or % value.
   */
  borderRadius: (value: Properties['borderRadius']) => css`
    border-radius: ${value};
  `,
  /**
   * Element's `border-collapse` value. Accepts `collapse` or `separate`.
   */
  borderCollapse: (value: Properties['borderCollapse']) => css`
    border-collapse: ${value};
  `,
  /**
   * Element's `border-width`. Accepts any valid size value
   */
  borderWidth: (value: Properties['borderWidth']) => css`
    border-width: ${value};
  `,
  /**
   * Element's `border-style`. Accepts any valid line style
   */
  borderStyle: (value: Properties['borderStyle']) => css`
    border-style: ${value};
  `,
  /**
   * Element's `text-transform`. Useful for setting text to be all uppercase/lowercase etc.
   */
  textTransform: (value: Properties['textTransform']) => css`
    text-transform: ${value};
  `,
  /**
   * Element's `color` value. Only accepts values from the `color` atom.
   * Also accepts an object with light/dark values. Ex. { light: "common-black", dark: "common-white" }
   */
  textColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    color: ${getColor(palette, value)};
  `,
  /**
   * Element's `cursor` value.
   */
  cursor: (value: Properties['cursor']) => css`
    cursor: ${value};
  `,
  /**
   * Element's `opacity`. Accepts any number of percentage
   */
  opacity: (value: Properties['opacity']) => css`
    opacity: ${value};
  `,
  /**
   * Element's `filter`. Accepts any filtering properties: blur, brightness, invert, etc.
   */
  filter: (value: Properties['filter']) => css`
    filter: ${value};
  `,
  /**
   * Element's `backdrop-filter`. Accepts any filtering properties: blur, brightness, invert, etc.
   */
  backdropFilter: (value: BlurSizes) => css`
    backdrop-filter: ${blur.sizing[value]};
  `,
  /**
   * Element's `transform`. Accepts any transform properties: translate, scale, etc.
   */
  transform: (value: Properties['transform']) => css`
    transform: ${value};
  `,
  /**
   * Element's `transition`. Accepts any transform properties: translate, scale, etc.
   */
  transition: (value: Properties['transition']) => css`
    transition: ${value};
  `,
  /**
   * Element's `animation`. Accepts any animation properties: delay, direction, duration, etc.
   */
  animation: (value: Properties['animation']) => css`
    animation: ${value};
  `,
  /**
   * Element's `mix-blend-mode`. Sets how an element's content should blend with the content of the element's parent and the element's background
   */
  mixBlendMode: (value: Properties['mixBlendMode']) => css`
    mix-blend-mode: ${value};
  `,
  /**
   * Element's `background-blend-mode`. Sets how an element's background images should blend with each other and with the element's background color.
   */
  backgroundBlendMode: (value: Properties['backgroundBlendMode']) => css`
    background-blend-mode: ${value};
  `,
  /**
   * Recommended values: `xs`,`sm`,`md`,`lg`,`xl`,`xxl` and `xxxl` but any string is valid.
   * Also accepts an object with light/dark values. Ex. { light: "xs", dark: "md" }
   */
  boxShadow: (value: ShadowDefinition, palette: DefaultTheme['palette']) => css`
    box-shadow: ${parseShadow(palette, value)};
  `,
  /**
   * Element's `text-shadow`. Accepts any valid text-shadow string.
   */
  textShadow: (value: Properties['textShadow']) => css`
    text-shadow: ${value};
  `,
  /**
   * Element's `visibility`. Accepts `visible`, `hidden`, or `collapse`
   */
  visibility: (value: Properties['visibility']) => css`
    visibility: ${value};
  `,
  /**
   * Element's `display`. Accepts `block`, `flex`, `grid`, `none`, `inline`, etc.
   */
  display: (value: Properties['display']) => css`
    display: ${value};
  `,
  /**
   * Element's `overflow-x`. Accepts `visible`, `hidden`, `scroll`, `auto`, etc.
   */
  overflowX: (value: Properties['overflowX']) => css`
    overflow-x: ${value};
  `,
  /**
   * Element's `overflow-y`. Accepts `visible`, `hidden`, `scroll`, `auto`, etc.
   */
  overflowY: (value: Properties['overflowY']) => css`
    overflow-y: ${value};
  `,
  /**
   * Element's `text-overflow`. Accepts `clip`, `ellipse`, `-`, etc.
   */
  textOverflow: (value: Properties['textOverflow']) => css`
    text-overflow: ${value};
  `,
  /**
   * Element's `box-sizing`. Accepts `border-box`, `content-box`, etc.
   */
  boxSizing: (value: Properties['boxSizing']) => css`
    box-sizing: ${value};
  `,
  /**
   * Element's `float`. Accepts `left`, `right`, `none`
   */
  float: (value: Properties['float']) => css`
    float: ${value};
  `,
  /**
   * Element's `object-fit`. Accepts `cover`, `contain`, `fill`, etc.
   */
  objectFit: (value: Properties['objectFit']) => css`
    object-fit: ${value};
  `,
  /**
   * Element's `object-position`. Accepts `top`, `bottom`, `50% 50%`, etc.
   */
  objectPosition: (value: Properties['objectPosition']) => css`
    object-position: ${value};
  `,
  /**
   * Element's `align-self`. Accepts `top`, `bottom`, `50% 50%`, etc.
   */
  alignSelf: (value: Properties['alignSelf']) => css`
    align-self: ${value};
  `,
  /**
   * Element's `flex` shorthand property. Accepts `1`, `1 30px`, `1 1 100px`, etc.
   */
  flex: (value: Properties['flex']) => css`
    flex: ${value};
  `,
  /**
   * Element's `justify-self`. Accepts `stretch`, `center`, `end`, etc.
   */
  justifySelf: (value: Properties['justifySelf']) => css`
    justify-self: ${value};
  `,
  /**
   * Element's `font-size`. Only accepts number values from `fontSize` object in `typography` atom.
   */
  fontSize: (value: FontSizeDefinition) => css`
    font-size: ${fontSize[value]};
  `,
  /**
   * Element's `font-weight`. Only accepts values from `fontWeight` object in `typography` atom.
   */
  fontWeight: (value: FontWeightDefinition) => css`
    font-weight: ${fontWeight[value]};
  `,
  /**
   * Element's `font-family`. Only accepts values from `fontFamily` object in `typography` atom.
   */
  fontFamily: (value: FontFamilyDefinition) => css`
    font-family: ${fontFamily[value]};
  `,
  /**
   * Element's `letter-spacing`. Only accepts values from `letterSpacing` object in `typography` atom.
   */
  letterSpacing: (value: LetterSpacingDefinition) => css`
    letter-spacing: ${letterSpacing[value]};
  `,
  /**
   * Element's `line-height`. Only accepts values from `lineHeight` object in `typography` atom.
   */
  lineHeight: (value: LineHeightDefinition) => css`
    line-height: ${lineHeight[value]};
  `,
  /**
   * Element's `font-style`. Accepts `normal`, `italic`, `oblique` etc.
   */
  fontStyle: (value: Properties['fontStyle']) => css`
    font-style: ${value};
  `,
  /**
   * Element's `line-clamp`. Accepts `none` or any integer. Useful for replacing overflow text with an ellipsis.
   * Not support in Internet Explorer.
   */
  lineClamp: (value: Properties['lineClamp']) => css`
    -webkit-line-clamp: ${value};
  `,
  /**
   * Element's `font-variant`. Accepts `small-caps`, `common-ligatures`, `normal` etc.
   */
  fontVariant: (value: Properties['fontVariant']) => css`
    font-variant: ${value};
  `,
  /**
   * Element's `text-align`. Accepts `start`, `end`, `center`, `justify` etc.
   */
  textAlign: (value: Properties['textAlign']) => css`
    text-align: ${value};
  `,
  /**
   * Element's `text-decoration`. Accepts `underline`, `dotted`, `overline red` etc.
   */
  textDecoration: (value: Properties['textDecoration']) => css`
    text-decoration: ${value};
  `,
  /**
   * Element's `vertical-align`. Accepts `baseline`, `top`, `middle` etc.
   */
  verticalAlign: (value: Properties['verticalAlign']) => css`
    vertical-align: ${value};
  `,
  /**
   * Element's `white-space`. Accepts `normal`, `nowrap`, `break-spaces` etc.
   */
  whiteSpace: (value: Properties['whiteSpace']) => css`
    white-space: ${value};
  `,
  /**
   * Element's `outline`. Accepts `solid`, `dashed`, `1rem thick` etc.
   */
  outline: (value: Properties['outline']) => css`
    outline: ${value};
  `,
  /**
   * Element's `resize`. Accepts `both`, `horizontal`, `vertical`, `inline`, `block`, or `none`
   */
  resize: (value: Properties['resize']) => css`
    resize: ${value};
  `,
  /**
   * Element's `contain`. Accepts `none`, `paint`, `layout` etc.
   * `paint` is useful for imitating `overflow: hidden` without breaking `position: sticky`
   */
  contain: (value: Properties['contain']) => css`
    contain: ${value};
  `,
  /**
   * The aspect-ratio CSS property sets a preferred aspect ratio for the box,
   * which will be used in the calculation of auto sizes and some other layout functions.
   */
  aspectRatio: (value: [number, number]) => css`
    aspect-ratio: ${value[0]} / ${value[1]};
  `,
};

export default basicCSS;
