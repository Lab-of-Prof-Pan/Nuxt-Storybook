<script setup lang="ts">
  interface ButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
    outlined?: boolean;
    disabled?: boolean;
    loading?: boolean;
    rightIcon?: string;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    label: '',
    variant: 'primary',
    size: 'medium',
    rounded: false,
    outlined: false,
    disabled: false,
    loading: false,
    rightIcon: ''
  });

  const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
  }>();

  const handleClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
      emit('click', event);
    }
  };
</script>

<template>
  <button
    :class="{
      primary: variant === 'primary',
      secondary: variant === 'secondary',
      danger: variant === 'danger',
      success: variant === 'success',
      small: size === 'small',
      large: size === 'large',
      rounded: rounded,
      outlined: outlined,
      disabled: disabled || loading,
      loading: loading
    }"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else-if="$slots.default"></slot>
    <span v-else>{{ label }}</span>
    <span v-if="rightIcon" class="right-icon">{{ rightIcon }}</span>
  </button>
</template>

<style scoped>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: sans-serif;
    font-weight: 500;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    padding: 8px 16px;
    font-size: 14px;
    min-width: 100px;
  }

  /* Variants */
  .primary {
    background-color: #007bff;
    color: white;
  }

  .primary:hover:not(:disabled) {
    background-color: #0056b3;
  }

  .secondary {
    background-color: #6c757d;
    color: white;
  }

  .secondary:hover:not(:disabled) {
    background-color: #545b62;
  }

  .danger {
    background-color: #dc3545;
    color: white;
  }

  .danger:hover:not(:disabled) {
    background-color: #c82333;
  }

  .success {
    background-color: #28a745;
    color: white;
  }

  .success:hover:not(:disabled) {
    background-color: #218838;
  }

  /* Sizes */
  .small {
    padding: 4px 12px;
    font-size: 12px;
    min-width: 80px;
  }

  .large {
    padding: 12px 24px;
    font-size: 16px;
    min-width: 120px;
  }

  /* Modifiers */
  .rounded {
    border-radius: 25px;
  }

  .outlined {
    background-color: transparent;
    border: 2px solid currentColor;
  }

  .outlined.primary {
    color: #007bff;
  }

  .outlined.secondary {
    color: #6c757d;
  }

  .outlined.danger {
    color: #dc3545;
  }

  .outlined.success {
    color: #28a745;
  }

  /* States */
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loading {
    position: relative;
    cursor: wait;
  }

  /* Loading Spinner */
  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Right Icon */
  .right-icon {
    margin-left: 4px;
  }
</style>
