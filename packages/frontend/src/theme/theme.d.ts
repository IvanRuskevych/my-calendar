// theme.d.ts (наприклад у папці src/types або src/theme)
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomColors {
    weekend: string;
    today: string;
    dividerFixed: string;
  }

  interface Palette {
    customColors: CustomColors;
  }

  interface PaletteOptions {
    customColors?: Partial<CustomColors>;
  }
}
