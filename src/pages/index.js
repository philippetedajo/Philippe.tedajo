import React, { useRef, useEffect } from "react"
import Splash from "../components/Splash"
import "../styles/styles.scss"
import "../static/fonts/fonts.scss"
import { Cursor, SEO } from "../components"
import { Home, About, Project } from "../sections"

const Index = () => {
  const wrapper = useRef(null)
  const loader = useRef(null)

  useEffect(() => {
    Splash(wrapper.current, loader.current)
  }, [])

  return (
    <div>
      <div className="wrapper" ref={wrapper}>
        <div className="loader" ref={loader}>
          P.
        </div>
      </div>
      <SEO />
      <Cursor />
      <Home />
      <About />
      <Project />
      <footer className="text-center my-3">
        © 2020 P. All rights reserved
      </footer>
    </div>
  )
}

export default Index
