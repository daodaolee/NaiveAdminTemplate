import { FormRules, NButton, NCol, NForm, NFormItem, NInput, NRow, useMessage } from 'naive-ui'
import '@/styles/login.scss'
import { Fragment } from 'vue'

export default defineComponent({
  name: 'login',
  setup() {
    const message = useMessage()
    const loginForm = reactive({
      username: "",
      password: ""
    })

    const rules: FormRules = reactive({
      username: [{ required: true, message: '账号不能为空', trigger: ['blur'] }],
      password: [{ required: true, message: '请输入密码' }]
    })

    const loginFormRef = ref<HTMLFormElement | null>(null)

    const handleLogin = (e: MouseEvent) => {
      e.preventDefault()
      loginFormRef.value!.validate((err: Error | boolean) => {
        if (!err) {
          message.success("验证成功！")
        } else {
          message.error("验证失败")
        }
      })
    }

    return () => (
      <div class="login-page">
        <div class="login-form">
          <NForm
            model={loginForm}
            size="large"
            ref={loginFormRef}
            rules={rules}
            labelPlacement="left"
          >
            <NFormItem path="username">
              <NInput v-model:value={loginForm.username} placeholder="请输入账号">
              </NInput>
            </NFormItem>
            <NFormItem path="password">
              <NInput v-model:value={loginForm.password} type="password"  placeholder="请输入密码"/>
            </NFormItem>
            <NRow >
              <NCol span={24}>
                <div>
                  <NButton class="w100" onClick={handleLogin} type="primary">
                    登录
                  </NButton>
                </div>
              </NCol>
            </NRow>
          </NForm>
        </div>
      </div>
    )
  }
})