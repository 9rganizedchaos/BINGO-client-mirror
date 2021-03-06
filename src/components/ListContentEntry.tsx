import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showContent, showList } from "../action";
import { RootState } from "../reducers";
import store from "../store";
import "./css/ListContentEntry.css";

interface Props {
  result: Array<string>;
}

export default function ListContentEntry(result) {
  const state = useSelector((state: RootState) => state.listReducer);
  const dispatch = useDispatch();
  const [count, setCount] = useState(30); //페이지 랜더단체 갯수
  const [content, setContent] = useState([]); //페이지 랜더단체

  // const [ngolist, setNgoList] = useState("");
  // let lists;

  // const lists = [
  //   { logo: "example1", title: "name1", description: " null" },
  //   { logo: "example2", title: "name2", description: " null" },
  //   { logo: "example1", title: "name1", description: " null" },
  //   { logo: "example2", title: "name2", description: " null" },
  //   { logo: "example1", title: "name1", description: " null" },
  // ];
  // console.log("check_list:", lists);

  const handleContentListEntryClick = (ngoId: number) => {
    dispatch(showContent(ngoId));
    window.location.href = "./content";
  };

  const handleMoreBtnClick = () => {
    setCount(count + 9); //더보기 누를시 9개씩 추가랜더
  }

  useEffect(() => {
    axios
      .get("https://server.ibingo.link/listpage")
      .then(res => {
        console.log("check get list:", res.data.data);
        const lists = res.data.data;
        dispatch(showList(lists)); //받아온 데이터 리덕스에 저장
        setContent(lists); //받아온 데이터 리액트훅스에 저장
      })
      .catch(err => console.log("list_err:", err));
    // console.log("state_check:", state.listInfo.data);
  }, []);

  store.subscribe(() => {
    let category = store.getState().listReducer.listInfoCategory.category; //현재 누른 카테고리
    let listAll = store.getState().listReducer.listInfo.data; //단체전부
    if(category === "전체") {
      setContent(listAll);
    } else {
      setContent(listAll.filter(item => {
        return item.ngocategorys[0].category.name === category;
      }))
    }
  })

  return (
    <div id='card'>
      {content.map((item: any, index) => {
        if(index < count) {
        return (
          <div
            id='ListContentEntryContainer'
            className='shadow'
            onClick={()=> handleContentListEntryClick(item.id)}
          >
            <div className='front'>
              <div id="ListContentEntryLogoBox">
              <img
                id='ListContentEntryLogo'
                alt='NGO_logo'
                src={item.logo}
              />
              </div>
              <div id='ListContentEntryTitle'>{item.name}</div>
            </div>
            <div className='back'>
              <div id='ListContentEntryDescription'>{item.description}</div>
            </div>
          </div>
        );
      }
      })}
      <div id="listContentShowMore" onClick={handleMoreBtnClick}>더보기</div>
    </div>
  );
}
