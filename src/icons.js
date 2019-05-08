import { h, render, Component } from 'preact';

import s from './style.css';

export function Anonymous() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect height="32" width="32" />
      <path d="m18,23.521078l0,-1.780245c2.203,-1.339772 4,-4.682185 4,-8.023518c0,-5.366645 0,-9.716316 -6,-9.716316s-6,4.349671 -6,9.716316c0,3.342413 1.797,6.683746 4,8.023518l0,1.780245c-6.784,0.599173 -12,4.197448 -12,8.548199l28,0c0,-4.35075 -5.216,-7.950105 -12,-8.548199z" />
    </svg>
  );
}

export function ReplyIcon() {
  return (
    <svg
      className={s.icon}
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.44444 3.27774V0.166626L0 5.61107L5.44444 11.0555V7.86663C9.33333 7.86663 12.0556 9.11107 14 11.8333C13.2222 7.9444 10.8889 4.05552 5.44444 3.27774Z" />
    </svg>
  );
}

export function PushIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path d="M13.9539 12.6519L12.8378 10.8632C12.3224 10.0376 12.05 9.09192 12.05 8.12942V6.56253C12.05 4.5844 10.6771 2.91127 8.79984 2.37189V1.25002C8.79984 0.560628 8.21677 0 7.49978 0C6.78279 0 6.19972 0.560628 6.19972 1.25002V2.37189C4.32247 2.91127 2.94961 4.5844 2.94961 6.56253V8.12942C2.94961 9.09192 2.67724 10.0369 2.16242 10.8626L1.04634 12.6513C0.985887 12.7482 0.984577 12.8682 1.04244 12.9663C1.1003 13.0644 1.20756 13.1251 1.32456 13.1251H13.675C13.792 13.1251 13.8999 13.0645 13.9578 12.967C14.0157 12.8694 14.0137 12.7482 13.9539 12.6519Z" />
        <path d="M5.45288 13.75C5.8195 14.4863 6.59563 15 7.49979 15C8.40395 15 9.18012 14.4863 9.54673 13.75H5.45288Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 0C3.36449 0 0 3.36444 0 7.49989C0 11.6355 3.36449 15 7.5 15C7.80947 15 8.06023 14.7492 8.06023 14.4398C8.06023 14.1304 7.80947 13.8796 7.5 13.8796C3.98231 13.8796 1.12045 11.0177 1.12045 7.49989C1.12045 3.98225 3.98231 1.12043 7.5 1.12043C11.0177 1.12043 13.8795 3.98225 13.8795 7.49989V9.23507C13.8795 9.88283 13.3525 10.4098 12.7046 10.4098C12.0569 10.4098 11.5299 9.88283 11.5299 9.23507V7.49989C11.5299 5.27769 9.72208 3.46984 7.49993 3.46984C5.2777 3.46984 3.46981 5.27769 3.46981 7.49989C3.46981 9.72223 5.2777 11.5302 7.49993 11.5302C8.73324 11.5302 9.83831 10.9728 10.5781 10.0972C10.9196 10.9366 11.7439 11.5302 12.7046 11.5302C13.9702 11.5302 15 10.5006 15 9.23507V7.49989C15 3.36444 11.6355 0 7.5 0ZM7.5 10.4098C5.89559 10.4098 4.59034 9.10442 4.59034 7.49989C4.59034 5.8955 5.89566 4.59027 7.5 4.59027C9.10434 4.59027 10.4095 5.8955 10.4095 7.49989C10.4095 9.10442 9.10434 10.4098 7.5 10.4098Z" />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M16.0009 31.9997C24.8373 31.9997 32.0007 24.8363 32.0007 15.9999C32.0007 7.16338 24.8373 0 16.0009 0C7.16439 0 0.00100708 7.16338 0.00100708 15.9999C0.00100708 24.8363 7.16439 31.9997 16.0009 31.9997Z"
          fill="#55ACEE"
        />
        <path
          d="M25.8006 11.4985C25.115 11.8025 24.3774 12.0082 23.6039 12.1C24.3937 11.6268 24.9997 10.8782 25.2858 9.98459C24.5468 10.423 23.728 10.741 22.8572 10.9124C22.1596 10.1694 21.1656 9.70508 20.065 9.70508C17.9533 9.70508 16.2406 11.4178 16.2406 13.5295C16.2406 13.8293 16.2745 14.121 16.3401 14.4011C13.1617 14.2417 10.3435 12.7192 8.45713 10.4047C8.128 10.9694 7.93918 11.6268 7.93918 12.3276C7.93918 13.6541 8.61485 14.8252 9.64048 15.5109C9.01387 15.4912 8.42376 15.3192 7.90838 15.032C7.9081 15.0483 7.9081 15.0645 7.9081 15.0805C7.9081 16.9335 9.22692 18.4791 10.9761 18.8302C10.6556 18.918 10.317 18.9645 9.96876 18.9645C9.72176 18.9645 9.48247 18.9408 9.24917 18.8963C9.73574 20.4154 11.1478 21.5212 12.8217 21.5522C11.5126 22.5782 9.8638 23.1894 8.07152 23.1894C7.76349 23.1894 7.45832 23.1714 7.1597 23.1357C8.85129 24.2213 10.862 24.8541 13.0217 24.8541C20.0562 24.8541 23.9031 19.0267 23.9031 13.9724C23.9031 13.8067 23.8994 13.6416 23.892 13.4779C24.6398 12.9388 25.2881 12.2654 25.8006 11.4985Z"
          fill="#F1F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#3B5998"
      />
      <path
        d="M20.0224 16.6262H17.1674V27.0856H12.8418V16.6262H10.7845V12.9504H12.8418V10.5717C12.8418 8.87066 13.6498 6.20703 17.2059 6.20703L20.41 6.22044V9.78848H18.0852C17.7039 9.78848 17.1677 9.979 17.1677 10.7904V12.9538H20.4003L20.0224 16.6262Z"
        fill="white"
      />
    </svg>
  );
}

