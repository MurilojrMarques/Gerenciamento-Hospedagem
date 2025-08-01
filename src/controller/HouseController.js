import House from '../models/House.js';

class HouseController {
    async store(req, res) {
        const {filename} = req.file;
        const {description, price, location, status} = req.body;
        const {userId} = req.headers;

        const house = await House.create({
            user: userId,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });


        return res.json({ house });
    }
}

export default new HouseController();