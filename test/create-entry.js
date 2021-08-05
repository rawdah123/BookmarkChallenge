require('dotenv').config();
const { models } = require('../models');

const createEntry = async () => {
	console.log('creating tables');
	await models.Bookmark.create({
		name    : 'aldi',
		url     : 'Aldi.com',
		comment : 'Rawdon road',
		tag     : 'no-tag'
	});
};

module.exports = createEntry;
