import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, there <br />
        Welcome to my website
      </SectionTitle>
      <SectionText>
        I'm Rajasekhar, a webdeveloper. Currently, I'm focused on React.js to
        build amazing apps and UI/UX experiences for humans.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
