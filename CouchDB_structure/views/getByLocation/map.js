function(doc) {
  try {
    // Try, ifs, filter and emit something. Then it will get re-reduced.
    var keys = {
		_id: doc._id
	},
	returns = doc;

	emit(keys, returns);
	
  } catch (e) {
    //emit(e,1);
  }
}
