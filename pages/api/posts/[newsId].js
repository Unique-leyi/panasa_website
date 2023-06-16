import NewsData  from "../data";

export default function handler(req, res) {
    //get query id
    const { newsId } = req.query;

    //get each news id
    const { News } = NewsData;

    if(newsId){
        //checking if query id == news id
        const post = News.find(post => post.id == newsId);
        return res.status(200).json(post);
    }

    return res.status(404).json({error: "News not Found!"});
}