import post from './components/post';

import './css/reset.css';
import './css/colors.css';
import './css/page.css';

const postContainer = document.getElementById('posts')

class dataRequester {
  constructor(url){
    this.url = url;
    this.before = "";
    this.after = "";

    this.getData(url);
  }

  getData(url){
    fetch(url).then(res => res.json()).then( data => {
      const {
        after,
        before
      } = data.data;

      console.log(data)
      this.after = after;
      this.before = before;

      const postArr = data.data.children.map((postData)=>{
        const {
          title,
          num_comments,
          author
        } = postData.data;
    
        return post(title, num_comments, author);
      })
      postContainer.innerHTML = postArr.join('');

    })
  }

  getPrev(){
    const url = this.url + '&before=' + this.before;

    this.getData(url);
  }

  getNext(){
    const url = this.url + '&after=' + this.after;

    this.getData(url);
  }
  


}

const requester = new dataRequester('https://www.reddit.com/r/business/new.json?limit=4');


document.getElementById('getNext').addEventListener('click', ()=>{
  requester.getNext()
});

document.getElementById('getPrev').addEventListener('click', ()=>{
  requester.getPrev()
});




