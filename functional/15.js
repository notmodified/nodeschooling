
function loadUsers(userIds, load, done) {

  const users = []

  userIds.forEach((id, i, arr) => {
    load(id, u => {
      users.push(u)

      if (i == arr.length-1) done(users);
    })
  })

}

module.exports = loadUsers
