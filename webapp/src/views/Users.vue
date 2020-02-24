<template>
  <v-container>
    <h2>List of Subscribed Users</h2>
    <v-card v-for="(user,i) in users" :key="i" class="userCard" outlined>
    <p><span class="headline font-weight-bold">Name : </span> <span>{{user.name}}</span></p>
    <p><span>Email : </span> <span>{{user.email}}</span></p>
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
<style scoped>
.userCard{
  margin: 10px auto;
}
</style>>
  
