import Api from '../services/Api'

export default {
    addUsers(params) {
        return Api().post('/users/', params);
    },

    getUsers(){
        return Api().get('/users/');
    },
    deleteUser(id){
       return Api().delete('/users/' + id, {})
    }
}

