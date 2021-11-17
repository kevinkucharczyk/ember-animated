import ComputedProperty from '@ember/object/computed';
import Component from '@ember/component';
import { Task } from '../-private/ember-scheduler';
import Sprite from '../-private/sprite';
import Child from '../-private/child';
import MotionService from 'ember-animated/services/motion';
import { Transition } from '../-private/transition';
/**
  A drop in replacement for `{{#each}}` that animates changes to a list.
  ```hbs
  {{#animated-each items use=transition duration=2000 as |item|}}
    <div data-test-item={{item}} onclick={{action removeItem item}}>
      {{item}}
    </div>
  {{/animated-each}}
  ```
  ```js
  import Component from '@ember/component';
  import move from 'ember-animated/motions/move';
  import { fadeOut } from 'ember-animated/motions/opacity';

  export default Component.extend({
    init() {
      this._super();
      this.items = ['A', 'B', 'C', 'D', 'E'];
    },

    * transition({ keptSprites, removedSprites }) {
      for (let sprite of keptSprites) {
        move(sprite);
      }

      for (let sprite of removedSprites) {
        fadeOut(sprite);
      }
    },

    removeItem(item){
      this.set('items', this.items.filter(i => i !== item));
    }
  });
  ```
  @class animated-each
  @public
*/
export default class AnimatedEach extends Component {
    layout: any;
    tagName: string;
    static positionalParams: string[];
    motionService: MotionService;
    /**
     * The list of data you are trying to render.
      @argument items
      @type Array
    */
    items: unknown[];
    /**
     * If set, this animator will only [match](../../between) other animators that have the same group value.
      @argument group
      @type String
    */
    group: string | undefined;
    /**
     * Represents the amount of time an animation takes in miliseconds.
      @argument duration
      @type Number
    */
    duration: number | undefined;
    /**
     * Specifies the [Transition](../../transitions)
     * to run when the list changes.
      @argument use
      @type Transition
    */
    use: Transition | undefined;
    /**
     * Specifies data-dependent [Rules](../../rules) that choose which [Transition](../../transitions)
     * to run when the list changes. This takes precedence over `use`.
      @argument rules
      @type Rules
    */
    rules: ((args: {
        firstTime: boolean;
        oldItems: unknown[];
        newItems: unknown[];
    }) => Transition) | undefined;
    /**
     * When true, all the items in the list will animate as [`insertedSprites`](../../sprites) when the `{{#animated-each}}` is first rendered. Defaults to false.
      @argument initialInsertion
      @type Boolean
    */
    initialInsertion: boolean;
    /**
      When true, all the items in the list will animate as [`removedSprites`](../../sprites) when the `{{#animated-each}}` is destroyed. Defaults to false.
  
      Note that an `<AnimatedOrphans/>` component must be actively rendered when this animator is removed for this option to have any effect.
  
      @argument finalRemoval
      @type Boolean
    */
    finalRemoval: boolean;
    /**
      Serves the same purpose as the `key` in ember `{{#each}}`, and it's
      also used to compare values when [animating between components](../../between).
      @argument key
      @type String
    */
    key: string | undefined;
    /**
      An optional comma-separated list of properties to observe on each of the
      objects in the items list. If any of those properties change, we will
      trigger an animated transition. Without this, we only animate when the list
      contents change, not when any deeper properties change.
      @argument watch
      @type String
    */
    watch: string | undefined;
    private _elementToChild;
    private _prevItems;
    private _prevSignature;
    private _firstTime;
    private _inserted;
    private _renderedChildren;
    private _renderedChildrenStartedMoving;
    private _cycleCounter;
    private _keptSprites;
    private _insertedSprites;
    private _removedSprites;
    private _lastTransition;
    private _ancestorWillDestroyUs;
    init(): void;
    _installObservers(): void;
    get _deps(): string[] | undefined;
    get durationWithDefault(): number;
    _invalidateRenderedChildren(): void;
    _identitySignature(items: unknown[], getKey: (item: unknown, index: number) => string): string[];
    get renderedChildren(): Child[];
    isAnimating: boolean;
    get keyGetter(): (item: unknown, index: number) => string;
    didInsertElement(): void;
    _ownElements(): Generator<Element, void, unknown>;
    maybeReanimate(): void;
    ancestorIsAnimating(ourState: Child['state']): void;
    _letSpritesEscape(): void;
    willDestroyElement(): void;
    beginStaticMeasurement(): void;
    endStaticMeasurement(): void;
    _findCurrentSprites(): {
        currentSprites: Sprite[];
        parent: Sprite | undefined;
    };
    _partitionKeptAndRemovedSprites(currentSprites: Sprite[]): void;
    animate: ComputedProperty<Task>;
    startAnimation: ComputedProperty<Task>;
    runAnimation: ComputedProperty<Task>;
    finalizeAnimation: ComputedProperty<Task>;
    _motionStarted(sprite: Sprite, cycle: number): void;
    _motionEnded(sprite: Sprite, cycle: number): void;
    _transitionFor(firstTime: boolean, oldItems: unknown[], newItems: unknown[]): Transition;
}
