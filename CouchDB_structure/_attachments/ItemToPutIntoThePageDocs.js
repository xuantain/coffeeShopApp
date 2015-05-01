var couchapp = require('couchapp')
  , path = require('path');

ddoc = {
    _id: '_design/entitiesNew'
  , views: {}
  , lists: {}
  , shows: {} 
}

// node module exports
module.exports = ddoc;

// REPLACE ME WITH SOME WAY OF READING A
// STRUCTURED DIR OF .JS FILES AND COMBINING
// AS NECESSARY
ddoc.views.byType = {
  map: function(doc) {
    emit(doc.type, null);
  },
  reduce: '_count'
}

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));