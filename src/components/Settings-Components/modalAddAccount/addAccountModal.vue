<template>
  <div class="w-100 px-5">
    <div
      class="d-flex align-items-center flex-column py-4 w-100"
      v-if="step === 1"
    >
      <span class="text-primary font-weight-bold text-center mb-4"
        >Set the name of the account</span
      >
      <b-form-input
        class="w-1/3"
        v-model="form.name"
        placeholder="Example Name"
      ></b-form-input>
    </div>

    <div
      class="d-flex align-items-center flex-column py-4 w-100"
      v-if="step === 2"
    >
      <span class="text-primary font-weight-bold text-center mb-4"
        >Add channels to your account</span
      >
      <!--<div class="d-flex justify-content-center">
        <a href="javascript:" class="mr-4 text-facebook" @click="openDialogLogin('facebook')"
          ><i class="fab fa-facebook fa-lg"></i
        ></a>
        <a href="javascript:" class="mr-4 text-instagram" @click="openDialogLogin('instagram')"
          ><i class="fab fa-instagram fa-lg"></i
        ></a>
        <a href="javascript:" class="mr-4 text-twitter" @click="openDialogLogin('twitter')"
          ><i class="fab fa-twitter fa-lg"></i
        ></a>
        <a href="javascript:" class="mr-4 text-youtube" @click="openDialogLogin('youtube')"
          ><i class="fab fa-youtube fa-lg"></i
        ></a>
      </div>-->

      <div class="my-4 flex flex-column w-100">
        <div
          class="py-1 mb-2 border-bottom w-50 mx-auto d-flex justify-content-between align-items-center"
          v-for="(account, index) in accounts"
          :key="index"
        >
          <span>
            <i
              :class="`fab fa-${account.socialNetwork} fa-lg text-${account.socialNetwork} mr-2`"
            ></i>
            {{ account.accountName }}</span
          >

          <span
            class="h2"
            style="cursor: pointer"
            @click="removeAccount(account.socialNetworkId)"
            >×</span
          >
        </div>
      </div>
    </div>

    <div
      class="d-flex align-items-center flex-column py-4 w-100"
      v-if="step === 3"
    >
      <span class="text-primary font-weight-bold text-center mb-4"
        >Confirm your settings</span
      >

      <div class="d-flex flex-column align-items-center mb-4">
        <div class="text-center py-2 text-xs">
          <p class="mb-2">Account name</p>
          <span
            class="border-bottom border-skygray px-4 d-inline-block text-center"
            >{{ form.name }}</span
          >
        </div>
      </div>

      <div class="d-flex flex-column align-items-center w-100">
        <div class="text-center py-2 w-100">
          <p class="mb-2">Channels Added</p>
          <div class="my-4 flex flex-column w-100">
            <div
              class="py-2 mb-2 border-bottom w-50 mx-auto"
              v-for="(account, index) in accounts"
              :key="index"
            >
              <i
                :class="
                  `fab fa-${account.socialNetwork} fa-lg text-${account.socialNetwork} mr-2`
                "
              ></i>
              {{ account.accountName }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stepper w-100">
      <stepper ref="stepper" />
    </div>
    <div class="d-flex justify-content-between py-4 w-100">
      <b-button
        variant="skygray"
        class="text-white px-4"
        @click="prevStep"
        :disabled="step <= 1 || loading"
        >Prev</b-button
      >
      <b-button
        variant="primary"
        class="px-4"
        @click="nextStep"
        :disabled="checkNext || loading"
        >{{ step === 3 ? "Confirm" : "Next" }}</b-button
      >
    </div>
  </div>
</template>

<script>
import Stepper from './Stepper.vue'
// import * as OverviewService from "@/services/overview.service";

export default {
  components: { Stepper },
  props: [
    'redSocial'
  ],
  data () {
    return {
      loading: false,
      step: 1,
      form: {
        name: ''
      },
      accounts: []
    }
  },
  mounted () {
    this.step = this.$refs.stepper.getStep()
    window.addEventListener('message', this.getPage)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.getPage)
  },
  methods: {
    async nextStep () {
      console.log('el redSocial: ', this.redSocial)
      console.log('el step: ', this.step)
      if (this.step === 1) {
        console.log('el step 2')
        this.openDialogLogin(this.redSocial)
      }
      if (this.step === 3) {
        this.loading = true
        this.confirmAccounts()
      }
      this.step = this.$refs.stepper.next()
    },
    async confirmAccounts () {
      const result = ' '/* await OverviewService.insertAccounts(
        this.accounts,
        this.form.name
      ) */
      this.loading = false
      this.$emit('onClose', result)
    },
    prevStep () {
      this.step = this.$refs.stepper.prev()
    },
    getPage (event) {
      if (event.data.accountName) {
        this.addAccount(event.data)
      }
    },
    openDialogLogin (socialNetwork) {
      const w = 680
      const h = 830
      const left = screen.width / 2 - w / 2
      const top = screen.height / 2 - h / 2
      return window.open(socialNetwork === 'instagram' ? `https://oefdxfa72j.execute-api.us-east-1.amazonaws.com/dev/login/settings/facebook/auth/${socialNetwork}` : `https://oefdxfa72j.execute-api.us-east-1.amazonaws.com/dev/login/settings/${socialNetwork}/auth`,
        '_blank',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
          w +
          ', height=' +
          h +
          ', top=' +
          top +
          ', left=' +
          left
      )
    },
    addAccount (account) {
      const exist = this.accounts.find(
        (item) => item.socialNetworkId === account.socialNetworkId
      )
      if (exist) {
        this.$bvToast.toast('Esta cuenta ya está agregada', {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: true,
          variant: 'danger',
          solid: true
        })
      } else {
        this.accounts.push(account)
      }
    },
    removeAccount (socialNetworkId) {
      this.accounts = this.accounts.filter((item) => item.socialNetworkId !== socialNetworkId)
    },
    getError () {
      this.$bvToast.toast('No pudimos agregar la cuenta', {
        title: 'Error',
        autoHideDelay: 5000,
        appendToast: true,
        variant: 'danger',
        solid: true
      })
    }
  },
  computed: {
    checkNext: function () {
      if (this.step === 1) {
        return this.form.name === '' || this.form.name === null
      } else if (this.step === 2) {
        return this.accounts.length <= 0
      }
      return false
    }
  }
}
</script>

<style></style>
