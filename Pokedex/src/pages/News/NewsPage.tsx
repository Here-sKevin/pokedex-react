import { useEffect, useState } from "react"
import { fetchNews } from "./NewsApi"
import NewsCard from "../../components/NewsCard/NewsCard"
import PokeballSpinner from "../../components/Spinner/Spinner"

type NewsProps = {
    title: string
    description: string
    url: string
    image: string,
  }

const NewsPage = () => {
    const [data, setData] = useState<NewsProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchNews({setData, setLoading});
    }, [])

    if(loading) return <PokeballSpinner />

    return (
        <div className="w-screen">
            <div className="grid grid-cols-4 gap-2">
                {data.map((article, index) => (
                    <NewsCard
                    key={index}
                    title={article.title}
                    image={article.image}
                    description={article.description}
                    url={article.url}
                    />
                ))}
            </div>
        </div>
        
      );
}

export default NewsPage