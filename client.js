const http = require('http');

// GET

// const options1 = {
// 	hostname: 'localhost',
// 	port: 3000,
// 	path: '/products',
// 	method: 'GET',
// }

// const req1 = http.request(options1, (res) => {
// 	console.log(res.statusCode);
// 	res.on('data', (data)=> {
// 		process.stdout.write(data);
// 	})
// })

// req1.on('error', (err) => console.log(err));

// req1.end()

// FIND ONE

// const options1 = {
// 	hostname: 'localhost',
// 	port: 3000,
// 	path: '/products/1facb2c0-b6d9-4742-9e54-bb6c94604663',
// 	method: 'GET',
// }

// const req1 = http.request(options1, (res) => {
// 	console.log(res.statusCode);
// 	res.on('data', (data)=> {
// 		process.stdout.write(data);
// 	})
// })

// req1.on('error', (err) => console.log(err));

// req1.end()


// POST

// const data= new TextEncoder().encode(
// 	JSON.stringify({
// 		product:{
// 			name: 'Tomas.sargiotto',
// 			price: 200,
// 			thumbnail: 'https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1000x563.jpg',
// 		}
// 	})
// )

// const options2 = {
// 	hostname: 'localhost',
// 	port: 3000,
// 	path: '/products',
// 	method: 'POST',
// 	headers:{
// 		"Content-Type":"application/json",
// 		"Content-Length": data.length
// 	}
// }

// const req2 = http.request(options2, (res) => {
// 	console.log(res.statusCode);
// 	res.on('data', (data)=> {
// 		process.stdout.write(data);
// 	})
// })

// req2.write(data)
// req2.on('error', (err) => console.log(err));
// req2.end()

// Update

const data= new TextEncoder().encode(
	JSON.stringify({
		product:{
			name: 'Tomas.sargiotto',
			price: 101,
			thumbnail: 'https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1000x563.jpg',
		}
	})
)

const options2 = {
	hostname: 'localhost',
	port: 3000,
	path: '/products/1c3b7a20-75f5-11ec-a05e-b7261d606875',
	method: 'PUT',
	headers:{
		"Content-Type":"application/json",
		"Content-Length": data.length
	}
}

const req2 = http.request(options2, (res) => {
	console.log(res.statusCode);
	res.on('data', (data)=> {
		process.stdout.write(data);
	})
})

req2.write(data)
req2.on('error', (err) => console.log(err));
req2.end()