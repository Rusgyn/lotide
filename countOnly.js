const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;