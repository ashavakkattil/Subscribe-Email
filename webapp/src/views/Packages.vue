<template>
  <v-container>
    <v-card class="loginForm" outlined>
      <v-form class="formComponent" ref="form">
        {{isError}}
        <div v-if="isError" class="statusMsg errormsg">{{statusMsg}}</div>
        <v-text-field
          label="Enter Package name"
          outlined
          prepend-inner-icon="mdi-pencil"
          v-model="default_item.name"
          :rules="nameRules"
          clearable
        ></v-text-field>
        <v-text-field label=" Description" outlined v-model="default_item.description" clearable></v-text-field>
        <v-btn color="success form-btn" dark @click="submitForm">Add Package</v-btn>

        <v-btn color="success form-btn" dark @click="resetData">Reset</v-btn>
      </v-form>
    </v-card>
    <h2>List of Packages</h2>
    <v-card v-for="(tpackage,i) in packages" :key="i" class="packageCard" outlined>
      <v-row>
        <v-col class="packageDetails">
          <p>
            <span class="headline font-weight-bold">Name :</span>
            <span>{{tpackage.name}}</span>
          </p>
          <p>
            <span>Description :</span>
            <span>{{tpackage.description}}</span>
          </p>
        </v-col>
        <v-col class="closebtn">
          <v-icon @click="deletePackage(tpackage._id, i)">mdi-close</v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import packageService from "../services/PackageService";

export default {
  data() {
    return {
      packagename: "",
      packages: [],
      default_item: { name: "", description: "" },

      nameRules: [
        v => !!v || "Name required",
        v => (v && v.length >= 3) || "Name should be atleast of 3 Characters"
      ],
      isError: "",
      statusMsg: ""
    };
  },

  mounted() {
    this.getAllPackages();
  },

  methods: {
    async getAllPackages() {
      const response = await packageService.getPackages();
      this.packages = response.data.data;
    },
    submitForm() {
      var flag = this.$refs.form.validate();
      if (flag == true) {
        this.addpackages();
      }
    },
    resetData() {
      this.$refs.form.reset();
      this.isError = "";
      this.statusMsg = "";
    },
    async addpackages() {
      await packageService
        .addPackages(this.default_item)
        .then(response => {
          if (response.data.status == "error") {
            this.isError = true;
          } else {
            this.packages = response.data.data;
            this.getAllPackages()
            this.isError = false;
          }
          this.statusMsg = response.data.message;
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    async deletePackage(id, index) {
      var packageId = id;
      const response = await packageService.deletePackage(packageId);
      if (response.status == 200) {
        //Removes the deleted value from the front-end
        this.packages.splice(index, 1);
      }
    }
  }
};
</script>
<style scoped>
.packageCard {
  margin: 10px auto;
  width: 80%;
}
.packageDetails {
  margin: 10px;
}
.closebtn {
  text-align: end;
  margin-right: 10px;
}
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
.v-input__prepend-inner {
  margin-right: 10px;
}
.statusMsg {
  margin-bottom: 20px;
  padding: 5px;
  font-weight: bold;
}
.successmsg {
  background-color: green;
}
.errormsg {
  background-color: red;
}
</style>>
  
