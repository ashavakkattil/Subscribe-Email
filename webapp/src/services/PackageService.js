import Api from '../services/Api'

export default {
    addPackages(params) {
        return Api().post('/packages/', params);
    },

    getPackages(){
        return Api().get('/packages/');
    },
    getPackage(id){
       return Api().get('/packages/' + id)
    },
    deletePackage(id){
        return Api().delete('/packages/' + id, {})
    }
}