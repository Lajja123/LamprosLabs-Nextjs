import loaderStyle from "./styles/loading.module.scss";
export default function Loading() {
  return (
    <div className={loaderStyle.center}>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
      <div className={loaderStyle.wave}></div>
    </div>
  );
}
