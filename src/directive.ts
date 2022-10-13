import tippy from 'tippy.js'
import { DirectiveParameters, DirectiveUtilities } from './alpine'

export const directive = (
  element: Node,
  { modifiers, expression }: DirectiveParameters,
  { cleanup, evaluate }: DirectiveUtilities
): void => {

  console.log(element, modifiers, expression, cleanup, evaluate)

  tippy(element as Element, {
    content: 'test',
    animation: 'scale',
    theme: 'translucent'
  })

}

export default directive
