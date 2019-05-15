const baseURL = "http://localhost:8088";

const APIManager = {
    getAllPlaces: function() {
        return fetch(`${baseURL}/places`)
                .then(response => response.json())
    }
}

export default APIManager;
