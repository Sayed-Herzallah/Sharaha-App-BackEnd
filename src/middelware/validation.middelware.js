// ==================== validation ====================
const validation = (schema) => {
    return (req, res, next) => {
        const data = { ...req.body, ...req.params, ...req.query };
        const result = schema.validate(data, { abortEarly: false });
        if (result.error) {
            const errorMessages = result.error.details.map((obj) => obj.message);
            return next(new Error(errorMessages), { case: 400 });
        }
        return next();
    };
};
export default validation


