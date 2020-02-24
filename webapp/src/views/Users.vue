<template>
  <v-container>
    <h2>List of Registered Users</h2>
    <v-card v-for="(user,i) in users" :key="i">
    <h4>Name : </h4> <span>{{user.name}}</span>
    <h4>Email : </h4> <span>{{user.email}}</span>
    </v-card>
    
  </v-container>
</template>
<script>
import userService from "../services/UserService";

export default {
  data() {
    return {
      username: "",
      email: "",
      users: ''
    };
  },

  mounted() {
    this.getAllUsers();
  },

  methods: {
    async getAllUsers() {
      const response = await userService.getUsers();
      this.users = response.data.data;
    }
  }
};
</script>