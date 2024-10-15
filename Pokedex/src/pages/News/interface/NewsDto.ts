export type NewsType = {
    source: {
        id: number,
        name: string
    },
    author: string,
    title: string
    description: string
    url: string
    urlToImage: string,
    publishedAt: string,
    content: string
  }

  export class NewsDto {
    title: string | null;
    image: string;
    description: string;
    url: string;


    constructor(item: NewsType){
        this.title = item.title;
        this.image = item.urlToImage;
        this.description = item.description;
        this.url = item.url;
    }
}