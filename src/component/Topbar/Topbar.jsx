import "./Topbar.css"
import { Search, Person, Chat, Notification } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="TopbarContainer">
      <div className="TopbarLeft">
        <span className="logo">social</span>
      </div>
      <div className="TopbarCenter">
        <div className="searchbar">
          <Search />
          <input placeholder="Serch for friend,post and video" className="searchInput" />
        </div>
      </div>
      <div className="TopbarRight">
        <div className="TopbarLinks">
          <span className="TopbarLink"> HomePage</span>
          <span className="TopbarLink">TimeLine</span>
        </div>
        <div className="TopbarIcones">
          <div className="TopbarIconeItem">
            <Person />
            <span className="TopbarIconeBadge">1</span>
          </div>
          <div className="TopbarIconeItem">
            <Notification />
            <span className="TopbarIconeBadge">2</span>
          </div>
          <div className="TopbarIconeItem">
            <Chat />
            <span className="TopbarIconeBadge">3</span>
          </div>
        </div>
        <img src="/assets/1.png" classNamme="topbaring" />
      </div>
    </div>



  );
}
