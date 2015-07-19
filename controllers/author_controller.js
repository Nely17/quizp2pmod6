// GET /views/autor
exports.author = function(req, res) {
   res.render('author', {encabezado: 'Autor', errors: []});
};