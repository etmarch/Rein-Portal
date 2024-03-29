const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout.jsx';
import Navigations from '../navigation.jsx';

describe('components.layouts.main', () => {
  it('should contain navigations', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navigations />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
