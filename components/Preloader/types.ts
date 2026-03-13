export interface BaseItemConfig {
  id: string
  x: number // percent
  y: number // percent
  floatAmplitude: number
  floatSpeed: number
  floatPhaseOffset: number
  draggable: boolean
}

export interface WordCardConfig extends BaseItemConfig {
  type: 'word-card'
  text: string
  fontSize: number
  color: string
  italic?: boolean
}

export interface TagPillConfig extends BaseItemConfig {
  type: 'tag-pill'
  text: string
}

export interface ImagePlaceholderConfig extends BaseItemConfig {
  type: 'image-placeholder'
  width: number
  height: number
  rotate: number
}

export interface QuoteFragmentConfig extends BaseItemConfig {
  type: 'quote-fragment'
  text: string
}

export interface YearStampConfig extends BaseItemConfig {
  type: 'year-stamp'
  text: string
}

export interface StatusDotConfig extends BaseItemConfig {
  type: 'status-dot'
  text: string
}

export type AnyItemConfig =
  | WordCardConfig
  | TagPillConfig
  | ImagePlaceholderConfig
  | QuoteFragmentConfig
  | YearStampConfig
  | StatusDotConfig
