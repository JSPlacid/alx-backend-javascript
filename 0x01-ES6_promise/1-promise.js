export function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
    // async API call
    setTimeout(() => {
	if (success) {
	    const response = {
		status: 200,
		body: 'Success'
	    };
	    resolve(response); // Resolve the Promise with the response object
	} else {
	    const error = new Error('The fake API is not working currently');
	    reject(error); // Reject the Promise with an error object
	}
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
    });
}
