import React from "react";
import "./ContentBody.css";

export default function ContentBody() {
  return (
    <>
      <div className="w-full min-h-screen pt-[50px] flex bg-[#1d0e2f] ps-20 relative">
        <div
          class="circleblur bg-[#341c55] w-52 h-52 top-28 right-0 blur-3xl fixed animate-pulse rounded-full"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          class="circleblur bg-[#341c55] w-60 h-60 right-[30%] bottom-16 blur-3xl fixed animate-pulse rounded-full"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="leftside w-1/2 flex flex-col justify-center items-start text-white gap-10 text-justify">
          <div className="flex flex-col items-start leading-tight">
            <p className="text-[40px] font-bold">I am Sahal</p>
            <h1 className="gradient-text text-[50px] font-bold pe-36">
              Mern Stack Developer + Web Designer
            </h1>
            {/* <h1 className="text-[50px] font-bold"></h1> */}
          </div>

          <p className="pe-36 text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
            quia officia tempore iure ullam est, nihil fugit unde quod, rerum
            reiciendis. Porro doloribus quo illo, velit enim exercitationem
            quibusdam? Laudantium, blanditiis repellat? Perferendis voluptatibus
            molestiae rerum repellendus doloremque.
          </p>
          <div className="socialIcons flex items-center justify-center gap-8">
            <button className="DownloadCv">Download CV</button>
            <div className="text-black">
              <ul className="wrapper">
                <li className="icon github">
                  <span className="tooltip">Guthub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="200"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047l.154-.03z"
                      />
                    </g>
                  </svg>
                </li>
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="200"
                    height="1.7em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4.75 1.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25Zm-2 6A.125.125 0 0 0 2.625 8v13c0 .069.056.125.125.125h4A.125.125 0 0 0 6.875 21V8a.125.125 0 0 0-.125-.125h-4Zm6.5 0A.125.125 0 0 0 9.125 8v13c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-7a1.875 1.875 0 1 1 3.75 0v7c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-8.62c0-2.427-2.11-4.325-4.525-4.106a7.168 7.168 0 0 0-2.169.548l-1.306.56V8a.125.125 0 0 0-.125-.125h-4Z"
                    />
                  </svg>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </li>
                <li className="icon whatsapp">
                  <span className="tooltip">Whatsapp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="200"
                    height="1.5em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightSide w-1/2 flex justify-center items-center">
          <img
            src="https://i.pinimg.com/originals/80/cb/83/80cb8357e43979af5d590d9906db571e.jpg"
            alt="profile _img"
            className="w-[450px] h-[450px] bg-center bg-cover bg-no-repeat rotate-3 border-4 border-[#2e075d] rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
