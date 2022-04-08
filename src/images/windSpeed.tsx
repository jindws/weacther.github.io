import React from "react";

export default function WindSpeed({ color = "white" }: { color?: string }) {
  return (
    <svg
      width="1.2rem"
      style={{
        padding:'0 0.15rem'
      }}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.93281 7.37571H8.61006C9.53886 7.3824 10.4375 7.04584 11.1334 6.43059C11.8293 5.81533 12.2736 4.96474 12.3808 4.04211C12.4842 3.00589 12.1408 1.97465 11.4366 1.20737C10.7375 0.439817 9.74793 0.00161124 8.70973 -0.000137329H6.63812C6.3049 -0.000137329 5.99701 0.17772 5.83038 0.466216C5.66377 0.754833 5.66377 1.11041 5.83038 1.39903C5.99699 1.68751 6.3049 1.86538 6.63812 1.86538H8.70973C9.23471 1.86605 9.73401 2.09306 10.08 2.48801C10.4258 2.88298 10.5849 3.40782 10.5163 3.92842C10.4476 4.37506 10.2191 4.78155 9.87318 5.07229C9.52737 5.36318 9.08769 5.51842 8.63594 5.50943H0.932639C0.599423 5.50943 0.291531 5.68716 0.124903 5.97579C-0.0417258 6.26442 -0.0417053 6.61984 0.124903 6.90846C0.29151 7.19708 0.599416 7.37481 0.932639 7.37481L0.93281 7.37571Z"
        fill={color}
      />
      <path
        d="M17.9834 13.5293C17.8762 12.6067 17.4321 11.7562 16.7363 11.1411C16.0404 10.5258 15.142 10.1891 14.2132 10.1957H7.80006C7.46685 10.1957 7.15896 10.3734 6.99233 10.6621C6.82572 10.9507 6.82572 11.3063 6.99233 11.5947C7.15893 11.8834 7.46684 12.0611 7.80006 12.0611H14.2386C14.6903 12.0521 15.13 12.2075 15.4758 12.4982C15.8218 12.7891 16.0502 13.1956 16.1189 13.6421C16.1875 14.1627 16.0285 14.6875 15.6826 15.0825C15.3366 15.4776 14.8374 15.7045 14.3124 15.7053H12.24C11.9067 15.7053 11.5989 15.883 11.4322 16.1716C11.2656 16.4601 11.2656 16.8157 11.4322 17.1043C11.5988 17.3929 11.9067 17.5707 12.24 17.5707H14.3114C15.3501 17.5697 16.3405 17.1318 17.04 16.3641C17.7439 15.5967 18.087 14.5655 17.9832 13.5294L17.9834 13.5293Z"
        fill={color}
      />
      <path
        d="M5.74482 11.1293C5.74469 10.8818 5.64638 10.6446 5.4716 10.4696C5.29669 10.2945 5.05949 10.196 4.81215 10.1957H0.932724C0.599508 10.1957 0.291615 10.3734 0.124987 10.662C-0.0416215 10.9507 -0.0416215 11.3062 0.124987 11.5947C0.291595 11.8833 0.599501 12.0611 0.932724 12.0611H4.81215C5.05925 12.0608 5.29616 11.9625 5.47095 11.7879C5.64574 11.6132 5.7443 11.3764 5.74484 11.1293L5.74482 11.1293Z"
        fill={color}
      />
      <path
        d="M12.7052 7.97812C12.7847 7.97812 12.8611 7.94651 12.9173 7.89026L13.5495 7.2581H13.5493C14.4181 7.43033 15.3143 7.14131 15.9188 6.49404C16.5233 5.84676 16.7505 4.93311 16.5193 4.07809C16.4917 3.97417 16.4106 3.893 16.3067 3.86541C15.4516 3.63439 14.538 3.86153 13.8907 4.46596C13.2434 5.07053 12.9544 5.96665 13.1267 6.83542L12.4931 7.46569C12.4073 7.55154 12.3816 7.68052 12.4281 7.79262C12.4746 7.90471 12.5839 7.97771 12.7052 7.97784L12.7052 7.97812Z"
        fill={color}
      />
      <path
        d="M6.23133 13.3243L5.59917 12.6921C5.48145 12.5784 5.29435 12.5801 5.17862 12.6959C5.06289 12.8116 5.06129 12.9987 5.175 13.1164L5.80676 13.7486V13.7484C5.64403 14.5851 5.90573 15.4479 6.50574 16.0531C7.12972 16.6705 8.52447 17.1949 9.19973 16.5031H9.19987C9.43063 15.6484 9.20362 14.7351 8.59959 14.088C7.99543 13.4407 7.09985 13.1516 6.23132 13.3231L6.23133 13.3243Z"
        fill={color}
      />
    </svg>
  );
}
