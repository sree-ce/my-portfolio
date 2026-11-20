import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Education } from '../sections/Education'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Journey } from '../sections/Journey'
import { Leadership } from '../sections/Leadership'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Experience />
      <Skills />
      <Leadership />
      <Education />
      <Contact />
    </>
  )
}
