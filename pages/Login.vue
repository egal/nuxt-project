<template>
<div></div>
</template>

<script>
import { EgalAuthConstructor } from '@egalteam/framework'
export default {
  name: "Login",
  data() {
    return {
      authModel: null,
    }
  },
  mounted() {
    const authInfo = {
      modelName: 'User',
      url: 'url',
      connectionType: 'axios',
    }
    this.authModel = new EgalAuthConstructor(authInfo)
  },
  methods: {
    /**
     * Ниже приведены примеры регистрации, аутентификации и
     * авторизации пользователя в микросервисе
     */
    userRegistration() {
      const userData = { email: 'user email', password: 'user password' }
      this.authModel
        .registerNewUser(userData)
        .then((response) => {})
        .catch((error) => {})
    },
    userAuth() {
      const userData = { email: 'user email', password: 'user password' }
      this.authModel
        .authUser(userData)
        .then((response) => {})
        .catch((error) => {})
    },
    loginToService(token, serviceName){
        const loginData = { service_name: serviceName, token }
        this.authModel
          .loginToService(loginData)
          .then((response) => {
            /**
             * в ответ придет токен авторизации в микросервисе
             * для того чтобы Egal мог его использовать, нужно
             * сохранить его в cookie под именем микросервиса, для которого
             * получен токен
             */
          })
          .catch((error) => {})
    },
  }
}
</script>

<style scoped>

</style>
