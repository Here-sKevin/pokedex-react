import axios from "axios";
import { NewsDto } from "./interface/NewsDto";
import { envApiKey } from "../../shared/Environment";

type Props = {
    setData: (d:[]) => void;
    setLoading: (b:boolean) => void;
}


export const fetchNews = async ({setData, setLoading} : Props) => {
    try {
        const url = 'https://newsapi.org/v2/everything?' +
          'q=Pokemon&' +
          'from=2024-09-31&' +
          'sortBy=popularity&' +
          'apiKey='+envApiKey;
      await axios.get(url)
      .then(function(responses){
        const data = responses.data.articles.map(response => {
          return new NewsDto(response)
        });
        setData(data)
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function(){
        setLoading(false)
      });
    } catch (error) {
      console.error(error);
    }
  };
