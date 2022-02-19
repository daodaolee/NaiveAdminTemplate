import { useMessage, useDialog, useNotification, useLoadingBar } from 'naive-ui'

const GlobalInject = () => {
  const slots = useSlots();

  // mount on window
  (Window as any).$message = useMessage();
  (Window as any).$dialog = useDialog();
  (Window as any).$notification = useNotification();
  (Window as any).$loadingBar = useLoadingBar()

  return <>{slots.default!()}</>
}

export default GlobalInject
