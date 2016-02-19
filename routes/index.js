
/*
 * GET pages ejs
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello World' });
};
