/* eslint-env jest */
import { shallow } from 'avoriaz'
import VueSelectImage from '../src/VueSelectImage.vue'

describe('VueSelectImage.vue', () => {
  const dataImages = [{
    id: '1',
    src: 'https://unsplash.it/200?random',
    alt: 'Alt Image 1'
  }, {
    id: '2',
    src: 'https://unsplash.it/200?random',
    alt: 'Alt Image 2'
  }]

  it('render correct amount of images', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages }})
    expect(wrapper.find('.vue-select-image__item').length).toEqual(2)
  })

  it('render with props multiple', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    expect(wrapper.find('.is--multiple').length).toEqual(2)
  })

  it('render with props rootClass, h, and w', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, rootClass: 'a', w: '1em', h: '1em' }})
    expect(wrapper.find('.a').length).toEqual(1)
    expect(wrapper.find('.a__img').length).toEqual(2)
    expect(wrapper.find('[width="1em"]').length).toEqual(2)
    expect(wrapper.find('[height="1em"]').length).toEqual(2)
  })

  it.skip('render with props selectedImages', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, selectedImages: dataImages, isMultiple: true }})
    expect(wrapper.find('.vue-select-image__thumbnail').length).toEqual(2)
    expect(wrapper.find('.vue-select-image__thumbnail--selected').length).toEqual(2)
  })

  it('emit onselectimage event', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectimage', dataImages[0])
  })

  it('assign singleSelected data', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages }})
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(wrapper.data().singleSelected).toEqual(dataImages[0])
  })

  it('emit onselectmultipleimage event', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
  })

  it('test repeat click with same index', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
    // repeat click but same index
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
    // repeat click but same index
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
  })
  it('test repeat click different index', () => {
    const wrapper = shallow(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.vue-select-image__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
    // repeat click different index
    wrapper.find('.vue-select-image__thumbnail')[1].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', dataImages)
  })
})
