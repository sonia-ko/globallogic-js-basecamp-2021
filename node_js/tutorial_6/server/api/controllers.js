const City = require("../data/schema");

function sendResponseWithFailure(res, code, error) {
    return res.status(code).json({
        success: false,
        error,
    });
}

const addNewCity = (req, res) => {
    const body = req.body;

    if (!body) {
        return sendResponseWithFailure(res, 400, "No info about the city");
    }

    const city = new City(body);

    if (!city) {
        return sendResponseWithFailure(res, 400, "No city");
    }

    city
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: city.id,
                message: "City created",
            });
        })
        .catch((e) => sendResponseWithFailure(res, 400, "City not created"));
};

const updateCity = async(req, res) => {
    const body = req.body;

    if (!body) {
        return sendResponseWithFailure(
            res,
            400,
            "You must provide a valid payload to update"
        );
    }

    City.findOne({ id: req.params.id }, (error, city) => {
        if (error) {
            return sendResponseWithFailure(res, 400, "City is not updated");
        }
        city.name = body.name;
        city.description = body.description;
        city.picture = body.picture;
        city.settled = body.settled;
        city.places = body.places;
        city.country = body.country;
        city
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: city.id,
                    message: "City updated",
                });
            })
            .catch((errorDetails) => sendResponseWithFailure(res, 400, errorDetails));
    });
};

const deleteCity = (req, res) => {
    City.deleteOne({ id: req.params.id })
        .exec()
        .then((response) => {
            return res.status(200).json({ success: true });
        })
        .catch((error) => sendResponseWithFailure(res, 400, error));
};

const getCityById = async(req, res) => {
    City.findOne({ id: req.params.id })
        .then((city) => {
            if (!city) {
                return sendResponseWithFailure(res, 404, "City not found");
            }
            return res.status(200).json({ success: true, data: city });
        })
        .catch((error) => sendResponseWithFailure(res, 400, error));
};

const getCities = (req, res) => {
    City.find({})
        .then((cities) => {
            if (cities.length === 0) {
                return sendResponseWithFailure(res, 404, "Cities not found");
            }

            return res.status(200).json({ success: true, data: cities });
        })
        .catch((error) => sendResponseWithFailure(res, 400, error));
};

module.exports = {
    addNewCity,
    updateCity,
    deleteCity,
    getCityById,
    getCities,
};