export const CollapseIcon = () => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.46484 0.374999C1.18359 0.374999 0.972657 0.515624 0.832032 0.796874C0.726564 1.07812 0.76172 1.35937 0.972657 1.57031L5.50781 6.10547C5.64844 6.24609 5.82422 6.31641 6 6.31641C6.21094 6.31641 6.35156 6.24609 6.49219 6.10547L11.0273 1.57031C11.2383 1.35937 11.3086 1.07812 11.168 0.796875C11.0625 0.515625 10.8516 0.375 10.5352 0.375L1.46484 0.374999Z"
      fill="#B6B1BB"
    />
  </svg>
);

export const UncollapseIcon = () => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5352 6.625C10.8164 6.625 11.0273 6.48437 11.168 6.20312C11.2734 5.92187 11.2383 5.64062 11.0273 5.42969L6.49219 0.894531C6.35156 0.753906 6.17578 0.683594 6 0.683594C5.78906 0.683594 5.64844 0.753906 5.50781 0.894531L0.972656 5.42969C0.761719 5.64062 0.691406 5.92188 0.832031 6.20312C0.9375 6.48438 1.14844 6.625 1.46484 6.625L10.5352 6.625Z"
      fill="#B6B1BB"
    />
  </svg>
);

export const HeartIcon = () => (
  <svg
    width="26"
    height="27"
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13" cy="13.7598" r="12.5" fill="#EC5569" stroke="white" />
    <g clip-path="url(#clip0)">
      <path
        d="M13 19.8931L12.0667 18.9598C8.60001 15.8931 6.33334 13.8265 6.33334 11.2931C6.33334 9.22646 7.93334 7.62646 10 7.62646C11.1333 7.62646 12.2667 8.1598 13 9.02646C13.7333 8.1598 14.8667 7.62646 16 7.62646C18.0667 7.62646 19.6667 9.22646 19.6667 11.2931C19.6667 13.8265 17.4 15.8931 13.9333 18.9598L13 19.8931Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="13.3333"
          height="13.3333"
          fill="white"
          transform="translate(6.33334 7.09326)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const LikeIcon = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13.76" cy="13.7598" r="12.5" fill="#55ACEE" stroke="white" />
    <g clip-path="url(#clip0)">
      <path
        d="M18.9882 14.162C19.2422 13.7785 19.369 13.3563 19.369 12.8951C19.369 12.3614 19.1723 11.8978 18.7786 11.5036C18.3847 11.1098 17.9183 10.913 17.3795 10.913H16.0116C16.2602 10.4001 16.3848 9.90258 16.3848 9.42077C16.3848 8.8145 16.2938 8.33266 16.1127 7.97512C15.9313 7.61747 15.667 7.35459 15.3198 7.18611C14.9725 7.01771 14.5814 6.93359 14.1462 6.93359C13.8818 6.93359 13.6487 7.02944 13.4467 7.22123C13.2239 7.43881 13.0633 7.71869 12.9648 8.06068C12.8664 8.40257 12.7873 8.73035 12.7278 9.04385C12.6683 9.35731 12.5762 9.57882 12.4519 9.70835C12.1979 9.98296 11.9208 10.3147 11.6202 10.7032C11.0969 11.382 10.7419 11.7836 10.5555 11.908H8.42592C8.1513 11.908 7.91681 12.0053 7.72249 12.1994C7.52826 12.3938 7.43108 12.6282 7.43108 12.9029V17.877C7.43108 18.1517 7.52815 18.3861 7.72249 18.5804C7.91691 18.7747 8.1513 18.872 8.42592 18.872H10.6642C10.7782 18.872 11.1356 18.9756 11.7367 19.1829C12.3741 19.4057 12.935 19.5753 13.4194 19.692C13.9039 19.8086 14.3948 19.8669 14.8923 19.8669H15.6149H15.8948C16.6254 19.8669 17.2134 19.6582 17.6591 19.2411C18.1046 18.8239 18.3249 18.2553 18.3198 17.5351C18.6307 17.1361 18.7861 16.6749 18.7861 16.1516C18.7861 16.0377 18.7784 15.9263 18.7628 15.8174C18.9596 15.4704 19.0583 15.0973 19.0583 14.6983C19.0582 14.5117 19.0349 14.3329 18.9882 14.162ZM9.27311 17.7295C9.17467 17.8278 9.0581 17.8772 8.92338 17.8772C8.78863 17.8772 8.67204 17.8279 8.57357 17.7295C8.47516 17.6311 8.42592 17.5145 8.42592 17.3796C8.42592 17.2449 8.47506 17.1284 8.57357 17.0299C8.67215 16.9315 8.78863 16.8822 8.92338 16.8822C9.0581 16.8822 9.17467 16.9315 9.27311 17.0299C9.37157 17.1284 9.42082 17.2449 9.42082 17.3796C9.42082 17.5145 9.37157 17.6311 9.27311 17.7295ZM18.2074 13.5328C18.096 13.7711 17.9573 13.8929 17.7915 13.898C17.8692 13.9861 17.934 14.1093 17.9859 14.2672C18.0377 14.4253 18.0634 14.569 18.0634 14.6986C18.0634 15.056 17.9263 15.3643 17.6516 15.6233C17.745 15.7891 17.7916 15.9679 17.7916 16.1595C17.7916 16.3513 17.7463 16.5417 17.6556 16.7308C17.565 16.9197 17.4418 17.0558 17.2865 17.1386C17.3123 17.294 17.3252 17.4392 17.3252 17.5738C17.3252 18.4391 16.8277 18.8718 15.8328 18.8718H14.8926C14.2137 18.8718 13.3278 18.6828 12.2344 18.3044C12.2085 18.2941 12.1334 18.2668 12.009 18.2228C11.8846 18.1788 11.7926 18.1464 11.733 18.1258C11.6734 18.1049 11.5828 18.0751 11.461 18.0363C11.3392 17.9974 11.2408 17.9688 11.1656 17.9508C11.0906 17.9327 11.005 17.9159 10.9092 17.9003C10.8134 17.8848 10.7318 17.877 10.6644 17.877H10.4157V12.9031H10.6644C10.7473 12.9031 10.8393 12.8797 10.9403 12.8331C11.0413 12.7865 11.145 12.7166 11.2512 12.6233C11.3575 12.53 11.4571 12.438 11.5505 12.3473C11.6437 12.2566 11.7474 12.1427 11.8614 12.0054C11.9754 11.868 12.0647 11.758 12.1296 11.6751C12.1943 11.5922 12.2759 11.4859 12.3743 11.3564C12.4727 11.2269 12.5324 11.1491 12.5531 11.1232C12.838 10.7709 13.0375 10.5351 13.1515 10.4159C13.364 10.1932 13.5181 9.90949 13.6139 9.56491C13.7099 9.22028 13.7889 8.89513 13.8509 8.58948C13.913 8.2838 14.0115 8.06351 14.1464 7.92879C14.6437 7.92879 14.9754 8.0505 15.1412 8.29406C15.3069 8.53756 15.3898 8.91326 15.3898 9.42104C15.3898 9.72672 15.2654 10.1425 15.0166 10.6684C14.768 11.1943 14.6437 11.6076 14.6437 11.9081H17.3794C17.6388 11.9081 17.8693 12.0078 18.0713 12.2074C18.2734 12.4068 18.3746 12.6386 18.3746 12.903C18.3745 13.0843 18.3188 13.2942 18.2074 13.5328Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="12.9333"
          height="12.9333"
          fill="white"
          transform="translate(19.8667 19.8667) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SadIcon = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13.96" cy="13.7593" r="12.5" stroke="white" />
    <g clip-path="url(#clip0)">
      <path
        d="M13.96 25.7593C20.5874 25.7593 25.96 20.3867 25.96 13.7593C25.96 7.13186 20.5874 1.75928 13.96 1.75928C7.33254 1.75928 1.95996 7.13186 1.95996 13.7593C1.95996 20.3867 7.33254 25.7593 13.96 25.7593Z"
        fill="#FFC10E"
      />
      <path
        d="M20.0217 19.6912C16.668 16.267 11.1974 16.2812 7.86326 19.7268C7.43844 20.1656 8.1077 20.8364 8.53308 20.3966C11.5142 17.3162 16.3512 17.2972 19.3518 20.361C19.7799 20.7982 20.4493 20.1277 20.0217 19.6912Z"
        fill="#333333"
      />
      <path
        d="M10.3124 11.5051C11.3532 11.5051 12.197 10.6613 12.197 9.62045C12.197 8.57961 11.3532 7.73584 10.3124 7.73584C9.27153 7.73584 8.42776 8.57961 8.42776 9.62045C8.42776 10.6613 9.27153 11.5051 10.3124 11.5051Z"
        fill="#333333"
      />
      <path
        d="M17.4389 11.5051C18.4797 11.5051 19.3235 10.6613 19.3235 9.62045C19.3235 8.57961 18.4797 7.73584 17.4389 7.73584C16.398 7.73584 15.5543 8.57961 15.5543 9.62045C15.5543 10.6613 16.398 11.5051 17.4389 11.5051Z"
        fill="#333333"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(1.95996 1.75928)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const HappyIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13" cy="13" r="12.5" stroke="white" />
    <g clip-path="url(#clip0)">
      <path
        d="M13 25.0001C19.6275 25.0001 25.0001 19.6275 25.0001 13C25.0001 6.37259 19.6275 1 13 1C6.37259 1 1 6.37259 1 13C1 19.6275 6.37259 25.0001 13 25.0001Z"
        fill="#FFC10E"
      />
      <path
        d="M20.4035 13.0079C20.3361 17.0945 17.0859 20.3443 12.9993 20.4118C8.91249 20.4793 5.66113 16.9926 5.59535 13.0079C5.58532 12.3976 4.63789 12.3966 4.64792 13.0079C4.72388 17.6122 8.39495 21.2832 12.9992 21.3592C17.6039 21.4351 21.2766 17.4979 21.3509 13.0079C21.361 12.3966 20.4136 12.3976 20.4035 13.0079Z"
        fill="#333333"
      />
      <path
        d="M9.35243 10.7453C10.3933 10.7453 11.2371 9.90156 11.2371 8.8607C11.2371 7.81985 10.3933 6.97607 9.35243 6.97607C8.31158 6.97607 7.4678 7.81985 7.4678 8.8607C7.4678 9.90156 8.31158 10.7453 9.35243 10.7453Z"
        fill="#333333"
      />
      <path
        d="M16.4789 10.7453C17.5198 10.7453 18.3635 9.90156 18.3635 8.8607C18.3635 7.81985 17.5198 6.97607 16.4789 6.97607C15.438 6.97607 14.5943 7.81985 14.5943 8.8607C14.5943 9.90156 15.438 10.7453 16.4789 10.7453Z"
        fill="#333333"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" transform="translate(1 1)" />
      </clipPath>
    </defs>
  </svg>
);

