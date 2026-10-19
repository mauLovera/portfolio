import { HIDDEN, VISIBLE } from './variants'

//* === Triggers === *//
// What starts an animation. `parent` inherits from the nearest animated ancestor.

export type Trigger = 'mount' | 'inView' | 'parent'

export const triggerProps = (trigger: Trigger) => {
  switch (trigger) {
    case 'mount':
      return { initial: HIDDEN, animate: VISIBLE }
    case 'inView':
      return { initial: HIDDEN, whileInView: VISIBLE, viewport: { once: true } }
    case 'parent':
      return {}
  }
}
