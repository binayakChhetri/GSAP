import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  // It it just like useEffect which has dependency arrays and callback function
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });

    // WITHOUT Timelines (only using delays):
    // gsap.to("#blue-box", { x: 100, duration: 1 });
    // gsap.to("#blue-box", { y: 50, duration: 1, delay: 1 }); //wait 1 second
    // gsap.to("#blue-box", { opacity: 0, duration: 1, delay: 2 }); //wait 2 seconds
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
