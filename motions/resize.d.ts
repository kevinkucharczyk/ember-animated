import { Motion, Tween } from '..';
import { BaseOptions } from '../-private/motion';
import { DerivedTween } from '../-private/tween';
import Sprite from '../-private/sprite';
interface Options extends BaseOptions {
    easing: (t: number) => number;
}
/**
  Smoothly resizes _sprite_ from its the initial size to its final size.

  _sprite_ must have both `initialBounds` and `finalBounds` set.

  Consider using `scale` instead because scale uses CSS transforms and will not trigger reflow.

  ```js
  for (let sprite of insertedSprites) {
    sprite.startAtSprite(beacons['source']);
    resize(sprite)
  }
  ```

  @function resize
  @export default
  @param {Sprite} sprite
  @return {Motion}
*/
export default function resize(sprite: Sprite, opts?: Partial<Options>): Promise<any>;
export declare class Resize extends Motion<Options> {
    prior: Resize | null;
    widthTween: Tween | DerivedTween | null;
    heightTween: Tween | DerivedTween | null;
    interrupted(motions: Motion[]): void;
    animate(): Generator<Promise<unknown>, void, unknown>;
}
export {};
