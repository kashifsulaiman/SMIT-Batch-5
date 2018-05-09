function getData() {
	var promise1 = new Promise((resolve, reject) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
  			.then(json => resolve(json))
			.catch(err => reject(err))
	})

	var promise2 = new Promise((resolve, reject) => {
		fetch('https://jsonplaceholder.typicode.com/comments')
  			.then(response => response.json())
  			.then(json => resolve(json))
			.catch(err => reject(err))
	})

	return Promise.all([promise1, promise2]).then(values => { 
		return {posts: values[0], comments: values[1]}  
	})
}

getData().then((res, err) => {
	console.log(res);
})