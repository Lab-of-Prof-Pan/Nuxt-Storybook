import type { Meta, StoryObj } from '@storybook-vue/nuxt';
import Button from '../components/TestBtn.vue';

const meta = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
      description: '按鈕變體樣式',
      defaultValue: 'primary'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '按鈕尺寸',
      defaultValue: 'medium'
    },
    label: {
      control: 'text',
      description: '按鈕文字'
    },
    rounded: {
      control: 'boolean',
      description: '是否使用圓角樣式'
    },
    outlined: {
      control: 'boolean',
      description: '是否使用描邊樣式'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按鈕'
    },
    loading: {
      control: 'boolean',
      description: '是否顯示載入狀態'
    },
    rightIcon: {
      control: 'text',
      description: '右側圖示'
    },
    onClick: {
      action: 'clicked',
      description: '點擊事件'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基礎按鈕
export const Default: Story = {
  args: {
    label: '按鈕'
  }
};

// 變體示例
export const Primary: Story = {
  args: {
    label: '主要按鈕',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: '次要按鈕',
    variant: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    label: '危險按鈕',
    variant: 'danger'
  }
};

export const Success: Story = {
  args: {
    label: '成功按鈕',
    variant: 'success'
  }
};

// 尺寸示例
export const Small: Story = {
  args: {
    label: '小按鈕',
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    label: '大按鈕',
    size: 'large'
  }
};

// 外觀變化
export const Rounded: Story = {
  args: {
    label: '圓角按鈕',
    rounded: true
  }
};

export const Outlined: Story = {
  args: {
    label: '描邊按鈕',
    outlined: true
  }
};

// 狀態示例
export const Disabled: Story = {
  args: {
    label: '禁用按鈕',
    disabled: true
  }
};

export const Loading: Story = {
  args: {
    label: '載入中',
    loading: true
  }
};

// 帶圖示
export const WithRightIcon: Story = {
  args: {
    label: '下一步',
    rightIcon: '→'
  }
};

// slot 示例
export const WithSlot: Story = {
  args: {
    label: '自定義內容'
  }
};
