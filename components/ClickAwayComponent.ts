import { onMounted, onBeforeUnmount, Ref } from 'vue';

const ClickAwayComponent = (
  elementRef: Ref<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    const target = event.target as HTMLElement;
    if (elementRef.value && !elementRef.value.contains(target)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick);
  });
};

export default ClickAwayComponent