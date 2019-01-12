import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

// other enzyme tools (not used yet)
// - https://github.com/FormidableLabs/enzyme-matchers
Enzyme.configure({ adapter: new Adapter() })
