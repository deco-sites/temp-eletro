interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  linkText?: string;
  linkUrl?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.linkText
        ? (
          <div
            class={`flex px-4 lg:px-10 justify-between gap-2 ${props.alignment === "left" ? "text-left" : "text-center"
              }`}
          >
            {props.title &&
              (
                <h2
                  class={`text-base lg:text-2xl leading-8 lg:leading-10 font-bold
                  ${props.colorReverse
                      ? "text-primary-content"
                      : "text-primary"
                    }
                  ${props.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
                `}
                >
                  {props.title}
                </h2>
              )}
            {props.linkText &&
              (
                <a href={props.linkUrl}
                  class={`
                  flex gap-3 items-center
                  leading-6 lg:leading-8 text-primary text-sm font-bold
                  ${props.colorReverse ? "text-primary-content" : "text-neutral"
                    }
                  ${props.fontSize === "Normal" ? "lg:text-base" : "lg:text-2xl"}
                `}
                >
                  {props.linkText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <g clip-path="url(#clip0_83_5078)">
                      <path d="M3.75 14.4271C3.74947 14.1769 3.84527 13.9343 4.02078 13.7417L9.29514 8.00105L4.20915 2.24974C4.11136 2.14018 4.03833 2.01413 3.99426 1.87882C3.95019 1.74351 3.93595 1.60161 3.95236 1.46128C3.96877 1.32095 4.01551 1.18495 4.08989 1.0611C4.16426 0.937251 4.26481 0.827996 4.38575 0.739613C4.50618 0.650649 4.64474 0.584213 4.79348 0.544123C4.94222 0.504033 5.09821 0.491081 5.25247 0.50601C5.40673 0.520939 5.55623 0.563455 5.69237 0.631115C5.82851 0.698774 5.94861 0.790243 6.04576 0.900265L11.7322 7.32632C11.9053 7.51796 12 7.75834 12 8.00641C12 8.25448 11.9053 8.49486 11.7322 8.6865L5.84562 15.1126C5.74678 15.221 5.6254 15.3106 5.48842 15.3764C5.35145 15.4421 5.20157 15.4825 5.04737 15.4955C4.89317 15.5084 4.73768 15.4935 4.5898 15.4517C4.44193 15.4099 4.30457 15.342 4.18561 15.2518C4.05055 15.1521 3.94145 15.0265 3.86613 14.8839C3.79081 14.7413 3.75115 14.5853 3.75 14.4271Z" fill="#0344DC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_5078">
                        <rect width="20" height="20" fill="white" transform="translate(15 0.5) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
