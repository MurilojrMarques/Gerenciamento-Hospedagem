

class HouseController {
    async store(req, res) {
        return res.json({ message: 'House created successfully' });
    }
}

export default new HouseController();