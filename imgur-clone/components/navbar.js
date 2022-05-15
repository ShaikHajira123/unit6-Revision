function navbar(){
    return `    <div id="nav-container">
    <div id="logo-Container">
      <img src="https://s.imgur.com/images/logo-1200-630.jpg?2" alt="" />
      <button style="font-size: 18px" id="newPost">
        <i class="fa fa-plus"></i>New Post
      </button>
    </div>
    <div id="input-container">
      <input
        type="text"
        placeholder="Images,#tags,@uses oh my!"
        
        id="query"
      /><button id="search">
        <i class="fa fa-search" aria-hidden="true" id="search"></i>
      </button>
    </div>
    <button id="cancelAdd">Go add-free</button>
    <i class="fa fa-heart" style="font-size: 30px; color: red"></i>
    <button type="button" class="icon-button">
      <span class="material-icons">notifications</span>
      <span class="icon-button__badge">2</span>
    </button>
    <div id="username-container">
      <span>HajiraShaik</span>
      <div id="user-container">H</div>
    </div>
  </div>
  <div id="searchDataDisplay"></div>`
}

export default navbar 