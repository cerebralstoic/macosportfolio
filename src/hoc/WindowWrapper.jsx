import React, { useLayoutEffect } from 'react'
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
const WindowWrapper = (Component, windowKey) => {
    const Wrapped  = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];

        const ref = React.useRef(null);

        useGSAP(() => {
            if (!ref.current || !isOpen) return () => {};
            const el = ref.current;
            el.style.display = "block";

            gsap.fromTo(el,
                { scale: 0.8, opacity: 0, y:40},
                { scale: 1, opacity: 1, y:0, duration: 0.5, ease: "power2.out" }
            );


        }, [isOpen]);

   
        useGSAP(() => {
            const el = ref.current;
            if (!el || isMaximized) return;

            const header = el.querySelector('#window-header');
            if (!header) return;

            const [instance] = Draggable.create(el, {
                trigger: header,
                onPress: () => focusWindow(windowKey),
                allowEventDefault: true,
                cancel: 'input, textarea, button, select'
            });

        return () => instance.kill();   
        }, [isMaximized]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
        
            if (isMaximized) {
                gsap.set(el, { x: 0, y: 0 });
            }
        }, [isMaximized]);


        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return () => {};
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

       return (
        <section
          id={windowKey}
          ref={ref}
          style={{ zIndex }}
          className={`absolute  ${isMaximized ? 'window-maximized' : ''}`}
        >
            <Component {...props} />
        </section>
);

    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
}

export default WindowWrapper