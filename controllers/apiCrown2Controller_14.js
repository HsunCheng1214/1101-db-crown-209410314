const serviceCrown2Controller_14 = require('./serviceCrown2Controller_14');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_14.getCategories();
    return res.json(data);
   
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
