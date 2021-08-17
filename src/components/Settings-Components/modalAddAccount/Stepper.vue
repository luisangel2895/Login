<template>
  <div class="w-100 py-4">
    <div class="d-flex">

      <div class="w-1/3">
        <div class="position-relative mb-2">
          <div class="w-10 h-10 mx-auto bg-primary rounded-circle text-lg text-white d-flex align-items-center">
          <span class="text-center text-white w-100">1</span>
          </div>
        </div>

        <div class="text-xs text-center">Set Name</div>
      </div>

      <div class="w-1/3">
        <div class="position-relative mb-2">
          <div class="position-absolute d-flex align-items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="w-100 bg-skygray rounded align-items-center align-middle align-center flex-1">
              <div class="w-0 bg-primary py-1 rounded" :style="`width: ${levels.first}%;`"></div>
            </div>
          </div>

          <div class="w-10 h-10 mx-auto rounded-circle text-lg d-flex align-items-center transition" :class="[step >= 2 ? 'bg-primary text-white' : 'bg-white text-semidark border-2 border-skygray']">
           <span class="text-center w-100">2</span>
          </div>
        </div>

        <div class="text-xs text-center">Add Channels</div>
      </div>

      <div class="w-1/3">
        <div class="position-relative mb-2">
          <div class="position-absolute d-flex align-center align-items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="w-100 bg-skygray rounded align-items-center align-middle align-center flex-1">
              <div class="w-0 bg-primary py-1 rounded" :style="`width: ${levels.second}%;`"></div>
            </div>
          </div>

          <div class="w-10 h-10 mx-auto rounded-circle text-lg d-flex align-items-center transition" :class="[step === 3 ? 'bg-primary text-white' : 'bg-white text-semidark border-2 border-skygray']">
            <span class="text-center w-100">3</span>
          </div>
        </div>

        <div class="text-xs text-center">Confirm</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  data () {
    return {
      step: 1,
      levels: {
        first: 0,
        second: 0
      }
    }
  },
  methods: {
    getStep () {
      return this.step
    },
    next () {
      let interval
      if (this.step === 1) {
        interval = setInterval(_ => {
          if (this.levels.first <= 100) {
            this.levels.first++
          } else {
            clearInterval(interval)
          }
        }, 5)
        this.step = 2
      } else if (this.step === 2) {
        interval = setInterval(_ => {
          if (this.levels.second <= 100) {
            this.levels.second++
          } else {
            clearInterval(interval)
          }
        }, 5)
        this.step = 3
      }
      return this.step
    },
    prev () {
      let interval
      if (this.step === 2) {
        interval = setInterval(_ => {
          if (this.levels.first > 0) {
            this.levels.first--
          } else {
            clearInterval(interval)
          }
        }, 5)
        this.step = 1
      } else if (this.step === 3) {
        interval = setInterval(_ => {
          if (this.levels.second > 0) {
            this.levels.second--
          } else {
            clearInterval(interval)
          }
        }, 5)
        this.step = 2
      }
      return this.step
    }
  }
}
</script>

<style scoped>
.content-center{align-content: center;}
.flex-1{
    flex: 1 1 0%;
}
.transition{
    transition: all ease-in .2s
}
</style>
