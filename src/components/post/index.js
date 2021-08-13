import './style.css';

export default function(text, comments, author){
  const html = `
    <div class='post'>
      <div class='post-text'>
        ${text}
      </div>
      <hr>
      <div class='post-footer'>
        <div class='post-comments'>
          ${comments} comments
        </div>
        <div class='post-author'>
          submitted by ${author}
        </div>
      </div>
    </div>
  `

  return html;
}