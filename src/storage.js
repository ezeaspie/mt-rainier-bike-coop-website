{
    
  }

  {
    instagram.map((instagramPost) => {
      const postData = instagramPost.node;
      return (
        <img src={postData.thumbnails[postData.thumbnails.length - 1].src} />
      )
    })
  }