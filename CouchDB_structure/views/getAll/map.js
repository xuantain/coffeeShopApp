function(doc) {
	try {
		// Try, ifs, filter and emit something.
		var keys = {
			title: doc.title, 
			address: doc.address, 
			phone: doc.phone
		},
		returns = doc._id;

		emit(keys, returns);
		
	} catch (e) {
		//error with this document.
	}
}
