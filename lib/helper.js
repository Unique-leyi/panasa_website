
const baseURL = "http://localhost:3000/"

export default async function getPost(){
    const res = await fetch(`${baseURL}`);
    const news = res.json();

    return news;
}