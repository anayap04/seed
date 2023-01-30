import * as React from "react";
const SvgGrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      d="M287 513H1.035V1.097H512.84V513H287m50.503-227.98 8.328 12.312c-1.46 1.72-3.37 3.561-4.797 5.72-6.716 10.165-13.262 20.44-19.983 30.6-.688 1.04-2.13 2.232-3.235 2.245-13.119.156-26.24.1-39.814.1 0-5.881-.158-11.344.11-16.785.068-1.389 1.163-3.19 2.34-3.988 9.322-6.323 13.344-15.291 13.532-26.247.091-5.281.016-10.564.016-15.797 8.563-.43 15.948-5.48 15.791-11.892-.25-10.261 2.62-20.857-2.47-30.795-.58-1.134-.2-2.92.107-4.323 2.809-12.84 11.088-22.56 18.597-32.772 7.319-9.951 15.19-19.658 21.186-30.384 10.748-19.226 13.176-40.413 9.594-61.898-4.375-26.25-17.644-47.852-39.022-63.554-26.141-19.199-55.595-25.542-87.515-18.538-24.66 5.412-45.392 17.834-60.463 37.991-15.615 20.885-22.973 44.58-19.936 71.158 1.83 16.031 6.472 30.807 15.773 43.972 9.39 13.29 19.319 26.208 28.443 39.674 3.786 5.588 7.922 12.436 5.523 19.146-2.682 7.503-2.242 14.84-2.653 22.337-.299 5.433.233 10.961 3.973 14.74 2.95 2.98 7.57 4.306 12.072 6.7 0 1.936.166 4.934-.028 7.91-.892 13.657 3.243 25.042 14.665 33.257.567.408 1.279 1.131 1.288 1.717.094 6.084.058 12.169.058 18.374-13.066 0-25.395-.134-37.717.089-3.342.06-4.694-1.301-6.373-3.982a723.483 723.483 0 0 0-20.721-31.269c-2.244-3.2-1.88-5.111.37-8.008 12.776-16.457 18.195-35.316 15.222-55.817-2.946-20.317-14.65-36.326-28.85-50.444-5.793-5.761-12.366-10.768-18.792-15.856-6.266-4.96-12.36-2.434-14.734 3.597-3.604 9.157-7.402 18.343-9.776 27.852-2.983 11.953-3.938 24.221-.778 36.491 2.041 7.927 3.671 15.96 5.437 23.73-2.163-.71-4.65-1.86-7.26-2.325-8.324-1.487-16.669-2.904-25.052-3.996-7.102-.924-12.39 5.174-10.876 12.15.205.945.742 1.827.89 2.775 2.654 16.921 11.274 29.945 26.56 37.585 6.66 3.33 14.358 5.334 21.786 6.19 9.062 1.044 18.336.208 27.518.27 2.737.02 6.776-.76 7.983.69 5.027 6.031 9.2 12.774 14.395 20.278-6.927 0-12.369-.172-17.796.037-10.717.41-17.377 7.358-17.416 17.593-.018 4.832-.047 9.666.006 14.498.112 10.158 6.835 16.852 16.887 16.871 2.966.006 5.933.001 8.9.001.471 3.043.742 5.65 1.288 8.198 6.63 30.937 13.31 61.864 19.959 92.797 1.918 8.926 3.662 10.991 9.793 10.994 42.496.02 84.992-.006 127.488.033 4.848.005 7.692-2.2 8.675-6.904 2.057-9.847 4.08-19.702 6.187-29.539 4.59-21.417 9.328-42.802 13.8-64.244 2.32-11.122 2.121-11.164 13.275-11.335 5.674-.087 12.616-4.546 13.52-10.302 1.17-7.447.805-15.127 1.243-22.698.344-5.962-4.72-14.11-12.191-14.942-7.02-.782-14.096-1.049-22.032-1.604 3.318-4.943 7.314-9.411 9.569-14.632 2.768-6.41 7.224-6.682 12.779-5.823 14.673 2.272 28.988 1.21 43.06-3.92 18.934-6.9 32.02-25.571 32.752-45.223.24-6.452-3.834-10.469-10.344-9.756-7.745.848-15.42 2.374-23.103 3.734-3.089.546-6.119 1.43-9.18 2.162-.179-.852-.381-1.213-.291-1.475 5.604-16.27 8.403-32.767 6.09-50.113-1.742-13.07-5.55-25.364-11.494-36.961-3.075-6-8.215-6.78-13.894-2.687-14.625 10.543-27.714 22.597-37.253 38.18-15.262 24.936-15.37 50.071-.99 76.08z"
    />
    <path
      fill={props.color}
      d="M337.243 284.748c-14.121-25.737-14.013-50.872 1.25-75.808 9.538-15.583 22.627-27.637 37.252-38.18 5.679-4.093 10.819-3.313 13.894 2.687 5.944 11.597 9.752 23.89 11.495 36.96 2.312 17.347-.487 33.844-6.091 50.114-.09.262.112.623.291 1.475 3.061-.731 6.091-1.616 9.18-2.162 7.683-1.36 15.358-2.886 23.103-3.734 6.51-.713 10.585 3.304 10.344 9.756-.732 19.652-13.818 38.323-32.752 45.224-14.072 5.129-28.387 6.19-43.06 3.92-5.555-.86-10.01-.589-12.78 5.822-2.254 5.22-6.25 9.69-9.568 14.632 7.936.555 15.013.822 22.032 1.604 7.471.832 12.535 8.98 12.19 14.942-.437 7.571-.072 15.251-1.242 22.698-.904 5.756-7.846 10.215-13.52 10.302-11.154.171-10.956.213-13.275 11.335-4.472 21.442-9.21 42.827-13.8 64.244-2.108 9.837-4.13 19.692-6.187 29.539-.983 4.705-3.827 6.909-8.675 6.904-42.496-.039-84.992-.012-127.488-.033-6.13-.003-7.875-2.068-9.793-10.994-6.649-30.933-13.328-61.86-19.96-92.797-.545-2.548-.816-5.155-1.286-8.198-2.968 0-5.935.005-8.901 0-10.052-.02-16.775-6.714-16.887-16.872-.053-4.832-.024-9.666-.006-14.498.039-10.235 6.7-17.182 17.416-17.593 5.427-.209 10.869-.037 17.796-.037-5.194-7.504-9.368-14.247-14.395-20.279-1.207-1.449-5.246-.67-7.983-.688-9.182-.063-18.456.773-27.518-.271-7.428-.856-15.126-2.86-21.787-6.19-15.285-7.64-23.905-20.664-26.559-37.585-.148-.948-.685-1.83-.89-2.776-1.514-6.975 3.774-13.073 10.876-12.149 8.383 1.092 16.728 2.509 25.052 3.996 2.61.466 5.097 1.615 7.26 2.326-1.766-7.771-3.396-15.804-5.437-23.73-3.16-12.27-2.205-24.54.778-36.492 2.374-9.51 6.172-18.695 9.776-27.852 2.373-6.031 8.468-8.557 14.734-3.597 6.426 5.088 12.999 10.095 18.793 15.856 14.199 14.118 25.903 30.127 28.85 50.444 2.972 20.501-2.447 39.36-15.224 55.817-2.25 2.897-2.613 4.808-.37 8.008a723.483 723.483 0 0 1 20.722 31.269c1.68 2.68 3.03 4.042 6.373 3.982 12.322-.223 24.651-.089 37.717-.089 0-6.205.036-12.29-.058-18.374-.01-.586-.72-1.31-1.288-1.717-11.422-8.215-15.557-19.6-14.665-33.258.194-2.975.028-5.973.028-7.91-4.503-2.393-9.122-3.72-12.072-6.699-3.74-3.779-4.272-9.307-3.973-14.74.411-7.496-.03-14.834 2.653-22.337 2.399-6.71-1.737-13.558-5.523-19.146-9.124-13.466-19.053-26.384-28.443-39.674-9.3-13.165-13.942-27.94-15.773-43.972-3.037-26.578 4.321-50.273 19.936-71.158 15.071-20.157 35.802-32.58 60.463-37.99 31.92-7.005 61.374-.662 87.515 18.537 21.378 15.702 34.647 37.304 39.022 63.554 3.582 21.485 1.154 42.672-9.594 61.898-5.996 10.726-13.867 20.433-21.186 30.384-7.509 10.211-15.788 19.933-18.597 32.772-.307 1.403-.687 3.19-.107 4.323 5.09 9.938 2.22 20.534 2.47 30.795.157 6.412-7.228 11.462-15.791 11.892 0 5.233.075 10.516-.016 15.797-.188 10.956-4.21 19.924-13.533 26.247-1.176.797-2.27 2.6-2.339 3.988-.268 5.441-.11 10.904-.11 16.785 13.574 0 26.695.056 39.814-.1 1.105-.013 2.547-1.206 3.235-2.245 6.72-10.16 13.267-20.435 19.983-30.6 1.427-2.159 3.336-4 4.797-5.72-2.876-4.25-5.602-8.282-8.588-12.584m-40.355-110.133-18.527 3.44V224c2.688 0 5.02-.103 7.34.025 3.143.174 4.616-.37 5.663-4.211 1.765-6.473 4.424-13.03 8.161-18.57 8.1-12.01 17.259-23.299 25.73-35.065 12.124-16.837 17.9-35.832 15.529-56.385-2.478-21.49-11.666-39.848-28.596-54.3-20.936-17.874-44.994-25.091-71.76-21.225-23.45 3.388-42.996 14.908-57.368 34.2-16.47 22.108-20.86 46.404-13.295 73.021 4.884 17.186 16.387 30.117 26.954 43.677 8.432 10.82 16.253 21.888 19.409 35.587.285 1.237 1.797 2.946 2.915 3.093 3.205.419 6.5.147 9.578.147v-46.847c-20.396-.839-31.696-8.988-31.49-23.463.196-13.847 7.21-23.874 23.505-25.354 5.032-.457 11.173 1.75 15.468 4.69 9.09 6.226 11.043 16.134 9.748 26.98h14.886c.092-23.845 9.921-29.547 23.612-31.926 9.26-1.61 20.944 6.387 24.524 16.788 3.11 9.031 1.103 22.452-11.986 29.753M259.5 385h-83.36l20.318 94.802H310.82L331.148 385H259.5m-57-32h-52.15v14.686h206.3V353H202.5m153.965-70.049c1.307-.282 3.194-.108 3.831-.917 5.33-6.775 11.19-13.296 15.442-20.723 8.457-14.77 11.572-30.997 9.134-47.903-1.13-7.84-3.594-15.487-5.453-23.222l-1.901-.571c-7.222 8.013-15.003 15.599-21.522 24.148-8.136 10.669-13.137 22.806-11.996 36.721.965 11.776 5.371 22.248 12.465 32.467m-200.38-8.467c19.362-36.151-3.67-65.684-27.676-84.006-13.62 35.627-5.852 66.606 20.9 94.096 2.36-3.314 4.503-6.326 6.775-10.09M230 287.246c.139 10.33 6.625 16.752 16.92 16.754 4.655 0 9.31-.06 13.964.014 6.685.107 12.373-2.69 14.15-8.861 1.987-6.895 1.901-14.386 2.75-21.916H230v14.009M235.5 256h57.188v-14.717h-78.377V256h21.19m18.963-32h6.24v-46.68h-14.402V224h8.162m163.647 50.06c-18.685 3.236-35.18 10.76-48.526 24.73 6.042.134 11.914-.27 17.775-.801 13.667-1.237 26.98-9.208 30.75-23.93m-306.437 6.873-23.785-7.92c6.632 20.13 27.45 28.248 51.265 24.222-8.9-5.412-17.798-10.824-27.48-16.302M255.421 321h-9.08v14.657h14.489v-14.419a221.676 221.676 0 0 0-5.41-.238m30.63-161c3.999-.246 6.354-2.54 6.884-6.312.63-4.481-2.299-7.115-6.067-8.118-3.48-.925-6.537 1.228-7.697 4.389-1.11 3.025-1.014 6.493-1.484 10.041h8.363m-69.466-1.947 12.414 2.746c0-3.815.734-6.602-.188-8.639-1.127-2.49-3.302-5.032-5.687-6.23-1.44-.724-4.493.575-6.204 1.816-3.703 2.687-3.333 6.236-.335 10.307z"
    />
    <path
      fill="none"
      d="M297.178 174.354c12.8-7.04 14.805-20.46 11.696-29.492-3.58-10.401-15.265-18.397-24.524-16.788-13.69 2.379-23.52 8.081-23.611 31.926h-14.887c1.295-10.846-.657-20.754-9.748-26.98-4.295-2.94-10.436-5.147-15.468-4.69-16.295 1.48-23.309 11.507-23.506 25.354-.205 14.475 11.095 22.624 31.491 23.463v46.847c-3.078 0-6.373.272-9.578-.147-1.118-.147-2.63-1.856-2.915-3.093-3.156-13.699-10.977-24.768-19.409-35.587-10.567-13.56-22.07-26.491-26.954-43.677-7.565-26.617-3.175-50.913 13.295-73.02 14.372-19.293 33.918-30.813 57.368-34.2 26.766-3.867 50.824 3.35 71.76 21.223 16.93 14.453 26.118 32.811 28.596 54.3 2.37 20.554-3.405 39.55-15.528 56.386-8.472 11.766-17.63 23.056-25.73 35.065-3.738 5.54-6.397 12.097-8.162 18.57-1.047 3.84-2.52 4.385-5.663 4.211-2.32-.128-4.652-.025-7.34-.025v-45.946c6.159-1.143 12.343-2.291 18.817-3.7zM260 385h71.148l-20.328 94.802H196.458L176.14 385H260m-2.488 15c-3.828.001-7.67-.205-11.481.054-5.344.364-9.172 4.4-9.023 9.088.135 4.254 3.5 7.808 7.807 7.827 16.478.074 32.957.083 49.436-.004 4.627-.025 7.541-3.148 7.748-7.762.26-5.76-3.506-9.135-10.534-9.183-10.985-.075-21.971-.02-33.953-.02m-36.915 13.894c2.549-5.818 1.867-11.095-2.551-12.084-5.21-1.166-10.958-1.3-16.184-.33-2.025.377-4.333 4.932-4.514 7.714-.146 2.228 2.316 6.155 4.34 6.71 6.054 1.66 12.545 2.935 18.91-2.01zM203 353h153.65v14.686h-206.3V353H203zM356.26 282.647c-6.889-9.915-11.295-20.387-12.26-32.163-1.14-13.915 3.86-26.052 11.996-36.721 6.519-8.55 14.3-16.135 21.522-24.148l1.901.571c1.86 7.735 4.323 15.382 5.453 23.222 2.438 16.906-.677 33.134-9.134 47.903-4.252 7.427-10.111 13.948-15.442 20.723-.637.81-2.524.635-4.036.613zM156.02 274.86c-2.208 3.388-4.352 6.4-6.71 9.714-26.753-27.49-34.521-58.47-20.9-94.096 24.005 18.322 47.037 47.855 27.61 84.382zM230 286.776v-13.54h47.785c-.85 7.53-.764 15.022-2.75 21.917-1.778 6.172-7.466 8.968-14.151 8.861-4.654-.074-9.31-.013-13.964-.014-10.295-.002-16.781-6.425-16.92-17.224zM235 256h-20.689v-14.717h78.377V256H235z"
    />
    <path
      fill="none"
      d="M253.982 224h-7.68v-46.68h14.402V224h-6.722zM418.465 274.243c-4.126 14.538-17.438 22.51-31.105 23.746-5.861.53-11.733.935-17.775.801 13.346-13.97 29.841-21.494 48.88-24.547zM112.065 280.965c9.29 5.445 18.189 10.857 27.088 16.27-23.815 4.025-44.633-4.093-51.265-24.222 8.513 2.834 16.15 5.376 24.177 7.952zM255.9 321c1.918.077 3.356.154 4.93.238v14.419h-14.49V321h9.56zM285.606 160h-7.92c.47-3.548.374-7.016 1.484-10.041 1.16-3.16 4.218-5.314 7.697-4.389 3.768 1.003 6.697 3.637 6.067 8.118-.53 3.773-2.885 6.066-7.328 6.312zM216.293 157.775c-2.708-3.793-3.078-7.342.625-10.029 1.711-1.241 4.763-2.54 6.204-1.816 2.385 1.198 4.56 3.74 5.687 6.23.922 2.037.188 4.824.188 8.639-4.5-.995-8.457-1.87-12.704-3.024z"
    />
    <path
      fill={props.color}
      d="M258.01 400c11.484 0 22.47-.055 33.455.02 7.028.048 10.793 3.423 10.534 9.183-.207 4.614-3.121 7.737-7.748 7.762-16.479.087-32.958.078-49.436.004-4.307-.019-7.672-3.573-7.807-7.827-.149-4.687 3.679-8.724 9.023-9.088 3.81-.26 7.653-.053 11.98-.054zM220.306 414.182c-6.073 4.657-12.564 3.383-18.619 1.722-2.023-.555-4.485-4.482-4.34-6.71.182-2.782 2.49-7.337 4.515-7.713 5.226-.971 10.974-.837 16.184.33 4.418.988 5.1 6.265 2.26 12.371z"
    />
  </svg>
);
export default SvgGrow;
