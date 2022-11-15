const doTask1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('This is Task1'))
    }, 3000)
  })
}

const doTask2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('This is Task2'))
    }, 1000)
  })
}

const doTask3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('This is Task3'))
    }, 500)
  })
}

const asyncAndAwaitFn = async () => {
  await doTask1()
  await doTask2()
  await doTask3()
}

async function* generatorFn() {
  yield await doTask1()
    .then(() => console.log)
    .catch((e) => console.log(e))
  yield await doTask2()
    .then(() => console.log)
    .catch((e) => console.log(e))
  yield await doTask3()
    .then(() => console.log)
    .catch((e) => console.log(e))
  return
}

// Using Async and Await
asyncAndAwaitFn()

// Using Generator function
const genFn = generatorFn()
genFn.next()
genFn.next()
genFn.next()
genFn.next()