import tippy from 'tippy.js'
import { Alpine } from './alpine'

export const magic = (
  element: Node,
  extras: { Alpine: Alpine; interceptor: Alpine['interceptor'] }
): void => {

  console.log(element, extras)

  tippy(element as Element, {
    content: 'test',
    animation: 'scale',
    theme: 'translucent'
  })

}

export default magic
