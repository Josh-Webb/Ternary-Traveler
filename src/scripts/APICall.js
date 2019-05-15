//Calls database.

const API =  {
    getAll: function (url) {
        return fetch(url)
            .then(results => results.json())
            .then(parsedEvents => {
                return parsedEvents
            })

    },
    getOne: function(url, Id) {
        return fetch(`${url}/${Id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    save: function (url, object) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
          .then(savedData => {
              console.log("this is savedData", savedData)
          })
    },
    delete: function (url, Id) {
        return fetch(`${url}/${Id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
          .then(console.log("successfully deleted"));
    },
    edit: function (url, Id, object) {
        return fetch(`${url}/${Id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
          .then(patchedData => {
              console.log("this is what was patched", patchedData)
          })
    }
}

export default API