import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  storeRef(el) {
    console.log(el.outerHTML, el.tabIndex);
  }
  render() {
    return <div ref={this.storeRef} tabIndex={0}>simple div</div>

    // workaround: make sure ref is specified last
    // return <div tabIndex={0} ref={this.storeRef}}>simple div</div>
  }
}
