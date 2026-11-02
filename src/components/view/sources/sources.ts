import type { Source } from '../../types/news-api/endpoints/sources/response';
import type { ISources } from '../../types/view/sources';
import './sources.css';
class Sources implements ISources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            throw new Error('Source Template Element does not exist');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            sourceClone.querySelector<HTMLSpanElement>('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector<HTMLDivElement>('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector<HTMLDivElement>('.sources')!.append(fragment);
    }
}

export default Sources;
