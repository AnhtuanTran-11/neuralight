"use client";

type Props = {
  children: React.ReactNode;
};

function HeightContainer({ children }: Props) {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <div style={{ height: `calc(var(${--vh}, 1vh) * 100)` }}>{children}</div>
  );
}

export default HeightContainer;
