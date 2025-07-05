const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: 0%;
`;

const createFontStyleNew = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0%;
`;

export const fonts = {
  title1: createFontStyle('Pretendard', 600, 32, 145),
  title2: createFontStyle('Pretendard', 600, 24, 145),
  title3: createFontStyle('Pretendard', 500, 18, 145),
  labelXl: createFontStyleNew('Pretendard', 600, 36, 40),
  labelL: createFontStyleNew('Pretendard', 600, 24, 32),
  labelMB: createFontStyleNew('Pretendard', 600, 15, 24),
  labelM: createFontStyleNew('Pretendard', 500, 15, 24),
  labelS: createFontStyleNew('Pretendard', 500, 12, 16),
  body1: createFontStyle('Pretendard', 500, 15, 145),
  body2: createFontStyle('Pretendard', 400, 15, 145),
  body3: createFontStyle('Pretendard', 500, 14, 145),
  body4: createFontStyle('Pretendard', 400, 14, 145),
  caption: createFontStyle('Pretendard', 400, 12, 145),
};

export type FontsType = typeof fonts;
