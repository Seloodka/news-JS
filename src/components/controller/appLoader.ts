import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        if (!process.env.API_URL) {
            throw new Error('Invalid API_URL. Please provide a valid API URL in your .env file.');
        }
        if (!process.env.API_KEY) {
            throw new Error('Invalid API_KEY. Please provide a valid API KEY in your .env file.');
        }

        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
