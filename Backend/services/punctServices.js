import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAll = async() => {
    const puncte = await prisma.punct.findMany({})
    return puncte
}

const getPunct = async(id) => {
    const punct = await prisma.punct.findUnique({
        where: {
            PunctID: id
        }
    })
    return punct
}

const addPunct = async(punctInfo) => {
    const punct = await prisma.punct.create({
        data: {... punctInfo}
    })
    return punct
}

const updatePunct = async(id, punctInfo) => {
    const punct = await prisma.punct.update({
        where: {
            PunctID: id
        },
        data: {...punctInfo}
    })
    return punct
}

const deletePunct = async(id) => {
    const punct = await prisma.punct.delete({
        where: {
            PunctID: id
        }
    })
    return punct
}

export default {getAll, getPunct, addPunct, updatePunct, deletePunct}