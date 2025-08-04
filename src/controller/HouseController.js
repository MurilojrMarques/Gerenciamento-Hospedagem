import House from '../models/House.js';
import User from '../models/User.js';

class HouseController {

    async index(req, res) {
        const { status } = req.query;

        const houses = await House.find({ status });

        return res.json({ houses });
    }

    async store(req, res) {
        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { userId } = req.headers;

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

    async update(req, res) {
        const { fillename } = req.file;
        const { house_id } = req.params;
        const { description, price, location, status } = req.body;
        const { userId } = req.headers;

        const user = await House.findById(userId);
        const houses = await House.findById(house_id);

        if (String(user._id) !== String(houses.user)) {
            return res.status(401).json({ error: 'Não autorizado' });
        }

        await House.updateOne({ _id: house_id }, {
            user: userId,
            thumbnail: fillename,

            description,
            price,
            location,
            status,
        });

        return res.send()
    }

    async destroy(req, res){
        const { house_id } = req.params;
        const { userId } = req.headers;

        const user = await User.findById(user_id);
        const house = await House.findById(house_id);

        if(String(user._id) !== String(house.user)) {
            return res.status(401).json({ error: 'Não autorizado' });
        }

        await House.findByIdAndDelete({ _id: house_id });

        return res.json({ message: 'Casa deletada com sucesso!' });
    }
}

export default new HouseController();