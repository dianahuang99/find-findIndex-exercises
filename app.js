function findUserByUsername(arr, val) {
  return arr.find(function (obj) {
    return obj.username === val;
  });
}

function removeUser(arr, val) {
  let userIndex = arr.findIndex(function (obj) {
    return obj.username === val;
  });
  if (userIndex === -1) return;
  return arr.splice(userIndex, 1)[0]; //why do you need the [0]?
}
