/* eslint-env jest */
import Vue from 'vue'
import VueSelectImage from '../src/VueSelectImage.vue'

let vm = null
const dataImages = [{
  id: '1',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 1'
}, {
  id: '2',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 2'
}]

beforeEach(() => {
    const Constructor = Vue.extend(VueSelectImage)
    vm = new Constructor({
      propsData: {
        dataImages: dataImages,
        isMultiple: false,
        rootClass: 'vue-select-image',
        w: 'auto',
        h: 'auto'
      }
    })
    vm.$mount()
});

describe('test via extends Vue', () => {
  it('render props dataImages', () => {
    expect(vm.dataImages.length).toEqual(2)
    expect(vm.dataImagesLocal.length).toEqual(2)
  })
  it('render props default', () => {
    expect(vm.isMultiple).toBe(false)
    expect(vm.rootClass).toEqual('vue-select-image')
    expect(vm.w).toEqual('auto')
    expect(vm.h).toEqual('auto')
  })
  it('classThumbnailMultiple selected', () => {
    let result = vm.classThumbnailMultiple(true)
    expect(result).toEqual('vue-select-image__thumbnail is--multiple vue-select-image__thumbnail--selected')
  })
  it('classThumbnailMultiple not selected', () => {
    let result = vm.classThumbnailMultiple(false)
    expect(result).toEqual('vue-select-image__thumbnail is--multiple')
  })
  it('emit onselectimage event', () => {
    const spy = jest.spyOn(vm, '$emit')
    vm.onSelectImage(dataImages[0])
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectimage', dataImages[0])
  })
  it('isExistInArray not exist', () => {
    vm.multipleSelected = []
    let result = vm.isExistInArray(1)
    expect(result).toBeUndefined()
  })
  it('isExistInArray return exist', () => {
    vm.multipleSelected = dataImages
    let result = vm.isExistInArray('1')
    expect(result).toEqual(dataImages[0])
  })
  it('emit onselectimage event', () => {
    const spy = jest.spyOn(vm, '$emit')
    vm.onSelectImage(dataImages[0])
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectimage', dataImages[0])
  })
  it('emit onselectmultipleimage event', () => {
    const spy = jest.spyOn(vm, '$emit')
    vm.onSelectMultipleImage(dataImages[0])
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', [dataImages[0]])
  })
  it('emit onselectmultipleimage was exist', () => {
    vm.multipleSelected = dataImages
    const spy = jest.spyOn(vm, '$emit')
    vm.onSelectMultipleImage(dataImages[0])
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onselectmultipleimage', dataImages)
  })
})
