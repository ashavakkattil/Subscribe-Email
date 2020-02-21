<template>
  <v-container>
    <h1>List of Registered Users</h1>
    <h3>Name :</h3>
    <span>{{userName}}</span>
    <h3>Email :</h3>
    <span>{{userMail}}</span>
  </v-container>
</template>
<script>
export default {
  props: ["userName", "userMail"]
};
</script>