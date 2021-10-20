const serviceCrown2Controller_14 = require('./serviceCrown2Controller_14');

exports.getCategories = async (req, res)=>{
    try{
        let results = await serviceCrown2Controller_14.getCategories();
        console.log('results' ,JSON.stringify(results));
        res.render('crown2_14', {
            data: results,
            title: 'Crown2_14',
            name: 'Hsun Cheng',
            id: '209410314'
         });
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}