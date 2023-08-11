import { socialMediaData } from '../social-media-data.js';
import { socialMediaLinksTemplate } from '../markup-templates/social-media-links-template.js';

const socialMediaLinksHolder = document.querySelector(
  '[data-social-media-links-holder]'
);

Object.values(socialMediaData).forEach((link) => {
  socialMediaLinksHolder.innerHTML += socialMediaLinksTemplate(link);
});
