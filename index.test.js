const assert = require('assert').strict;
const { get, find, update, create, deleteProduct } = require('./clientAxios');
const { getMessages, createMessage } = require('./clientAxiosMessages');

const message = {
	user: 'Tomas.sargiotto',
	text: 'Hola Mundo',
	time: new Date(),
}

const data= {
	product:{
		name: 'Tomas.sargiotto',
		price: 101,
		thumbnail: 'https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1000x563.jpg',
	}
}

describe('Test product creation', function (){
	it('deberia crear un producto correctamente', async function() {
		const response = await create(data)
		assert.strictEqual(response.message,'success')
	})
	it('no deberia crear un producto sin nombre', async function() {
		const dataIncorrecta = {price: data.price, thumbnail: data.thumbnail}
		const response = await create(dataIncorrecta)
		assert.strictEqual(response.response.status,500)
	})
	it('no deberia crear un producto sin precio', async function() {
		const dataIncorrecta = {name: data.name, thumbnail: data.thumbnail}
		const response = await create(dataIncorrecta)
		assert.strictEqual(response.response.status,500)
	})
	it('no deberia crear un producto sin thumbnail', async function() {
		const dataIncorrecta = {price: data.price, name: data.name}
		const response = await create(dataIncorrecta)
		assert.strictEqual(response.response.status,500)
	})
})

let id;

describe('Test get all products', function (){
	it('deberia traer un array de producto', async function() {
		const response = await get()
		id = response[0].id
		assert.strictEqual(Array.isArray(response),true)
	})
	it('Cada elemento del array debe ser un objeto', async function() {
		const response = await get()
		assert.strictEqual((typeof response[0] === 'object' && !Array.isArray(response[0])),true)
	})
})

describe('Test find one product', function (){
	it('deberia traer un unico objeto', async function() {
		const response = await find(id)
		assert.strictEqual((typeof response === 'object' && !Array.isArray(response)),true)
	})
	it('no deberia encontrar', async function() {
		const response = await find('a413242143214124')
		assert.strictEqual(response.response.status,500)
	})
})

describe('Test update one product', function () {
	const dataUpdate = { ...data }
	it('deberia actualizar un objeto', async function() {
		dataUpdate.product.name = 'wasowski';
		const response = await update(id, dataUpdate)
		assert.strictEqual(response.product.name,'wasowski')
	})
})