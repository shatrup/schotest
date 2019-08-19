class Resources {
}

Resources.external = {
    javascript: {
        jQuery: {
            main: "https://code.jquery.com/jquery-2.2.1.min.js",
            validate: "http://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"
        },
        bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    },

    css: {
        fontawesome: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
};

Resources.internal = {
    javascript: {
        main: "/scripts/schotest.js"
    },

    css: {
        website: "/css/foterx.css"
    },

    json: {
        schooldetails: "/json/school.json"

    },
}


//module.exports = Resources;
export default Resources;