function(doc) {
	try {
		// Try, ifs, filter and emit something.

		emit({title: doc.title, address: doc.address, phone: doc.phone}, doc);
	} catch (e) {
		//error with this document.
	}
}
