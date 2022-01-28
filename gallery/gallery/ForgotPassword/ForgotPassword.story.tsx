import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ForgotPassword } from './ForgotPassword';

storiesOf('Gallery/ForgotPassword', module).add('ForgotPassword', () => (
  <GalleryStory attributes={attributes} component={ForgotPassword} />
));
