import React from 'react';
import renderer from 'react-test-renderer';
import Dog from './Dog';
import mockAxios from 'axios';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
describe('Dog Card', () => {
  let component;
  
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { message: ['Bob'] }
    })
  );

  function createComponent() {
    return renderer.create(<Dog dogName={'Bob'} key="1"/>);
  }

  it('should render a snapshot of Dog', () => {
    component = createComponent();
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a dog card', () => {
    component = createComponent();
    const instance = component.getInstance();
    expect(instance.state.isHover).toEqual(false);
  });
})