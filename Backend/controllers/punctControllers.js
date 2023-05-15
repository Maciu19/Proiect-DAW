import punctServices from '../services/punctServices.js'

const getPuncte = async(req, res, next) => {
    try {
        res.json(await punctServices.getAll());
    } catch(err) {
        console.error("Error while getting all points")
        next(err)
    }
}

const getPunct = async(req, res, next) => {
    try {
        if(!req?.params?.id) {
            throw{message: "No id provided"}
        }
        const response = await punctServices.getPunct(parseInt(req.params.id))
        if(!response) {
            throw {message: "No point found"}
        }
        res.json(response)
    } catch(err) {
        console.error("Error while getting one point")
        next(err)
    }
}

const addPunct = async(req, res, next) => {
    try {
        const response = await punctServices.addPunct({
            Denumire: req.body.Denumire,
            CoordonataX: req.body.CoordonataX,
            CoordonataY: req.body.CoordonataY,
            EsteVizibil: req.body.EsteVizibil
        })
        res.json(response)
    } catch(err) {
        console.error("Error while adding one point")
        next(err)
    }
}

const updatePunct = async(req, res, next) => {
    try {
        if(!req?.params?.id) {
            throw{message: "No id provided"}
        }

        const id = req.params.id
        const punct = await punctServices.getPunct(parseInt(req.params.id))

        if(!punct) {
            throw {message: "Point not found"}
        }

        let EsteVizibil;
        if(req?.body?.EsteVizibil === null) {
            EsteVizibil = punct.EsteVizibil
        } else {
            EsteVizibil = req?.body?.EsteVizibil 
        }

        const response = await punctServices.updatePunct(parseInt(req.params.id), {
            Denumire: req?.body?.Denumire || punct.Denumire,
            CoordonataX: req?.body?.CoordonataX || punct.CoordonataX,
            CoordonataY: req?.body?.CoordonataY || punct.CoordonataY,
            EsteVizibil: EsteVizibil
        })

        res.json(response)
    } catch(err) {
        console.error("Error while updating one point")
        next(err)
    }
}

const deletePunct = async(req, res, next) => {
    try {
        if(!req?.params?.id) {
            throw{message: "No id provided"}
        }
        const response = await punctServices.deletePunct(parseInt(req.params.id))
        res.json({message: response})
    } catch(err) {
        console.error("Error while deleting one point")
        next(err)
    }
}

export default {getPuncte, getPunct, addPunct, updatePunct, deletePunct}