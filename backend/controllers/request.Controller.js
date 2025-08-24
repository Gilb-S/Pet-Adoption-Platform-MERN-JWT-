import adoptionRequest from '../models/adoptionReq.model.js';

export const createRequest = async (req, res) => {
    try {
        const { petId, note } = req.body
        const doc = await adoptionRequest.create({ userId: req.user.id, petId, note});
        return res.status(201).json(doc);
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export const myRequest = async (req, res) => {
    try {
        const docs = await adoptionRequest.find({userId: req.user.id}).populate('petId', 'name imageUrl');
        return res.status(201).json(docs)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "internal server error"})
    }
}

export const listAll = async (req, res) => {
    try {
        const docs = await adoptionRequest.find().populate("userId", "name email").populate("petId", "name");
        return res.status(200).json(docs)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "internal server error"})
    }
}

export const setStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const doc = await adoptionRequest.findByIdAndUpdate(id, {status}, {new: true})

        // check id
        if(!doc) {
            return res.status(404).json({message: "request not found"})
        }
        return res.status(200).json(doc)
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "internal server error"})
    }
}