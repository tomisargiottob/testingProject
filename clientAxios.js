const axios = require('axios');
let log;

const data= {
	product:{
		name: 'Tomas.sargiotto',
		price: 101,
		thumbnail: 'https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1000x563.jpg',
	}
}

const dataUpdated= {
	product:{
		name: 'Tomas.sargiotto',
		price: 201,
		thumbnail: 'https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1000x563.jpg',
	}
}

let id;
let path;

async function get() {
	const response = await axios.get('http://localhost:3000/products')
	id = response.data[0].id
	if(log) {
		console.log(id);
		console.log('GET',response.data);
	}
	return response.data
}

async function create(product) {
	try {
		const response = await axios.post('http://localhost:3000/products',product)
		if(log) {
			console.log('CREATE', response.data);
		}
		return response.data
	} catch (err) {
		return err;
	}

}
async function update(id,productUpdated) {
	try {
		const response = await axios.put(`http://localhost:3000/products/${id}`,productUpdated)
		if(log){
			console.log('UPDATE', response.data);
		}
		return response.data
	} catch (err) {
		return err
	}
}
async function find(id) {
	try {
		const response = await axios.get(`http://localhost:3000/products/${id}`)
		if (log) {
			console.log('FIND', response.data);
		}
		return response.data
	} catch (err) {
		return err;
	}
}

async function deleteProduct(id) {
	const response = await axios.delete(`http://localhost:3000/products/${id}`)
	if (log) {
		console.log('DELETE', response.data);
	}
	return response.data
}

// async function main() {
// 	log = true
// 	await create(data);
// 	await get();
// 	await update(id,dataUpdated);
// 	await find(id);
// 	await deleteProduct(id);
// }
// main()

module.exports = { create, get, update, find, deleteProduct}