const express = require('express')
const router = express.Router();
const QueryController = require('../controllers/query-controller')


router.route('/create-query').post(QueryController.CreateQuery); // create query
router.route('/query/:id').get(QueryController.FetchIdQuery);   //  fetch query based on queryId--> :id
router.route('/all-queries').get(QueryController.FetchAllinDB);  //  fetch all queries in a database
router.route('/delete-query/:id').delete(QueryController.DeleteQuery); // delete query based on queryId---> :id
router.route('/update-query/:id').put(QueryController.UpdateQuery);  // update query based on queryID---> :id
router.route('/yours-query').post(QueryController.UserQuery);  // fetch all query associated with userID 

module.exports = router;