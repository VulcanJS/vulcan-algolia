import { addCallback } from 'meteor/vulcan:core';
import algoliasearch from 'algoliasearch';
const client = algoliasearch('APP_ID', 'API_KEY');
const index = client.initIndex('vulcan');

function recordFromItem(input, collection) {
  const record = {
    ...input,
    objectID: input._id,
  };
  delete record._id;
  return record;
}


async function addOrEditRecord(newItem, user, collection) {
  const record = recordFromItem(newItem, collection);
  index.saveObject(record);
}

async function deleteRecord(input) {
  index.deleteObject(input._id);
}

addCallback('movies.new.async', addOrEditRecord);
addCallback('movies.edit.async', addOrEditRecord);
addCallback('movies.remove.async', deleteRecord);
