import Pet from '../models/Pet.model.js'

export const listPets = async (req, res) => {
    try {
        const filter = {};
        if(req.query.status) {
            filter.status = req.query.status
        }
        const pets = await Pet.find(filter).sort({createdAt: -1});
        return res.status(200).json(pets)
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "server error"})    
    }
}

export const getPets = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if(!pet) return res.status(404).json({message: "Pet not Found"});
        return res.status(200).json(pet)
    } catch (error) {
       console.error(error);
       return res.status(500).json({message: "server error"}); 
    }
}

export const createPet = async (req, res) => {
    try {
        const imageUrl = req.file ? `/${process.env.UPLOAD_DIR}/${req.file.filename}` : undefined
        const pet = await Pet.create({...req.body, imageUrl})
        return res.status(201).json(pet)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error"})
    }
}

export const updatePet = async (req, res) => {
    try {
        const update = {...req.body};
        if(req.file) {
            update.imageUrl = `/${process.env.UPLOAD_DIR}/${req.file.filename}`;
        }

        const pet = await Pet.findByIdAndUpdate(req.params.id, update, {new: true})

        if(!pet) {
            return res.status(404).json({message: "Pet not found"}) 
        }

        return res.status(200).json(pet)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "server error"})
    }
}

export const deletePet = async (req, res) => {
    try{
        const pet = await Pet.findByIdAndDelete(req.params.id)
        if(!pet) {
            return res.status(404).json({message: "Pet not Found"});
        }
        return res.status(204).json({message: "Pet deleted successfully"})
    }catch (error) {
        console.log(error)
        return res.status(500).json({message: "server error"})
    }
}
