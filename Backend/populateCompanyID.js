const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', (error) => {
    console.log(error)
})
db.once('open', () => {
    console.log('Connected to Database')
    /* db.db.listCollections().toArray((error, collections) =>{
        if(!error){
            collections.forEach((p) => {
                console.log(db.collection(p.name).find({}))
            })
        }
    }) */
    db.collection('users').updateOne({ companyId: 'MY1234' }, (error, user) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(user)
        }
    })
})

