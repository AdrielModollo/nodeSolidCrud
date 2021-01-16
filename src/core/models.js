export default function controllerDataFactory(models){
    const getData = () =>{
        db.collection('data').find().toArray((err, results) => {
            if (err) return console.log(err)
            res.render('show.ejs', { data: results })
        })
    }
}