import ComputedProperty from '@ember/object/computed';
import Component from '@ember/component';
import { Task } from '../-private/ember-scheduler';
import Sprite from '../-private/sprite';
import '../element-remove';
import MotionService from '../services/motion';
import { Transition } from '../-private/transition';
/**
  A component that adopts any orphaned sprites so they can continue animating even
  after their original parent component has been destroyed. This relies on cloning
  DOM nodes, and the cloned nodes will be inserted as children of animated-orphans.
  ```hbs
  <AnimatedOrphans/>
  ```
  @class animated-orphans
  @public
*/
export default class AnimatedOrphans extends Component {
    motionService: MotionService;
    private _newOrphanTransitions;
    private _elementToChild;
    private _childToTransition;
    private _inserted;
    private _cycleCounter;
    didInsertElement(): void;
    willDestroyElement(): void;
    animateOrphans(removedSprites: Sprite[], transition: Transition, duration: number, shouldAnimateRemoved: boolean): void;
    reanimate(): void;
    beginStaticMeasurement(): void;
    endStaticMeasurement(): void;
    isAnimating: boolean;
    animate: ComputedProperty<Task>;
    startAnimation: ComputedProperty<Task>;
    runAnimation: ComputedProperty<Task>;
    finalizeAnimation: ComputedProperty<Task>;
    _findActiveSprites(ownSprite: Sprite): (Sprite | undefined)[];
    _groupActiveSprites(activeSprites: Sprite[]): {
        transition: Transition;
        duration: number;
        sprites: Sprite[];
    }[];
    _prepareSprite(sprite: Sprite): Sprite;
    _onFirstMotionStart(activeSprites: Sprite[], cycle: number, sprite: Sprite): void;
    _onMotionStart(cycle: number, sprite: Sprite): void;
    _onMotionEnd(cycle: number, sprite: Sprite): void;
}
