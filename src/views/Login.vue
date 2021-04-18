<template>
<v-card class="mt-12 mx-auto text-center hidden-sm-only" min-width="320">
  <v-card-text>
    <v-card class="v-card--offset mx-auto" color="secondary" elevation="4">
      <v-card-text class="headline white--text">{{ pageTitle }}</v-card-text>
      <v-card-text>
        <v-icon size="96" color="primary">mdi-account</v-icon>
      </v-card-text>
    </v-card>
    </v-card-text>
      <v-form class="mt-12" v-model="validForm">
        <v-card-text>
          <v-text-field
            :label="credentialLabel"
            v-model="credential"
            color="secondary"
            name="userCredential"
            type="text">
          </v-text-field>
          <v-text-field
            v-if="!isSignIn"
            label="Nome de usuário *"
            v-model="userName"
            color="secondary"
            :rules="[usernameRules.required, usernameRules.minLength]"
            name="username"
            type="text">
          </v-text-field>
            <v-text-field
            label="Senha *"
            v-model="password"
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
                <v-btn color="secondary" class="mb-4" block @click="handleSignInSignUp">
                  {{ loginButtonLabel }}
                </v-btn>
                <v-btn color="secondary" x-small text @click="handleType">
                  {{ typeButtonLabel }}
                </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-form>
      </v-card>
</template>

<script>
import storeUser from '@/services/login';
import { mapState } from 'vuex';

export default {
  name: 'login',
  data: () => ({
    validForm: false,
    isSignIn: true,
    showPassword: false,
    credential: '',
    userName: '',
    password: '',
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
    ...mapState({
      user: (state) => state.user.info,
      error: (state) => state.user.error,
    }),
    isSignInSignUpDisabled() {
      if (this.validForm) { return true; }
      return false;
    },
    isPasswordVisible() {
      return this.showPassword ? 'text' : 'password';
    },
    pageTitle() {
      return this.isSignIn ? 'LOGIN' : 'CRIAR USUÁRIO';
    },
    typeButtonLabel() {
      return this.isSignIn ? 'Criar usuário' : 'Entrar com usuário já existente';
    },
    loginButtonLabel() {
      return this.isSignIn ? 'LOGAR' : 'CRIAR';
    },
    credentialLabel() {
      return this.isSignIn ? 'Email ou User name*' : 'Email *';
    },
  },
  watch: {
    user(value) {
      const hasUser = value.name;
      if (hasUser) {
        this.$router.replace('/home');
      }
    },
    error(hasError) {
      if (hasError) {
        this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
          text: 'Houve um erro ao tentar logar, verifique o usuário e senha, e a conexão com a internet',
          isVisible: true,
          color: this.$vuetify.theme.themes.light.error,
        });
      }
    },
  },
  methods: {
    togglePasswordShow() {
      this.showPassword = !this.showPassword;
    },
    handleSignInSignUp() {
      if (!this.isSignInSignUpDisabled) {
        return this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
          text: 'Os campos não foram preenchidos corretamente',
          isVisible: true,
          color: this.$vuetify.theme.themes.light.error,
        });
      }
      return this.isSignIn ? this.signIn() : this.signUp();
    },
    handleType() {
      this.isSignIn = !this.isSignIn;
    },
    signIn() {
      this.$store.dispatch('DISPATCH_USER', { name: this.credential, pass: this.password });
    },
    async signUp() {
      const stored = await storeUser(this.credential, this.password);
      return stored
        ? this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
          text: 'Usuário cadastrado com sucesso!',
          isVisible: true,
          color: this.$vuetify.theme.themes.light.tertiary,
        })
        : this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
          text: 'Ocorreu um erro inesperado',
          isVisible: true,
          color: this.$vuetify.theme.themes.light.error,
        });
    },
  },
};
</script>

<style>

</style>
