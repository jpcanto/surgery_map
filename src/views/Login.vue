<template>
<v-card class="mt-12 mx-auto text-center hidden-sm-only" min-width="320">
  <v-card-text>
    <v-card class="v-card--offset mx-auto" color="secondary" elevation="4">
      <v-card-text class="headline white--text">LOGIN</v-card-text>
      <v-card-text>
        <v-icon size="96" color="primary">mdi-account</v-icon>
      </v-card-text>
    </v-card>
    </v-card-text>
      <v-form class="mt-12">
        <v-card-text>
          <v-text-field
            label="Email*"
            color="secondary"
            name="username" :rules="[usernameRules.required, usernameRules.minLength]"
            type="text"></v-text-field>
            <v-text-field
            label="Senha*"
            color="secondary"
            name="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.minLenght]"
            :type="isPasswordVisible"
            @click:append="togglePasswordShow">
          </v-text-field>
          <v-label class="caption grey--text left">*Campos obrigatórios</v-label>
        </v-card-text>
        <v-card-actions class="mt-12">
          <v-row align="center" no-gutters>
            <v-col class="text-center">
                <v-btn color="secondary" class="mb-4" block @click="handleLogin">Logar</v-btn>
                <v-btn color="secondary" x-small text>Criar conta</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-form>
      </v-card>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    showPassword: false,
    usernameRules: {
      required: (value) => !!value || 'Obrigatório',
      minLength: (value) => (value && value.length >= 5) || 'Mínimo de 5 caracteres',
    },
    passwordRules: {
      required: (value) => !!value || 'Obrigatório',
      minLenght: (value) => value.length >= 8 || 'Mínimo de 8 caracteres',
    },
  }),
  computed: {
    isPasswordVisible() {
      const isVisible = this.showPassword ? 'text' : 'password';
      return isVisible;
    },
  },
  methods: {
    togglePasswordShow() {
      this.showPassword = !this.showPassword;
    },
    handleLogin() {
      this.$router.replace('/home');
    },
  },
};
</script>

<style>

</style>
