import ComputedProperty from '@ember/object/computed';
import Component from '@ember/component';
import { Task } from '../-private/ember-scheduler';
import MotionService from 'ember-animated/services/motion';
import { MotionConstructor } from '../-private/motion';
/**
 Provides a boundary between animator components and the surrounding document
 which smoothly resizes as animators change. Use animated-container whenever you
 need to "hold a place for" some animated content while that content is animating.
  ```hbs
  <button {{action toggleThing}}>Toggle</button>
  <AnimatedContainer>
    {{#animated-if showThing use=transition }}
        <div class="message" {{action "toggleThing"}}>
            Hello!
        </div>
    {{/animated-if}}
  </AnimatedContainer>
  <p>
    This is outside of the container.
  </p>
  ```
  ```js
  import Component from '@ember/component';
  import move from 'ember-animated/motions/move';
  import {easeOut, easeIn } from 'ember-animated/easings/cosine';

  export default Component.extend({
    showThing: false,

    toggleThing() {
      this.set('showThing', !this.get('showThing'));
    },

    transition: function * ({ insertedSprites, keptSprites, removedSprites }) {
      for (let sprite of insertedSprites) {
        sprite.startAtPixel({ x: window.innerWidth });
        move(sprite, { easing: easeOut });
      }

      for (let sprite of keptSprites) {
        move(sprite);
      }

      for (let sprite of removedSprites) {
        sprite.endAtPixel({ x: window.innerWidth });
        move(sprite, { easing: easeIn });
      }
    },
  });
  ```
  @class animated-container
  @public
*/
export default class AnimatedContainerComponent extends Component {
    layout: import("htmlbars-inline-precompile").TemplateFactory;
    tagName: string;
    motionService: MotionService;
    /**
     * Use a custom tag for the container. Defaults to div.
      @argument tag
      @type String
    */
    tag: string;
    /**
     * Whether to animate the initial render. You will probably also need to set
     * initialInsertion=true on a child component of animated-container.
     * Defaults to false.
      @argument onInitialRender
      @type Boolean
    */
    onInitialRender: boolean;
    /**
     * Use a custom tag for the container. Defaults to div.
      @argument motion
      @type String
    */
    motion: MotionConstructor;
    private _inserted;
    private _startingUp;
    private sprite;
    constructor(properties: object | undefined);
    didInsertElement(): void;
    private _ownElement;
    willDestroyElement(): void;
    isAnimating: boolean;
    maybeAnimate({ duration, task }: {
        duration: number;
        task: Promise<void>;
    }): void;
    beginStaticMeasurement(): void;
    endStaticMeasurement(): void;
    animate: ComputedProperty<Task>;
}
