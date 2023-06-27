function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
    // Simulate an async API call or any other async operation
    // using a setTimeout to simulate an async operation
    setTimeout(() => {
	if (success) {
        const response = 'This is the successful response from the API';
        resolve(response); // Resolve the Promise with the response
	} else {
	    reject(new Error('Failed to fetch data from the API')); // Reject the Promise with an error
	}
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
    });
}
