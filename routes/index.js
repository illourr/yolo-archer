
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('../app/index', { title: 'Express' });
};
