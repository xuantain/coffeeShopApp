function(doc) {
  try {
    // Try, ifs, filter and emit something. Then it will get re-reduced.
      emit(doc._id, doc);
  } catch (e) {
    //emit(e,1);
  }
}
