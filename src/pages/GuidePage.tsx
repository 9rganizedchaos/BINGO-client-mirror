import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import { useEffect, useState } from "react"
import "./css/GuidePage.css";

function GuidePage(props: any) {
  const handleMypageClick = () => {
    props.history.push("/mypage")
  }
  const handleTestClick = () => {
    props.history.push("/test")
  }
  const handleContentClick = () => {
    props.history.push("/content")
  }
  const handlePayClick = () => {
    props.history.push("/pay")
  }
  const handleLoginClick = () => {
    props.history.push("/login")
  }

  return (<div>
    <button onClick={handleMypageClick}>마이페이지로</button>
    <button onClick={handleTestClick}>테스트페이지로</button>
    <button onClick={handleContentClick}>콘텐츠페이지로</button>
    <button onClick={handlePayClick}>페이페이지로</button>
    <button onClick={handleLoginClick}>로그인페이지로</button>
  </div>)
}

export default withRouter(GuidePage);
