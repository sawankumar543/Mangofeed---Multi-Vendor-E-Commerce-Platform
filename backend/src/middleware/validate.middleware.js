const validate = (schema) => {
    return (req, res, next) => {
        const  result = schema.safeParse(req.body);
    }
}