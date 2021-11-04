import axios from 'axios';

const AxiosTryout = async () => {
    let response = await axios.get(`https://catfact.ninja/fact`);
    console.log(response.data);
}

export default AxiosTryout;