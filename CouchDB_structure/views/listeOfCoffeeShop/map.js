function(doc) {
	try {
		// Try, ifs, filter and emit something.
			emit(doc._id, doc);
	} catch (e) {
		//error with this document.
	}
}