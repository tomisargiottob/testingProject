const axios = require('axios');

const data= {
	user: 'Tomas.sargiotto',
	text: 'Hola Mundo',
	time: new Date(),
}

async function getMessages() {
	const response = await axios.get('http://localhost:3000/messages')
	console.log('GET',response.data);
	return response.data
}

async function createMessage(message) {
	const response = await axios.post('http://localhost:3000/messages',message)

	console.log('CREATE', response.data);
	return response.data
}
// async function update() {
// 	const response = await axios.put(path,dataUpdated)
// 	console.log('UPDATE', response.data);
// }
// async function find() {
// 	const response = await axios.get(path)
// 	console.log('FIND', response.data);
// }

// async function deleteMessage() {
// 	const response = await axios.delete(path)
// 	console.log('DELETE', response.data);
// }

// async function main() {
// 	await create();
// 	await get();
// 	// await update(); //no existe controlador
// 	// await find(); //no existe controlador
// 	// await deleteMessage(); //no existe controlador
// }
// main()

module.exports = { createMessage, getMessages}

