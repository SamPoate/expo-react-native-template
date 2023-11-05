export type TextVariant = 'h1' | 'h2' | 'h3' | 'p' | 'bold'

export const variantStyles: Record<TextVariant, { fontFamily: string; fontSize: number; lineHeight: number }> = {
  h1: { fontFamily: 'Inter-Black', fontSize: 32, lineHeight: 48 },
  h2: { fontFamily: 'Inter-SemiBold', fontSize: 24, lineHeight: 36 },
  h3: { fontFamily: 'Inter-SemiBold', fontSize: 20, lineHeight: 28 },
  p: { fontFamily: 'Inter-Regular', fontSize: 16, lineHeight: 24 },
  bold: { fontFamily: 'Inter-Medium', fontSize: 16, lineHeight: 24 }
}
