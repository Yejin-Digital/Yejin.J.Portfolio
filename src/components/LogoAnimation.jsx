import { useEffect, useRef } from 'react';
import style from '../styles/LogoAnimation.module.css';

const INTRO_TOTAL_MS = 3600;

export default function LogoAnimation({ onComplete }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const paths = Array.from(svgEl.querySelectorAll('path'));
    paths.forEach((p, idx) => {
      try {
        const len = p.getTotalLength();
        p.style.setProperty('--path-length', `${len}`);
        p.style.setProperty('--draw-delay', `${idx * 0.12}s`);
      } catch {
        // Some SVG elements might not support getTotalLength; ignore.
      }
    });
  }, []);

  useEffect(() => {
    if (typeof onComplete !== 'function') return;
    const t = window.setTimeout(() => onComplete(), INTRO_TOTAL_MS);
    return () => window.clearTimeout(t);
  }, [onComplete]);

  return (
    <div className={style.logoAnimation}>
      <div className={style.stage}>
        <div className={style.logoWrap}>
          <svg
            ref={svgRef}
            className={style.logoSvg}
            width="434"
            height="225"
            viewBox="0 0 434 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="logo"
          >
            <path
              d="M212.081 73.3889H212.132C239.472 73.3889 261.615 95.5707 261.616 122.908V193.077H237.329C225.804 193.077 216.453 183.721 216.452 172.185V121.383H216.265C215.723 119.586 214.058 118.28 212.081 118.28C210.105 118.28 208.44 119.586 207.898 121.383H207.71V172.082C207.71 183.618 198.359 192.975 186.833 192.975H162.598V122.908C162.598 95.546 184.766 73.3889 212.081 73.3889Z"
              fill="#FFC567"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M76.2314 65.4875H100.518V165.335C100.517 192.673 78.3743 214.855 51.0342 214.855H50.9834C23.6679 214.855 1.50023 192.698 1.5 165.335V118.74H24.377C36.6465 118.74 46.612 128.687 46.6123 140.991V166.861H46.7998C47.3422 168.658 49.0066 169.964 50.9834 169.964C52.9602 169.964 54.6246 168.658 55.167 166.861H55.3545V86.3811C55.3545 74.8447 64.706 65.4875 76.2314 65.4875Z"
              fill="#FFC567"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M357.768 13.5447C369.294 13.5447 378.646 22.9018 378.646 34.4382V174.812H378.833C379.375 176.61 381.039 177.917 383.016 177.917C384.993 177.917 386.658 176.61 387.2 174.812H387.387V148.944C387.388 136.639 397.354 126.691 409.624 126.691H432.5V173.287C432.5 200.649 410.332 222.807 383.016 222.807H382.966C355.625 222.807 333.482 200.625 333.482 173.287V13.5447H357.768ZM378.749 172.954C378.748 172.956 378.747 172.958 378.746 172.962C378.747 172.957 378.748 172.954 378.749 172.952V172.954Z"
              fill="#FFC567"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M130.026 73.4653H154.314V172.107C154.314 183.643 144.961 193 133.436 193H109.15V94.3589C109.15 82.8226 118.501 73.4655 130.026 73.4653Z"
              fill="#FFC567"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M85.8609 12.8633L86.4361 13.8604L87.5484 13.5625L98.5425 10.6113L95.5933 21.6064L95.2945 22.7188L96.2925 23.2949L106.153 28.9824L96.2925 34.6709L95.2945 35.2461L95.5933 36.3584L98.5425 47.3525L87.5484 44.4033L86.4361 44.1045L85.8609 45.1025L80.1724 54.9629L74.4849 45.1025L73.9088 44.1045L72.7964 44.4033L61.8013 47.3525L64.7525 36.3584L65.0504 35.2461L64.0533 34.6709L54.191 28.9824L64.0533 23.2949L65.0504 22.7188L64.7525 21.6064L61.8013 10.6113L72.7964 13.5625L73.9088 13.8604L74.4849 12.8633L80.1724 3.00098L85.8609 12.8633Z"
              fill="#058CD7"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M303.418 149.119L303.994 150.116L305.106 149.818L316.1 146.867L313.151 157.862L312.852 158.975L313.85 159.551L323.71 165.238L313.85 170.927L312.852 171.502L313.151 172.614L316.1 183.608L305.106 180.659L303.994 180.36L303.418 181.358L297.73 191.219L292.042 181.358L291.466 180.36L290.354 180.659L279.359 183.608L282.31 172.614L282.608 171.502L281.611 170.927L271.748 165.238L281.611 159.551L282.608 158.975L282.31 157.862L279.359 146.867L290.354 149.818L291.466 150.116L292.042 149.119L297.73 139.257L303.418 149.119Z"
              fill="#058CD7"
              stroke="black"
              strokeWidth="3"
            />
          </svg>

          <div className={style.landingText} aria-hidden>
            <p className={style.textOne}>UX/UI Design</p>
            <p className={style.textTwo}>Motion Graphic</p>
            <p className={style.textThree}>Product Design</p>
            <p className={style.textFour}>Graphic Design</p>
          </div>

          <div className={style.landingShapes} aria-hidden>
            <div className={style.shapeYellowStar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  d="M30.415 16.1357L30.5645 16.4355L30.8643 16.585L44.7549 23.5L30.8643 30.415L30.5645 30.5645L30.415 30.8643L23.5 44.7549L16.585 30.8643L16.4355 30.5645L16.1357 30.415L2.24414 23.5L16.1357 16.585L16.4355 16.4355L16.585 16.1357L23.5 2.24414L30.415 16.1357Z"
                  fill="#FFC567"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className={style.shapeRedStar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="45"
                viewBox="0 0 47 45"
                fill="none"
              >
                <path
                  d="M28.088 17.1611L28.257 17.6787H44.2941L31.7599 26.7852L31.3195 27.1055L31.4874 27.624L36.2745 42.3564L23.7413 33.251L23.3009 32.9307L22.8605 33.251L10.3263 42.3564L15.1144 27.624L15.2823 27.1055L14.8419 26.7852L2.30774 17.6787H18.3448L18.5138 17.1611L23.3009 2.42578L28.088 17.1611Z"
                  fill="#FD5A46"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className={style.shapePinkStar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  d="M30.415 16.1357L30.5645 16.4355L30.8643 16.585L44.7549 23.5L30.8643 30.415L30.5645 30.5645L30.415 30.8643L23.5 44.7549L16.585 30.8643L16.4355 30.5645L16.1357 30.415L2.24414 23.5L16.1357 16.585L16.4355 16.4355L16.585 16.1357L23.5 2.24414L30.415 16.1357Z"
                  fill="#FB7DA8"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className={style.shapeGreenStar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="57"
                viewBox="0 0 50 57"
                fill="none"
              >
                <path
                  d="M27.6886 21.7705L27.9015 22.9238L29.006 22.5312L44.5977 17L32.0128 27.7393L31.1212 28.5L32.0128 29.2607L44.5977 39.999L29.006 34.4688L27.9015 34.0762L27.6886 35.2295L24.6817 51.4971L21.6749 35.2295L21.462 34.0762L20.3575 34.4688L4.76474 39.999L17.3507 29.2607L18.2423 28.5L17.3507 27.7393L4.76474 17L20.3575 22.5312L21.462 22.9238L21.6749 21.7705L24.6817 5.50195L27.6886 21.7705Z"
                  fill="#00995E"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className={style.shapePurpleStar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="66"
                viewBox="0 0 65 66"
                fill="none"
              >
                <path
                  d="M43.2501 34.0409L42.581 34.6423L43.1089 35.3717L56.3552 53.6657L36.8082 42.3495L36.0293 41.8986L35.4988 42.6253L22.1931 60.8767L26.9155 38.7898L27.1032 37.91L26.2482 37.6302L4.77933 30.6142L27.2442 28.281L28.1395 28.1883L28.141 27.2883L28.178 4.70121L37.3399 25.3467L37.7048 26.1688L38.561 25.8925L60.0547 18.9465L43.2501 34.0409Z"
                  fill="#552CB7"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
