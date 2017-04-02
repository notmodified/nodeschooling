
function all(p1, p2) {

  let cnt = 0
  let r = []

  return new Promise((res, rej) => {
    p1.then(e => {
      r[0] = e
      cnt++

      if (cnt > 1) res(r)
    })

    p2.then(e => {
      r[1] = e
      cnt++

      if (cnt > 1) res(r)
    })
  })

}

all(getPromise1(), getPromise2()).then(console.log)
