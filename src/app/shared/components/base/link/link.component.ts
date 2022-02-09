import { Component, Input } from '@angular/core';

export enum LINK_VARIANT {
  ROUTER_LINK = 'router_link',
  HREF = 'href'
}

export enum LINK_DESIGN_TYPE {
  LINK = 'link',
  BUTTON = 'button'
}

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() label: string;
  @Input() routerLinkPath: string;
  @Input() hrefPath: string;
  @Input() type: LINK_DESIGN_TYPE = LINK_DESIGN_TYPE.LINK;
  @Input() variant = LINK_VARIANT.ROUTER_LINK;

  get isRouterLink() {
    return this.variant === LINK_VARIANT.ROUTER_LINK;
  }

  get routerLink() {
    return this.routerLinkPath?.length ? [this.routerLinkPath] : [];
  }

  get isButtonType() {
    return this.type === LINK_DESIGN_TYPE.BUTTON;
  }
}
