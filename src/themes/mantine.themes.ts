import {
  AnchorProps,
  InputStylesNames,
  InputWrapperProps,
  MantineThemeOverride,
} from '@mantine/core';

export const pineappleTheme: MantineThemeOverride = {
  defaultRadius: 0,
  black: '#343333', // this maps to text
  spacing: { xs: '.5rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2.5rem' },
  fontSizes: { xs: '.75rem', sm: '.9rem', md: '1rem', lg: '1.2rem', xl: '1.25rem' },
  colors: {
    teal: [
      '#D1F8FA',
      '#3C7C90',
      '#2C6577',
      '#1C4F5F', // navigation
      '#053947', // small text links
      /* ... */
      
    ],
    sky: [
      '#e2eef2',
      '#bdd7e0',
      '#98c0cd',
      '#72a9bb',
      '#0a819e', // primary
      '#066880', // hover and active
    ],
    gray: [
      '#ffffff',
      '#f2f2f2',
      '#dbdbdb',
      '#c4c4c4',
      '#adadad',
      '#696969',
      '#343333', // text
      '#000000',
    ],
    red: ['#ffe0e0', '#BF2222'],
    pink: [
      '#F58f8f', // notification alert
    ],
    yellow: [
      '#f8f2e6', // header and footer background
      '#e3c88a',
      '#f7ba4e',
      '#d09d5b',
    ],
    success: ['#ebfbee', '#28803a'],
    information: ['#e7f5ff', '#1864ab'],
    warning: ['#fff4e6', '#FC9403', '#c8430e'],
    error: ['#ffe0e0', '#BF2222'],
    charts: [
      '#AADA85',
      '#1E6DA8',
      '#75A8CB',
      '#58C6B3',
      '#58C6B3',
      '#F99090',
      '#B6B1D3',
      '#C6E8C0',
    ],
  },
  headings: {
    fontFamily: "'Noto Sans', 'Arial', sans-serif",
    sizes: {
      h1: { fontSize: '2.75rem', fontWeight: '700' },
      h2: { fontSize: '2rem', fontWeight: '700' },
      h3: { fontSize: '1.75rem', fontWeight: '600' },
      h4: { fontSize: '1.5rem', fontWeight: '500' },
      h5: { fontSize: '1.25rem', fontWeight: '600' },
      h6: { fontSize: '1.25rem', fontWeight: '400' },
    },
  },
  primaryColor: 'sky',
  primaryShade: 4,
  fontFamily: "'Noto Sans', 'Arial', sans-serif",

  shadows: {
    sm: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    md: '0px 12px 12px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
    lg: '0px 32px 32px -8px rgba(0, 0, 0, 0.08), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.2)',
  },
  other: {
    pageHeaderHeight: 80,
  },
  components: {
  },
};
