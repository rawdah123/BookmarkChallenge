const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { Bookmark, Comment, Tag } = require('./models');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/bookmarks', async (req, res) => {
	const bookmarks = await Bookmark.findAll({});
	const comments = await Comment.findAll({});
	res.render('index', {
		bookmarks : bookmarks,
		comments  : comments
	});
});

app.post('/bookmarks/filter', async (req, res) => {
	const bookmarks = await Bookmark.findAll({
		where: {
			tag: req.body.filter
		}
	});
	res.render('index', {
		bookmarks : bookmarks
	});
});

app.post('/bookmarks', async (req, res) => {
	await Bookmark.create({
		name    : req.body.name,
		url     : req.body.url
	});
	res.redirect('/bookmarks');
});

app.delete('/bookmarks/:id', async (req, res) => {
	await Bookmark.destroy({
		where : {
			id : req.params.id
		}
	});
	res.redirect('/bookmarks');
});

app.put('/bookmarks/:id', async (req, res) => {
	console.log(req.params);
	await Bookmark.update({ 
        name    : req.body.name,
        url     : req.body.url,
     }, {
        where: {
            id: req.params.id
        }
    });
	res.redirect('/bookmarks');
});

app.post('/bmupdate', (req, res) => {
    res.render('bmupdate', {
        id: req.body.id
    });
});

app.post('/comment', (req, res) => {
    res.render('comment', {
        id: req.body.id
    });
});


app.post('/comments/:id', async (req, res) => {
        
    await Comment.create({
		text: req.body.comment,
        BookmarkId: req.params.id
	})
	res.redirect('/bookmarks');
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
