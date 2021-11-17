import Component from '@ember/component';
import Child from '../-private/child';
export default class extends Component {
    tagName: string;
    isEmberAnimatedListElement: boolean;
    child: Child;
    elementToChild: Map<Element, Child>;
    didRender(): void;
    _forEachElement(fn: (elt: Element) => void): void;
}