export const InLoveIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13" cy="13" r="12.5" stroke="white" />
    <g clip-path="url(#clip0)">
      <path
        d="M13 25.0001C19.6275 25.0001 25.0001 19.6275 25.0001 13C25.0001 6.37259 19.6275 1 13 1C6.37259 1 1 6.37259 1 13C1 19.6275 6.37259 25.0001 13 25.0001Z"
        fill="#FFC10E"
      />
      <path
        d="M10.2231 6.56885C9.50741 6.56885 8.84256 6.91786 8.4429 7.50225L8.36046 7.60702L8.30531 7.53673C7.91022 6.93097 7.2442 6.56905 6.52115 6.56905C5.28741 6.56905 4.39214 7.46457 4.39214 8.69791C4.39214 10.519 7.68917 13.2033 7.92961 13.3965C8.0431 13.5051 8.19168 13.5648 8.34932 13.5648C8.50696 13.5648 8.65554 13.5053 8.76903 13.3964C9.01023 13.2015 12.352 10.4753 12.352 8.69791C12.352 7.46437 11.4567 6.56885 10.2231 6.56885Z"
        fill="#ED3533"
      />
      <path
        d="M19.5696 6.56885C18.8539 6.56885 18.1891 6.91786 17.7894 7.50225L17.707 7.60702L17.6518 7.53673C17.2567 6.93097 16.5907 6.56905 15.8677 6.56905C14.6339 6.56905 13.7386 7.46457 13.7386 8.69791C13.7386 10.519 17.0357 13.2033 17.2761 13.3965C17.3896 13.5051 17.5382 13.5648 17.6958 13.5648C17.8533 13.5648 18.0018 13.5053 18.1155 13.3964C18.3566 13.2017 21.6983 10.4753 21.6983 8.69791C21.6985 7.46437 20.8032 6.56885 19.5696 6.56885Z"
        fill="#ED3533"
      />
      <path
        d="M18.3825 17.0459C15.3805 20.1008 10.5504 20.0769 7.57336 17.0004C7.14799 16.5608 6.47872 17.2314 6.90355 17.6702C10.2341 21.1122 15.6969 21.1306 19.0523 17.7157C19.4807 17.2799 18.8111 16.6097 18.3825 17.0459Z"
        fill="#333333"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" transform="translate(1 1)" />
      </clipPath>
    </defs>
  </svg>
);
