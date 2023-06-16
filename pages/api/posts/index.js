import NewsData from "../data"

export default function handler(req, res){
    //get all newsdata
    const { News } = NewsData;
    if(News) {
        return res.status(200).json(News);
    }

    return res.status(404).json({error: "News not Found!"});
}