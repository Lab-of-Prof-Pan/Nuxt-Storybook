// > 需使用 === 8.0.0 版本，或 8.4.x 以上版本，避免報錯
import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
