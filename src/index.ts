import magic from './magic'
import { Alpine } from './alpine'
import directive from './directive'

const Tooltip = (Alpine: Alpine) => {
  Alpine.magic('tooltip', magic)
  Alpine.directive('tooltip', directive)
}

export default Tooltip
