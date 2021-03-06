import { useState } from "react";
import "./css/ContentPageModal.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { showcontentModal } from "../action";

interface Props {
  ngoName: string;
}

function ContentPageModal(props: Props) {

  const disptach = useDispatch();
  const state = useSelector((state: RootState) => state.contentReducer);

  const handleClickClose = () => {
    disptach(showcontentModal(false));
  }

  const handleRedirectClick = () => {
    window.location.href = "./pay"
  }

  return(
    <>
    {state.contentModalInfo.modalDisplay ? (
      <div className="modalWholeContainer">
        <div className="modalContainer shadow">
          <div className="modalContentPart shadow">
            <div id="contentModalTitle">{`${props.ngoName}단체가 MINJE님의 후원결제리스트에 담겼습니다`}</div>
            <div id="payModalSubtitle2">아래버튼을 누를시 페이페이지로 이동합니다</div>
            <div id="contentModalConfirmBtn" className="shadow" onClick={handleRedirectClick}>이동</div>
          </div>
          <div className="payPageModalCloseBtn shadow" onClick={handleClickClose}>X</div>
        </div>
      </div>
    ) : null}
    </>
  )
}

export default ContentPageModal;