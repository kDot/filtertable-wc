import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { FiltertableWc } from '../src/filtertable-wc.js';
import '../src/filtertable-wc.js';

describe('FiltertableWc', () => {
  let element: FiltertableWc;
  beforeEach(async () => {
    element = await fixture(html`<filtertable-wc></filtertable-wc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
