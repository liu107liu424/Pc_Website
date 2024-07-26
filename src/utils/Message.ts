import { ElMessage } from 'element-plus'

function message(val: number, text: string) {
  switch (val) {
    case 0:
      return ElMessage.error(text)
    case 1:
      return ElMessage.success(text)
    case 2:
      return ElMessage.warning(text)
    case 200:
      return ElMessage.success(text)
    case 201:
      return ElMessage.error(text)
    case 400:
      return ElMessage.error(text)
  }
}
export default message; 
