Mar 4th
1. 

Mar 2nd 
1. Get Poduct:hasMany :AttributeValues working
2. Split up the included .sql database file into migration and seeds
	> Make it so you can create and drop the db easier
3. Design the REST APi
4  Think about security and what urls will need an validation-token
5. Look at the sql procedures and figure out which ones are useful


Ideas on Quering Products

1. pipe through differant filters
	"department" -> "category" -> "search" -> "attributes" ->  out

2. Pagination emample
	router.get('/:page', (req, res) => {
	  let limit = 50;   // number of records per page
	  let offset = 0;
	  db.user.findAndCountAll()
	  .then((data) => {
	    let page = req.params.page;      // page number
	    let pages = Math.ceil(data.count / limit);
			offset = limit * (page - 1);
	    db.user.findAll({
	      attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
	      limit: limit,
	      offset: offset,
	      $sort: { id: 1 }
	    })
	    .then((users) => {
	      res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
	    });
	  })
	  .catch(function (error) {
			res.status(500).send('Internal Server Error');
		});
	});


