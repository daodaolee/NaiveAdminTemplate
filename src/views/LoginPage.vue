<template>
  <div class="loginpage">
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
    >
      <n-form-item
        path="age"
        label="年龄"
      >
        <n-input
          v-model:value="model.age"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item
        path="password"
        label="密码"
      >
        <n-input
          v-model:value="model.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item
        first
        path="reenteredPassword"
        label="重复密码"
      >
        <n-input
          v-model:value="model.reenteredPassword"
          :disabled="!model.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div >
            <n-button
              :disabled="model.age === null"
              round
              type="primary"
              @click="handleValidateButtonClick"
            >
              验证
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const formRef = ref(null)
    const message = useMessage()
    const modelRef = ref({
      age: null,
      password: null,
      reenteredPassword: null
    })
    // function validatePasswordStartWith (rule, value) {
    //   return (
    //     modelRef.value.password &&
    //     modelRef.value.password.startsWith(value) &&
    //     modelRef.value.password.length >= value.length
    //   )
    // }
    function validatePasswordSame (rule: any, value:any) {
      return value === modelRef.value.password
    }
    return {
      formRef,
      model: modelRef,
      rules: {
        age: [
          {
            required: true,
            validator (rule: any, value: string) {
              if (!value) {
                return new Error('需要年龄')
              } else if (!/^\d*$/.test(value)) {
                return new Error('年龄应该为整数')
              } else if (Number(value) < 18) {
                return new Error('年龄应该超过十八岁')
              }
              return true
            },
            trigger: ['input', 'blur']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ],
        reenteredPassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: ['input', 'blur']
          },
          {
            validator: validatePasswordSame,
            message: '两次密码输入不一致',
            trigger: ['blur', 'password-input']
          }
        ]
      },
      handleValidateButtonClick (e: { preventDefault: () => void }) {
        e.preventDefault()
        // @ts-ignore
        formRef.value.validate((errors: any) => {
          if (!errors) {
            message.success('验证成功')
          } else {
            console.log(errors)
            message.error('验证失败')
          }
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.loginpage{
  margin: 0 auto;
  width: 500px;
  height: 500px;
}
</style>