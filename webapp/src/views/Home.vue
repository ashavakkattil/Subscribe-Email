<template>
  <div class="home">
    <v-card class="loginForm" outlined>
      <v-form class="formComponent" ref="form">
        <v-text-field
          label="Enter your name"
          outlined
          prepend-inner-icon="mdi-pencil"
          v-model="name"
          :rules="nameRules"
          clearable
        ></v-text-field>
        <v-text-field
          type="email"
          label=" Enter your E-Mail ID"
          outlined
          prepend-inner-icon="mdi-email"
          v-model="email"
          :rules="emailRules"
          clearable
        ></v-text-field>
        <v-btn color="success form-btn" dark @click="submitForm">Submit</v-btn>

        <v-btn color="success form-btn" dark @click="resetData">Reset</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "",
      email: "",

      nameRules: [
        v => !!v || "Name required",
        v => (v && v.length >= 3) || "Name should be atleast of 3 Characters"
      ],
      emailRules: [
        v => !!v || "Email Required",
        v =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Invalid Email"
      ]
    };
  },
  methods: {
    submitForm() {
      var flag = this.$refs.form.validate();
      if (flag == true) {
        console.log(this.$route.params)
        this.$router.push({name: 'Users', params: {userName: this.name, userMail: this.email}})
      }
    },

    resetData() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.home {
  margin-top: 50px;
}
.loginForm {
  width: 30%;
  margin: 0 auto;
  padding: 50px;
}
.form-btn {
  margin-right: 10px;
}
>>> .v-input__prepend-inner {
  margin-right: 10px;
}
</style>
