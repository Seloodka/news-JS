import type { Article } from '../../types/news-api/endpoints/everything/response';
import type { INews } from '../../types/view/news';
import newsPlaceholderImage from '../../../assets/news_placeholder.jpg';
import './news.css';

class News implements INews {
    public draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            throw new Error('News Template Element does not exist');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            newsClone.querySelector<HTMLDivElement>('.news__meta-photo')!.style.backgroundImage = `url(${
                item.urlToImage || newsPlaceholderImage
            })`;
            newsClone.querySelector<HTMLLIElement>('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector<HTMLLIElement>('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector<HTMLHeadElement>('.news__description-title')!.textContent = item.title;
            newsClone.querySelector<HTMLHeadElement>('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector<HTMLParagraphElement>('.news__description-content')!.textContent = item.description;
            newsClone.querySelector<HTMLLinkElement>('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector<HTMLDivElement>('.news')!;

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
