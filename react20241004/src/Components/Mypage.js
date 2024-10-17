export function Mypage({ formDataRef }) {
  return (
    <div className="contentCenter">
      {formDataRef.current.name}님 환영합니다.
    </div>
  );
}
