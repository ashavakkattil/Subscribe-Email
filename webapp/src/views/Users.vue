<template>
  <v-container>
    <h2>List of Subscribed Users</h2>
    <v-card v-for="(user,i) in users" :key="i" class="userCard" outlined>
      <v-row>
        <v-col class="userDetails">
          <p>
            <span class="headline font-weight-bold">Name :</span>
            <span>{{user.name}}</span>
          </p>
          <p>
            <span>Email :</span>
            <span>{{user.email}}</span>
          </p>
        </v-col>
        <v-col class="closebtn">
          <v-icon @click="deleteUser(user._id, i)">mdi-close</v-icon>
        </v-col>
      </v-row>
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
      users: []
    };
  },

  mounted() {
    this.getAllUsers();
  },

  methods: {
    async getAllUsers() {
      const response = await userService.getUsers();
      this.users = response.data.data;
    },

    async deleteUser(id, index){
      var userId = id;
      const response = await userService.deleteUser(userId);
      if(response.status == 200){
        //Removes the deleted value from the front-end
        this.users.splice(index ,1)
      }
    }
  }
};
</script>
<style scoped>
.userCard {
  margin: 10px auto;
  width: 80%;
}
.userDetails {
  margin: 10px;
}
.closebtn {
  text-align: end;
  margin-right: 10px;
}
</style>>
  
