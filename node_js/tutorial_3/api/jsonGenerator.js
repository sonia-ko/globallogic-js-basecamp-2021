function jsonGenerator(link, pet) {
    const imgFormat = link.split(".");
    const imgObj = {
        url: link,
        animal: pet,
        image_format_and_parameters: imgFormat[imgFormat.length - 1]
    }

    return JSON.stringify(imgObj);

}

module.exports = jsonGenerator;