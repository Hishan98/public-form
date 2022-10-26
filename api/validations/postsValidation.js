const Joi = require('@hapi/joi');

const postValidation = data => {
    const schema = Joi.object({
        url: Joi.string().min(6).max(1024).required(),
        caption: Joi.string().min(6).max(2048).required(),
    });

    return schema.validate(data);
}

module.exports.postValidation = postValidation;