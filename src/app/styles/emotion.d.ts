import '@emotion/react';

declare module '@emotion/react' {
  import { ColorsType } from '@app/styles/colors.ts';
  import { FontsType } from '@app/styles/fonts.ts';

  export interface Theme extends Theme {
    colors: ColorsType;
    fonts: FontsType;
  }
}
