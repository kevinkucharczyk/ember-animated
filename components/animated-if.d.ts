import Component from '@ember/component';
/**
  A drop in replacement for `{{#if}}` that animates changes when the predicate changes.
  Animated-if uses the same arguments as animated-each.
  ```hbs
  <button {{action toggleThing}}>Toggle</button>

  {{#animated-if showThing use=transition}}
      <div class="message" {{action "toggleThing"}}>
          myContent
      </div>
  {{/animated-if}}
  ```
  ```js
  import Component from '@ember/component';
  import move from 'ember-animated/motions/move';
  import { easeOut, easeIn } from 'ember-animated/easings/cosine';

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
  @class animated-if
  @public
*/
export default class AnimatedIfComponent extends Component {
    layout: any;
    tagName: string;
    static positionalParams: string[];
    group: string | undefined;
    get realGroup(): string;
}
