import React, { useLayoutEffect, useRef } from 'react'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore()
    const { isOpen, isMaximized, zIndex } = windows[windowKey]

    const ref = useRef(null)
    const draggableRef = useRef(null)

    useGSAP(() => {
      if (!ref.current || !isOpen) return

      const el = ref.current
      el.style.display = 'block'

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }, [isOpen])

    useGSAP(() => {
      const el = ref.current
      if (!el) return

      if (isMaximized) {
        draggableRef.current?.kill()
        draggableRef.current = null
        gsap.set(el, { clearProps: 'transform' })
        return
      }

      const header = el.querySelector('#window-header')
      if (!header) return

      requestAnimationFrame(() => {
        if (draggableRef.current) return

        const [instance] = Draggable.create(el, {
          trigger: header,
          onPress: () => focusWindow(windowKey),
          cancel: 'input, textarea, button, select',
          allowEventDefault: true
        })

        draggableRef.current = instance
      })

      return () => {
        draggableRef.current?.kill()
        draggableRef.current = null
      }
    }, [isMaximized, isOpen])

    useLayoutEffect(() => {
      const el = ref.current
      if (!el) return
      el.style.display = isOpen ? 'block' : 'none'
    }, [isOpen])

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={`absolute ${isMaximized ? 'window-maximized' : ''}`}
      >
        <Component {...props} />
      </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`
  return Wrapped
}

export default WindowWrapper
