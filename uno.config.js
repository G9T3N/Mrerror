import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    colors: {
      primary: '#297f29',
      secondary: '#abb2bf',
      background: '#282c33',
    },
    fontFamily: {
      'fira': ['Fira Code', 'monospace'],
    },
  },
  shortcuts: {
    'btn-primary': 'px-4 py-2 border border-primary text-white text-base font-medium hover:bg-primary transition-colors',
    'btn-secondary': 'px-4 py-2 border border-secondary text-secondary text-base font-medium hover:bg-secondary hover:text-background transition-colors',
    'section-title': 'flex items-start text-primary text-[32px] font-medium',
    'section-title-hash': 'text-primary text-[32px] font-medium',
    'section-title-text': 'text-white text-[32px] font-medium',
  },
})

