export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {

		setTimeout(() => {
			const response = 'This is the response from the API';
			resolve(response);
			// Simulate error by rejecting the Promise
			// reject(new Error('Failed to fetch data from the API'));
			}, 2000); // Delay of 2000 milliseconds (2 seconds)
		});
}
