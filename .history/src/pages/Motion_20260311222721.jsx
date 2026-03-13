import style from '../styles/Motion.module.css';
import mobiPreviewImg from '../assets/mobi_preview1.jpg';
import mobiLogo from '../assets/mobi_logo.png';

export default function Motion() {
  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          Brochure <br /> Design
        </h1>
        <div className={style.imageSection}>
          {/* Decorative shapes around brochures */}
          <svg
            className={style.starPink}
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="54"
            viewBox="0 0 47 54"
            fill="none"
          >
            <path
              d="M29.3584 15.4902L29.6543 16.1377L30.3633 16.0703L44.6807 14.7031L36.3379 26.4199L35.9248 27L36.3379 27.5801L44.6807 39.2959L30.3633 37.9297L29.6543 37.8623L29.3584 38.5098L23.3828 51.5938L17.4072 38.5098L17.1113 37.8623L16.4023 37.9297L2.08398 39.2959L10.4277 27.5801L10.8408 27L10.4277 26.4199L2.08398 14.7031L16.4023 16.0703L17.1113 16.1377L17.4072 15.4902L23.3828 2.40527L29.3584 15.4902Z"
              fill="#FB7DA8"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          <svg
            className={style.starGreen}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              d="M38.4346 22.9746L38.5947 23.4053L39.0254 23.5654L59.1191 31L39.0254 38.4346L38.5947 38.5947L38.4346 39.0254L31 59.1191L23.5654 39.0254L23.4053 38.5947L22.9746 38.4346L2.87988 31L22.9746 23.5654L23.4053 23.4053L23.5654 22.9746L31 2.87988L38.4346 22.9746Z"
              fill="#00995E"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          <svg
            className={style.diamondOrange}
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="33"
            viewBox="0 0 55 33"
            fill="none"
          >
            <path
              d="M25.8471 0.868016L53.4233 13.5917L29.0389 31.6944L1.46181 18.9718L25.8471 0.868016Z"
              fill="#FFC567"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
          <svg
            className={style.diamondBlue}
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="37"
            viewBox="0 0 27 37"
            fill="none"
          >
            <path
              d="M22.5261 11.8031L25.31 35.6919L3.68669 25.1631L0.90282 1.2743L22.5261 11.8031Z"
              fill="#058CD7"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
          <svg
            className={style.starRedOutline}
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="45"
            viewBox="0 0 47 45"
            fill="none"
          >
            <path
              d="M28.0879 17.1611L28.2568 17.6787H44.2939L31.7598 26.7852L31.3193 27.1055L31.4873 27.624L36.2744 42.3564L23.7412 33.251L23.3008 32.9307L22.8604 33.251L10.3262 42.3564L15.1143 27.624L15.2822 27.1055L14.8418 26.7852L2.30762 17.6787H18.3447L18.5137 17.1611L23.3008 2.42578L28.0879 17.1611Z"
              fill="#FD5A46"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
          <svg
            className={style.starPurple}
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              d="M26.3691 16.04L26.5283 16.4717L26.96 16.6309L40.1191 21.5L26.96 26.3691L26.5283 26.5283L26.3691 26.96L21.5 40.1191L16.6309 26.96L16.4717 26.5283L16.04 26.3691L2.87988 21.5L16.04 16.6309L16.4717 16.4717L16.6309 16.04L21.5 2.87988L26.3691 16.04Z"
              fill="#552CB7"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          <svg
            className={style.diamondPink}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 30 50"
            fill="none"
          >
            <path
              d="M28.7569 32.955L1.1309 48.4707L0.755723 16.7885L28.3809 1.27233L28.7569 32.955Z"
              fill="#FB7DA8"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className={style.subTitle}>
          <div className={style.subtitleLogo}>
            <img src={mobiLogo} alt="Mobi by Rogers logo" />
          </div>
          <p>Tour Brochure Design</p>
        </div>
      </div>
      <div className={style.content}>
        {/* Motion page content - 세로 레이아웃 */}
      </div>
    </div>
  );
}
