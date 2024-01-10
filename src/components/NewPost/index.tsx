import "./styles.css";
import React, { useState, ChangeEvent } from "react";

const NewPost: React.FC = () => {
  const [showPostContainer, setShowInput] = useState(false);
  const [postSubtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [showPosts, setShowPosts] = useState(false);
  const [showNewPostButton, setShowButton] = useState(true);

  const openPostContainer = () => {
    setShowInput(true);
    setShowButton(false);
  };

  const subtitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const imageUpload = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

    const submit = () => {
        setShowInput(false);
        setShowPosts(true);
    };

  return (
    <div>
      <button className="new-post-button" onClick={openPostContainer}>Criar novo post</button>
      {showPostContainer && (
        <form onSubmit={submit} className="post-container">
          <h1>Novo post</h1>
          <input type="text" placeholder="Legenda" onChange={subtitleChange} />
          <input type="file" onChange={imageUpload} /> 
          {image && <img className="image" src={image} alt="imagem" />}
          <button className="publish-button" type="submit">Publicar</button>
        </form>
      )}
      {showPosts && (
        <div>
          <img className="post-image" src={image} alt="Post" />
          <p>@user.name:  {postSubtitle}</p>
        </div>
      )}
    </div>
  ); 
};
export default NewPost;